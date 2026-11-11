import { useState } from 'react'
import { WA_ORDER, mapsEmbed, mapsLink, site } from '../data/site'
import { PhoneIcon, PinIcon, WhatsAppIcon } from './Icons'

export function Location() {
  const [map, setMap] = useState(false)
  return (
    <section id="donde" className="bg-cream py-12" aria-labelledby="donde-t">
      <div className="wrap grid gap-8 md:grid-cols-2">
        <div>
          <h2 id="donde-t" className="section-title">Dónde estamos</h2>
          <address className="mt-4 text-lg not-italic leading-snug"><strong>{site.street}</strong><br />{site.city}</address>
          <p className="mt-4"><strong>Horario de reparto:</strong><br />{site.delivery.hours}</p>
          <p className="mt-4"><strong>Teléfono:</strong> <a href={`tel:${site.phone}`} className="underline underline-offset-4">{site.phoneDisplay}</a></p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={WA_ORDER} target="_blank" rel="noopener noreferrer" className="btn btn-wa"><WhatsAppIcon />WhatsApp</a>
            <a href={`tel:${site.phone}`} className="btn btn-outline"><PhoneIcon />Llamar</a>
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline"><PinIcon />Cómo llegar</a>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line bg-white">
          {map ? (
            <iframe title={`Mapa de ${site.name}`} src={mapsEmbed} className="absolute inset-0 h-full w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          ) : (
            <div className="absolute inset-0 grid place-items-center p-5 text-center">
              <div>
                <PinIcon width={36} height={36} className="mx-auto text-brand" />
                <button onClick={() => setMap(true)} className="btn btn-outline mt-3">Cargar mapa</button>
                <p className="mx-auto mt-3 max-w-xs text-xs text-soft">El mapa es de Google y solo se carga si lo pides (puede usar cookies de Google).</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
