import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Menu } from './components/Menu'
import { Gallery } from './components/Gallery'
import { Delivery } from './components/Delivery'
import { Location } from './components/Location'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu />
        <Gallery />
        <Delivery />
        <Location />
      </main>
      <Footer />
    </>
  )
}
