const PHOTOS = [
  { src: 'tacos-xl-gratinado-640', alt: 'Dos tacos gratinados sobre una bandeja de madera' },
  { src: 'tacos-capas-640', alt: 'Taco cortado: capas de carne y queso' },
  { src: 'tacos-especial-640', alt: 'Taco especial abierto con carne y queso gratinado' },
  { src: 'tacos-tiras-640', alt: 'Taco con tiras de pollo crispy y queso gratinado' },
]

export function Gallery() {
  return (
    <section id="galeria" className="py-12" aria-labelledby="gal-t">
      <div className="wrap">
        <h2 id="gal-t" className="section-title">Así salen</h2>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {PHOTOS.map((p) => (
            <img key={p.src} src={`/media/img/${p.src}.webp`} alt={p.alt} width={640} height={640} loading="lazy" decoding="async" className="aspect-square w-full rounded-lg object-cover" />
          ))}
        </div>
      </div>
    </section>
  )
}
