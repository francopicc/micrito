## Micrito - Transporte Publico App Web

Micrito es una aplicacion, anteriormente cerrada, que obtenia los datos de una API de servicio de micros transporte publico. Por ahora solo funciona con la linea 202, es configurable, pero, si se quiere se pueden añadir mas.
Esta hecha totalmente por mi.

El proyecto necesita grandes recursos, y por eso mismo, deje de mantenerlo porque era muy caro.

Esta hecho en NextJS y Tailwind CSS.

Para iniciar la aplicación debemos correr el comando:

```
npm run dev
```

Y necesitamos estas variables de entorno:

```
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
TWITTER_CLIENT_ID
TWITTER_CLIENT_SECRET
NEXTAUTH_SECRET
NEXTAUTH_URL
MONGODB_URI
```

Con ayuda de NextAuth (https://next-auth.js.org/providers/) conseguiran las variables del OAuth que les quedan. Recomiendo usar MongoDB Atlas.
