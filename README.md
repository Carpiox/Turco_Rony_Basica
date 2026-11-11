# Döner Kebab Cieza · web básica

Una sola página, ligera y mobile-first. Vite + React + TypeScript + Tailwind (sin animaciones, vídeo ni 3D).

```bash
npm install
npm run dev        # desarrollo
npm run build      # producción -> dist/
npm run preview    # probar el build
```

## Despliegue en Cloudflare

- **Workers (como la premium):** conecta el repo en Workers & Pages → Create → Import a repository. Build: `npm ci && npm run build`. Deploy: `npx wrangler deploy` (usa `wrangler.jsonc`, que sirve `dist/`).
- **Pages:** build `npm ci && npm run build`, directorio de salida `dist`.
- Opcional: variable `VITE_SITE_URL=https://tu-dominio.com` para que Open Graph incluya `og:image` y `og:url` con URL absoluta. Sin ella se omiten.

## Dónde se edita

- `src/data/site.ts`: teléfono, dirección, envío, reparto, enlaces y datos legales (`LEGAL`: titular, NIF, email — **rellenar antes de publicar**).
- `src/data/menu.ts`: carta y precios.
- Fotos en `public/media/img/` (las mismas, ya procesadas, de la premium).

## Pendiente de confirmar por el dueño (no se muestra)

Horario de apertura del local, precio de bebidas y de los extras del taco, IVA incluido, "caseras", qué carne lleva cada plato, reseñas de Google, enlaces de Glovo/Just Eat y alérgenos por plato. Solo se muestra el horario de **reparto** (13:15–15:00 y 19:00–00:00), igual que en la premium.
