import { MENU } from '../data/menu'

export function Menu() {
  return (
    <section id="carta" className="bg-cream py-12" aria-labelledby="carta-t">
      <div className="wrap">
        <h2 id="carta-t" className="section-title">La carta</h2>
        <p className="mt-2 text-soft">Menú = patatas + bebida.</p>
        <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-x-12">
          {MENU.map((cat) => (
            <div key={cat.id}>
              <h3 className="border-b-2 border-brand pb-2 text-xl text-brand">{cat.title}</h3>
              <ul className="divide-y divide-line">
                {cat.items.map((it) => {
                  const [main, ...rest] = it.prices
                  const single = main && !main.label
                  const extras = single ? rest : it.prices
                  return (
                    <li key={it.name} className="py-3">
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-bold">{it.name}</span>
                        {single && <span className="shrink-0 font-bold">{main.value}</span>}
                      </div>
                      {it.desc && <p className="mt-0.5 text-sm leading-snug text-soft">{it.desc}</p>}
                      {extras.length > 0 && (
                        <p className="mt-1 flex flex-wrap gap-x-4 gap-y-0.5 text-sm">
                          {extras.map((p) => (
                            <span key={p.label} className="text-soft">{p.label} <strong className="text-ink">{p.value}</strong></span>
                          ))}
                        </p>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
