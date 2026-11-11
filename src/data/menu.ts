// Carta y precios reales (de la versión premium). Sin fotos por producto ni filtros.
// "Menú" = patatas + bebida. Precio de bebidas, extras del taco e IVA: sin confirmar, no se muestran.

export interface Price { label?: string; value: string }
export interface Item { name: string; desc?: string; prices: Price[] }
export interface Category { id: string; title: string; note?: string; items: Item[] }

const e = (n: string) => `${n} €`
const menu = (n: string): Price => ({ label: 'Menú', value: e(n) })
const grande: Price = { label: 'Grande', value: e('+1,00') }

export const MENU: Category[] = [
  {
    id: 'tacos',
    title: 'Tacos',
    items: [
      { name: 'Tacos francés normal', desc: 'Pechugas de pollo rebozadas, queso mozzarella, salsa Tacos Argelina, salsa blanca y verduras a tu gusto.',
        prices: [{ value: e('6,00') }, { label: 'XXXL (doble)', value: e('8,00') }, menu('8,00')] },
      { name: 'Tacos con carne kebab', desc: 'Carne kebab de pollo y ternera, queso mozzarella, salsa Tacos Argelina, salsa blanca y verduras a tu gusto.',
        prices: [{ value: e('6,00') }, { label: 'XXXL (doble)', value: e('8,00') }, menu('8,00')] },
      { name: 'Tacos con pechugas y kebab', desc: 'Pechugas de pollo rebozadas y carne kebab de pollo y ternera, mozzarella, salsa Tacos Argelina, salsa blanca y verduras.',
        prices: [{ value: e('7,00') }, { label: 'XXXL (doble)', value: e('9,00') }, menu('9,00')] },
      { name: 'Tacos gratinado en horno', desc: 'Queso fundido en horno, pechugas de pollo rebozadas, mozzarella, salsa Tacos Argelina, salsa blanca y verduras.',
        prices: [{ value: e('8,00') }, menu('10,00')] },
      { name: 'Tacos especial', desc: 'Arriba, tiras de pollo crispy con queso fundido al horno; dentro, pechugas de pollo rebozadas, mozzarella, salsa Tacos Argelina, salsa blanca y verduras.',
        prices: [{ value: e('9,00') }, menu('11,00')] },
    ],
  },
  {
    id: 'doner',
    title: 'Dürum, kebab y pizzas',
    items: [
      { name: 'Dürum', desc: 'Pan fino a la plancha con carne de döner, ensalada y salsas.', prices: [{ value: e('4,50') }, grande, menu('7,00')] },
      { name: 'Kebab', desc: 'Pan crujiente relleno de döner, lechuga, tomate y cebolla.', prices: [{ value: e('4,00') }, grande, menu('6,50')] },
      { name: 'Dürum gratinado', desc: 'Nuestro dürum con queso fundido y gratinado por fuera.', prices: [{ value: e('6,00') }, grande, menu('8,00')] },
      { name: 'Pizza turca', prices: [{ value: e('5,50') }, grande, menu('8,00')] },
      { name: 'Pizza kebab', prices: [{ value: e('7,00') }, grande, menu('9,50')] },
    ],
  },
  {
    id: 'platos',
    title: 'Platos',
    items: [
      { name: 'Plato kebab', desc: 'Carne de döner con arroz, ensalada y salsas.', prices: [{ value: e('7,50') }, menu('9,50')] },
      { name: 'Plato Mesopotamia', desc: 'Con queso fundido por encima.', prices: [{ value: e('7,50') }, menu('9,50')] },
      { name: 'Plato degustación', desc: 'Para probar de todo: carne, falafel, patatas, arroz y ensalada.',
        prices: [{ label: '1 persona', value: e('9,90') }, { label: 'Menú 1 persona', value: e('12,00') }, { label: '2 personas', value: e('11,90') }, { label: 'Menú 2 personas', value: e('14,00') }] },
      { name: 'Tapa (box)', desc: 'Döner en caja con salsas.',
        prices: [{ label: 'Pequeña', value: e('2,50') }, { label: 'Mediana', value: e('4,00') }, { label: 'Grande', value: e('7,00') }, { label: 'XXXL', value: e('9,00') }] },
    ],
  },
  {
    id: 'falafel',
    title: 'Falafel y ensaladas',
    items: [
      { name: 'Dürum falafel', desc: 'Dürum de falafel con verduras y salsa.', prices: [{ value: e('4,50') }, grande, menu('7,00')] },
      { name: 'Plato falafel', prices: [{ value: e('6,00') }, menu('8,50')] },
      { name: 'Ensalada turca', prices: [{ value: e('5,00') }, { label: 'Con carne', value: e('7,50') }] },
    ],
  },
  {
    id: 'raciones',
    title: 'Pollo y fritos',
    items: [
      { name: 'Palomitas con queso fundido', prices: [{ value: e('5,00') }, menu('7,50')] },
      { name: 'Tiras de pollo', prices: [{ label: '3 uds.', value: e('3,50') }, { label: '5 uds.', value: e('5,50') }, { label: 'Menú 3 uds.', value: e('6,00') }] },
      { name: 'Palomitas de pollo', prices: [{ label: '10 uds.', value: e('2,00') }, { label: '16 uds.', value: e('3,00') }, { label: 'Menú 16 uds.', value: e('5,50') }] },
      { name: 'Alitas de pollo', prices: [{ label: '5 uds.', value: e('3,50') }, { label: '8 uds.', value: e('5,50') }, { label: 'Menú 5 uds.', value: e('5,50') }] },
      { name: 'Nuggets', prices: [{ label: '6 uds.', value: e('3,50') }, { label: '10 uds.', value: e('5,50') }, { label: 'Menú 6 uds.', value: e('5,50') }] },
      { name: 'Palitos de queso', prices: [{ label: '6 uds.', value: e('3,50') }, { label: '9 uds.', value: e('5,50') }] },
      { name: 'Aros de cebolla', prices: [{ label: '10 uds.', value: e('3,50') }, { label: '15 uds.', value: e('5,50') }] },
      { name: 'Calamares', prices: [{ label: '6 uds.', value: e('3,50') }, { label: '10 uds.', value: e('5,50') }] },
    ],
  },
  {
    id: 'acompanar',
    title: 'Para acompañar',
    items: [
      { name: 'Patatas fritas', prices: [{ label: 'Pequeña', value: e('2,00') }, { label: 'Mediana', value: e('3,00') }, { label: 'Grande', value: e('4,50') }] },
      { name: 'Patatas deluxe', prices: [{ label: 'Pequeña', value: e('2,50') }, { label: 'Mediana', value: e('3,50') }, { label: 'Grande', value: e('5,00') }] },
      { name: 'Arroz basmati', prices: [{ label: 'Pequeña', value: e('2,00') }, { label: 'Mediana', value: e('3,50') }, { label: 'Grande', value: e('5,00') }] },
    ],
  },
  {
    id: 'bebidas',
    title: 'Bebidas',
    items: [{ name: 'Refrescos', desc: 'Todos los menús incluyen bebida. Pregunta por la selección de refrescos.', prices: [] }],
  },
]
