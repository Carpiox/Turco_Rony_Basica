import { WA_ORDER, site } from '../data/site'
import { WhatsAppIcon } from './Icons'

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-white">
      <div className="wrap flex h-16 items-center justify-between gap-3">
        <a href="#top" className="flex items-center gap-2.5" aria-label={`${site.name}, inicio`}>
          <img src="/media/img/logo-256.webp" alt="" width={40} height={40} className="h-10 w-10 rounded-full" />
          <span className="text-[13px] sm:text-[15px] font-extrabold uppercase leading-none tracking-tight">Döner Kebab<br /><span className="text-brand">Cieza</span></span>
        </a>
        <a href={WA_ORDER} target="_blank" rel="noopener noreferrer" className="btn btn-wa !min-h-[44px] !gap-1.5 !px-3 !py-2 whitespace-nowrap text-[13px] sm:!px-4 sm:text-base">
          <WhatsAppIcon width={18} height={18} />Pedir por WhatsApp
        </a>
      </div>
    </header>
  )
}
