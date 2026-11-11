import { LEGAL, site } from '../data/site'

export function Footer() {
  return (
    <footer className="bg-ink py-10 text-sm text-white/75">
      <div className="wrap space-y-6">
        <div>
          <img src="/media/img/logo-256.webp" alt="Logo de Istambul Döner Kebab Cieza" width={96} height={96} loading="lazy" className="mb-3 h-24 w-24 rounded-full" />
          <p className="text-base font-bold text-white">{site.name}</p>
          <address className="mt-1 not-italic">{site.street}, {site.city}<br />
            <a href={`tel:${site.phone}`} className="underline underline-offset-4">{site.phoneDisplay}</a></address>
          <p className="mt-2 flex gap-4">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Instagram</a>
            <a href={site.tiktok} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">TikTok</a>
          </p>
        </div>
        <div className="space-y-2 border-t border-white/15 pt-5 text-xs leading-relaxed">
          <p><strong className="text-white">Aviso legal.</strong> Titular: {LEGAL.titular} · NIF/CIF: {LEGAL.nif} · Email: {LEGAL.email}. Esta web es informativa; los precios y la carta pueden cambiar y prevalece lo indicado en el local.</p>
          <p>Esta web no usa cookies propias ni recoge datos personales. El mapa de Google solo se carga si pulsas «Cargar mapa».</p>
          <p>© {new Date().getFullYear()} {site.name}.</p>
        </div>
      </div>
    </footer>
  )
}
