import Header from '@/components/Header/Header'
import Slider from '@/components/Slider/Slider'
import Category from '@/components/Category/Category'
import About from '@/components/About/About'
import Apply from '@/components/Apply/Apply'
import Course from "@/components/Course/Course";
import VideoFeature from "@/components/VideoFeature/VideoFeature";

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <Category/>
      <About/>
      <Apply/>
      <Course/>
      <VideoFeature/>
      {/* Konten lainnya */}
    </>
  )
}