import { WA_ORDER, site } from '../data/site'
import { PhoneIcon, WhatsAppIcon } from './Icons'

export function Hero() {
  return (
    <section id="top" className="bg-brand text-white">
      <div className="mx-auto grid max-w-5xl md:grid-cols-2 md:items-center">
        <img
          src="/media/img/hero-taco-800.webp"
          srcSet="/media/img/hero-taco-800.webp 800w, /media/img/hero-taco-1600.webp 1600w"
          sizes="(min-width:768px) 50vw, 100vw"
          alt="Taco gratinado cortado por la mitad, con queso fundido y tiras de pollo crujientes"
          width={1600} height={1200} fetchPriority="high"
          className="aspect-[4/3] w-full object-cover md:order-2 md:aspect-[5/4] md:rounded-xl"
        />
        <div className="px-4 py-8 sm:px-6 md:order-1 md:py-12">
          <p className="text-sm font-bold uppercase tracking-wide">{site.name}</p>
          <h1 className="mt-2 text-5xl sm:text-6xl">Tacos gratinados</h1>
          <p className="mt-4 max-w-md text-lg leading-snug">De pollo o mixto, con queso por encima. Pídelos por WhatsApp y te los llevamos a casa.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={WA_ORDER} target="_blank" rel="noopener noreferrer" className="btn btn-wa"><WhatsAppIcon />Pedir por WhatsApp</a>
            <a href={`tel:${site.phone}`} className="btn btn-light"><PhoneIcon />Llamar</a>
          </div>
          <p className="mt-5 text-sm font-semibold">Envío por solo {site.delivery.price} en {site.delivery.area} · Pedido mínimo {site.delivery.minOrder}</p>
        </div>
      </div>
    </section>
  )
}
