# Publicacion de ZENOVA

Ruta elegida: Netlify para la web y Render para el backend de ZENIN.

## 1. Subir el proyecto a GitHub

Sube esta carpeta completa:

`C:\Users\Ibuprofeno\Documents\Codex\2026-06-10\files-mentioned-by-the-user-pensamiento`

No subas claves secretas. El archivo `backend/.env` debe quedarse local.

## 2. Publicar el backend en Render

1. Entra a Render y crea un Blueprint desde tu repositorio.
2. Render detectara `render.yaml`.
3. Cuando pida variables, agrega `GEMINI_API_KEY` con tu clave real.
4. Al terminar, copia la URL publica del backend, parecida a:

`https://zenova-backend.onrender.com`

Prueba esta ruta:

`https://TU-BACKEND.onrender.com/api/health`

Debe responder `status: ok`.

## 3. Publicar la web en Netlify

1. Entra a Netlify y crea un sitio desde el mismo repositorio.
2. Netlify detectara `netlify.toml`.
3. En variables de entorno agrega:

`ZENIN_BACKEND_URL=https://TU-BACKEND.onrender.com`

4. Lanza el deploy.

## 4. Confirmacion

Abre la URL de Netlify y entra al chat de ZENIN. Si Gemini esta configurado en Render, ZENIN respondera usando el backend publico.

Si cambias la URL del backend, actualiza `ZENIN_BACKEND_URL` en Netlify y vuelve a desplegar.
