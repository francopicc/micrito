import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
import chromium from 'chrome-aws-lambda'
import cron from 'node-cron';

let idParada = "";

let cacheData = {}; // Caché compartida para almacenar los resultados de la solicitud
let lastUpdated = null; // Última vez que se actualizó la caché
const executablePath = await chromium.executablePath;

async function scrapeData(codigoLinea, idParada) {
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: executablePath,
    headless: true,
    ignoreHTTPSErrors: true,
  });
  const page = await browser.newPage();

  await page.goto('https://cuandollega.smartmovepro.net/unionplatense/arribos/');

  const response = await page.evaluate(async (n, t) => {
    function getArribos(codigoLinea, idParada) {
      return fetch("https://cuandollega.smartmovepro.net/unionplatense/arribos/" + "?codLinea=" + codigoLinea + "&idParada=" + idParada, {
        method: "POST",
        headers: {
          RequestVerificationToken: $('input[name="CSRF-TOKEN-CL-FORM"]').val(),
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          codLinea: codigoLinea,
          idParada: idParada,
        }),
      }).then(response => {
        if (!response.ok) {
          throw new Error("No se encontraron arribos disponibles para esta parada. Código de respuesta: " + response.status);
        }
        return response.json();
      });
    }

    const data = await getArribos(n, t);
    return data.arribos;
  }, codigoLinea, idParada);

  await browser.close();

  return response;
}

async function updateCache() {
  try {
    const responses = await scrapeData(95, idParada);

    cacheData[idParada] = responses; // Actualizar la caché compartida con los nuevos datos
    lastUpdated = new Date(); // Registrar la última vez que se actualizó la caché
  } catch (error) {
    console.error(error);
  }
}

function startCacheRefresh() {
  // Actualizar la caché compartida al iniciar el servidor
  updateCache();

  // Programar la actualización de la caché cada 1 minuto
  cron.schedule('*/1 * * * *', async () => {
    await updateCache();
  });
}

export async function GET(request) {
  try {
    const currentTime = new Date();
    const cacheTimeout = 60000; // 1 minute in milliseconds

    // Get the query parameter 'parada' from the request URL
    const { searchParams } = new URL(request.url);
    idParada = searchParams.get('parada');

    // Check if the cache is empty or if 1 minute has passed since the last update
    if (Object.keys(cacheData).length === 0 || lastUpdated === null || currentTime - lastUpdated > cacheTimeout) {
      // Update the shared cache if it's empty or 1 minute has passed
      await updateCache();
    }

    // Check if the 'parada' query parameter is provided and exists in the cache
    if (idParada && cacheData.hasOwnProperty(idParada)) {
      return NextResponse.json(cacheData[idParada]);
    } else {
      return NextResponse.json({ error: 'Invalid or missing parada ID' }, { status: 400 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Iniciar la actualización de la caché compartida al iniciar el servidor
startCacheRefresh();