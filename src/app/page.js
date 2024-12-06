import Header from '@/components/Header/Header'
import Slider from '@/components/Slider/Slider'
import Category from '@/components/Category/Category'
import About from '@/components/About/About'

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <Category/>
      <About/>
      {/* Konten lainnya */}
    </>
  )
}