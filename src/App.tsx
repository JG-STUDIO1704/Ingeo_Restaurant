import { Navbar } from './components/Navbar'
import { Hero } from './components/sections/Hero'
import { FeaturedDishes } from './components/sections/FeaturedDishes'
import { InteractiveMenu } from './components/sections/InteractiveMenu'
import { Testimonials } from './components/sections/Testimonials'
import { HappyHour } from './components/sections/HappyHour'
import { PracticalInfo } from './components/sections/PracticalInfo'
import { Reservation } from './components/sections/Reservation'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian text-chalk overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <FeaturedDishes />
        <InteractiveMenu />
        <Testimonials />
        <HappyHour />
        <PracticalInfo />
        <Reservation />
      </main>
      <Footer />
    </div>
  )
}
