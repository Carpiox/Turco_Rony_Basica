// Datos reales del negocio (tomados de la versión premium).
// Lo que el dueño aún no ha confirmado NO se incluye: ver README, apartado "Pendiente de confirmar".

export const site = {
  name: 'Döner Kebab Cieza',
  phone: '+34631188411',
  phoneDisplay: '631 18 84 11',
  street: 'Gran Vía Juan Carlos I, 30',
  city: '30530 Cieza, Murcia',
  instagram: 'https://www.instagram.com/kebab_cieza/',
  tiktok: 'https://www.tiktok.com/@kebap_cieza',
  delivery: {
    price: '1 €',
    area: 'Cieza',
    minOrder: '6 €',
    hours: '13:15–15:00 y 19:00–00:00', // horario de reparto
  },
}

// Datos legales del titular: rellenar antes de publicar.
export const LEGAL = {
  titular: '[NOMBRE O RAZÓN SOCIAL]',
  nif: '[NIF/CIF]',
  email: '[EMAIL DE CONTACTO]',
}

export const WA_ORDER = `https://wa.me/${site.phone.replace('+', '')}?text=${encodeURIComponent('¡Hola! Quiero hacer un pedido en Döner Kebab Cieza 🥙')}`

export const mapsQuery = encodeURIComponent(`${site.name}, ${site.street}, ${site.city}`)
export const mapsEmbed = `https://www.google.com/maps?q=${mapsQuery}&output=embed`
// Ficha de Google Maps del local (enlace facilitado por el dueño)
export const mapsLink = 'https://maps.app.goo.gl/gVyt2ziCXCXvshoJ8'
