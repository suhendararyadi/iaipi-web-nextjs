import Header from '@/components/Header/Header'
import Header2 from '@/components/Header2/Header2'
import Slider from '@/components/Slider/Slider'
import Category from '@/components/Category/Category'
import About from '@/components/About/About'
import Apply from '@/components/Apply/Apply'
import Course from "@/components/Course/Course";
import VideoFeature from "@/components/VideoFeature/VideoFeature";
import Teachers from "@/components/Teachers/Teachers";
import Teachers2 from "@/components/Teachers2/Teachers2";
import Publication from '@/components/Publication/Publication'
import Testimonial from '@/components/Testimonial/Testimonial'
import News from '@/components/News/News'
import LembagaHome from '@/components/Lembaga/LembagaHome'
import Footer from '@/components/Footer/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat/WhatsAppFloat'

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Header2 />
      <Slider />
      {/* <Category/> */}
      {/* <About/> */}
      <Teachers2/>
      <News />
      <Course/>
      <Apply/>
      <VideoFeature/>
      <Publication/>
      <Testimonial />
      <LembagaHome />
      <Footer/>
      <WhatsAppFloat />
    </>
  )
}