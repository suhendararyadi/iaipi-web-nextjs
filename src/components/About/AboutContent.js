'use client'
import Image from 'next/image'

const AboutContent = () => {
  return (
    <section id="about-page" className="pt-70 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-title mt-50">
              <h5>About us</h5>
              <h2>Welcome to Edubin</h2>
            </div>
            <div className="about-cont">
              <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt mauris.</p>
              <p>auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt mauris</p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-image mt-50">
              <Image 
                src="/images/about/about-2.jpg" 
                alt="About"
                width={600}
                height={400}
                style={{
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
            </div>
          </div>
        </div>

        <div className="about-items pt-60">
          <div className="row justify-content-center">
            {/* ... Items content remains the same ... */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutContent