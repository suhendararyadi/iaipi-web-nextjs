'use client'
import { useEffect, useState } from 'react'

const Counter = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const initCounter = () => {
      if (window.jQuery && window.jQuery.fn.counterUp) {
        const $ = window.jQuery;
        $('.counter').counterUp({
          delay: 10,
          time: 2000
        });
      }
    }
    setTimeout(initCounter, 1000)
  }, [])

  if (!isMounted) return null

  return (
    <section 
      id="counter-part" 
      className="bg_cover pt-65 pb-110" 
      style={{backgroundImage: "url('/images/bg-2.jpg')"}} 
      data-overlay="8"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="singel-counter text-center mt-40">
              <span 
                className="counter" 
                data-count="30000"
                suppressHydrationWarning
              >
                1000
              </span>
              <span>+</span>
              <p>Mahasiswa</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="singel-counter text-center mt-40">
              <span 
                className="counter" 
                data-count="41000"
                suppressHydrationWarning
              >
                4
              </span>
              <span></span>
              <p>Program Studi</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="singel-counter text-center mt-40">
              <span 
                className="counter" 
                data-count="11000"
                suppressHydrationWarning
              >
                30
              </span>
              <span>+</span>
              <p>Dosen dan Peneliti</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="singel-counter text-center mt-40">
              <span 
                className="counter" 
                data-count="39000"
                suppressHydrationWarning
              >
                39000
              </span>
              <span>+</span>
              <p>Global Teachers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Counter