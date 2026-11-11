import { WA_ORDER, site } from '../data/site'
import { WhatsAppIcon } from './Icons'

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-white">
      <div className="wrap flex h-16 items-center justify-between gap-3">
        <a href="#top" className="flex items-center gap-2.5" aria-label={`${site.name}, inicio`}>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24"><rect x="11" y="1" width="2" height="22" rx="1" fill="#fff" /><path d="M5 5h14l-2 14H7z" fill="#fbf6ee" /><path d="M7 9h10M7.6 13h8.8" stroke="#c8202a" strokeWidth="1.5" /></svg>
          </span>
          <span className="text-[15px] font-extrabold uppercase leading-none tracking-tight">Döner Kebab<br /><span className="text-brand">Cieza</span></span>
        </a>
        <a href={WA_ORDER} target="_blank" rel="noopener noreferrer" className="btn btn-wa !min-h-[44px] !px-4 !py-2 text-sm sm:text-base">
          <WhatsAppIcon width={18} height={18} />Pedir por WhatsApp
        </a>
      </div>
    </header>
  )
}
