import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Open Graph necesita una URL absoluta para la imagen. Si defines VITE_SITE_URL
// (p. ej. https://tu-dominio.com) se añade og:image y og:url; si no, se omiten.
const siteUrl = (process.env.VITE_SITE_URL ?? '').replace(/\/*$/, '/')
const hasSite = Boolean(process.env.VITE_SITE_URL)

function og(): Plugin {
  return {
    name: 'og-site-url',
    transformIndexHtml(html) {
      if (!hasSite) return html.split('\n').filter((l) => !l.includes('__SITE_URL__')).join('\n')
      return html.replaceAll('__SITE_URL__', siteUrl)
    },
  }
}

export default defineConfig({ base: '/', plugins: [react(), og()] })
