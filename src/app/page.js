import Header from '@/components/Header/Header'
import Header2 from '@/components/Header2/Header2'
import Slider from '@/components/Slider/ModernSlider'
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
import { getHashnodePosts } from '@/utils/hashnodeApi'

// Rebuild the homepage (and refresh Hashnode news) at most once per hour.
export const revalidate = 3600

export default async function Home() {
  // Fetch news on the server so it renders in the initial HTML.
  const newsPosts = await getHashnodePosts()

  return (
    <>
      {/* <Header /> */}
      <Header2 />
      <Slider />
      {/* <Category/> */}
      {/* <About/> */}
      <Teachers2/>
      <News posts={newsPosts} />
      <Course/>
      <Apply/>
      <VideoFeature/>
      <Publication/>
      <Testimonial />
      <LembagaHome />
      <Footer/>
    </>
  )
}