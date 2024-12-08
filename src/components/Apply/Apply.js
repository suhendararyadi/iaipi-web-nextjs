'use client'
import Link from 'next/link'

const Apply = () => {
  return (
    <section id="apply-aprt" className="section pb-120">
      <div className="container">
        <div className="apply">
          <div className="row no-gutters">
            {/* Apply for fall 2019 */}
            <div className="col-lg-6">
              <div className="apply-cont apply-color-1">
                <h3>Pendaftaran 2025</h3>
                <p>Pendaftaran tahun akademik 2025 akan segera dimulai. Segera persiapkan diri kamu.</p>
                <Link href="https://staipersisgarut.pmb.siakad.tech" className="main-btn"
                  target="_blank" 
                  rel="noopener noreferrer"
                >Daftar</Link>
              </div>
            </div>
            
            {/* Apply for scholarship */}
            <div className="col-lg-6">
              <div className="apply-cont apply-color-2">
                <h3>Daftar Beasiswa</h3>
                <p>Kami akan membantu untuk pengajuan beasiswa. Ayo segera bergabung dengan kami</p>
                <Link href="staipersisgarut.pmb.siakad.tech" className="main-btn"
                target="_blank" 
                rel="noopener noreferrer"
                >Daftar</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Apply