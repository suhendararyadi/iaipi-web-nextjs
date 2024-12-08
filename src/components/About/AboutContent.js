'use client'
import Image from 'next/image'

const AboutContent = () => {
  return (
    <section id="about-page" className="pt-70 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-title mt-50">
              <h5>Tentang Kami</h5>
              <h2>Selamat Datang</h2>
            </div>
            <div className="about-cont">
              <p>Institut Agama Islam PERSIS Garut yang selanjutnya disebut IAI PERSIS Garut adalah perguruan tinggi yang menyelenggarakan pendidikan 
                akademik, profesional dalam kelompok disiplin agama, ilmu 
                pengetahuan, teknologi dan kesenian</p>
              <p>IAI PERSIS Garut berdasarkan pada Alquran, Sunah, dan mengacu pada
              perundang-undangan yang tidak bertentangan dengan Alquran dan Sunah.</p>
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
      </div>
    </section>
  )
}

export default AboutContent