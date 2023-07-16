import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
import cron from 'node-cron';

const paradas = [
  "BE2002",
];

let cacheData = {}; // Caché compartida para almacenar los resultados de la solicitud
let lastUpdated = null; // Última vez que se actualizó la caché

async function scrapeData(codigoLinea, idParada) {
  const browser = await puppeteer.launch({ headless: 'new' });
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
    const responses = await Promise.all(
      paradas.map(parada => scrapeData(95, parada))
    );

    const newCacheData = {};
    for (let i = 0; i < paradas.length; i++) {
      newCacheData[paradas[i]] = responses[i];
    }

    cacheData = newCacheData; // Actualizar la caché compartida con los nuevos datos
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
    const cacheTimeout = 60000; // 1 minuto en milisegundos

    // Verificar si la caché compartida está vacía o si ha pasado 1 minuto desde la última actualización
    if (Object.keys(cacheData).length === 0 || lastUpdated === null || currentTime - lastUpdated > cacheTimeout) {
      // Actualizar la caché compartida si está vacía o ha pasado 1 minuto
      await updateCache();
    }

    return NextResponse.json(cacheData);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Iniciar la actualización de la caché compartida al iniciar el servidor
startCacheRefresh();
