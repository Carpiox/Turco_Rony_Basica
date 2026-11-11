import { WA_ORDER, site } from '../data/site'
import { WhatsAppIcon } from './Icons'

export function Delivery() {
  return (
    <section id="pedir" className="bg-ink py-12 text-white" aria-labelledby="pedir-t">
      <div className="wrap">
        <h2 id="pedir-t" className="section-title">Cómo pedir</h2>
        <p className="mt-3 max-w-xl text-lg">Haz tu pedido por WhatsApp: escríbenos qué quieres y si es para recoger o con envío a domicilio.</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          <li className="rounded-lg bg-white/10 p-4"><strong className="text-xl">{site.delivery.price}</strong><br />Envío a domicilio en {site.delivery.area}</li>
          <li className="rounded-lg bg-white/10 p-4"><strong className="text-xl">{site.delivery.minOrder}</strong><br />Pedido mínimo</li>
        </ul>
        <a href={WA_ORDER} target="_blank" rel="noopener noreferrer" className="btn btn-wa mt-7"><WhatsAppIcon />Pedir por WhatsApp</a>
      </div>
    </section>
  )
}
