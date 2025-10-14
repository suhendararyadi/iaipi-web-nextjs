'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { trackCTAClick } from '@/utils/analytics'

const Apply = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Set deadline: 31 Desember 2024
    const deadline = new Date('2025-12-31T23:59:59').getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = deadline - now

      if (distance < 0) {
        clearInterval(timer)
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="apply-aprt" className="section pb-120">
      <div className="container">
        <div className="apply">
          <div className="row no-gutters">
            {/* Apply for PMB 2025 */}
            <div className="col-lg-6">
              <div className="apply-cont apply-color-1">
                <div className="apply-badge">
                  <i className="fa fa-clock-o"></i> Batch Terakhir
                </div>
                <h3>Pendaftaran Mahasiswa Baru 2025/2026</h3>
                <p>
                  <strong>Kuota Terbatas!</strong> Daftar sekarang dan raih kesempatan menjadi bagian dari kampus Islam terbaik di Garut.
                </p>
                
                {/* Countdown Timer */}
                <div className="countdown-timer">
                  <div className="countdown-item">
                    <span className="countdown-number">{timeLeft.days}</span>
                    <span className="countdown-label">Hari</span>
                  </div>
                  <div className="countdown-item">
                    <span className="countdown-number">{timeLeft.hours}</span>
                    <span className="countdown-label">Jam</span>
                  </div>
                  <div className="countdown-item">
                    <span className="countdown-number">{timeLeft.minutes}</span>
                    <span className="countdown-label">Menit</span>
                  </div>
                  <div className="countdown-item">
                    <span className="countdown-number">{timeLeft.seconds}</span>
                    <span className="countdown-label">Detik</span>
                  </div>
                </div>

                <div className="cta-buttons">
                  <Link 
                    href="https://staipersisgarut.pmbonline.siakad.tech/" 
                    className="main-btn cta-primary"
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => trackCTAClick('Daftar PMB 2025', 'Apply Section - Main')}
                  >
                    <i className="fa fa-user-plus"></i> Daftar Sekarang
                  </Link>
                </div>
                <small className="deadline-text">
                  <i className="fa fa-calendar"></i> Pendaftaran ditutup: 31 Desember 2025
                </small>
              </div>
            </div>
            
            {/* Apply for scholarship */}
            <div className="col-lg-6">
              <div className="apply-cont apply-color-2">
                <div className="apply-badge scholarship">
                  <i className="fa fa-graduation-cap"></i> Beasiswa Tersedia
                </div>
                <h3>Program Beasiswa 2025</h3>
                <p>
                  Dapatkan bantuan biaya kuliah hingga <strong>100%</strong>. Beasiswa prestasi, hafidz Quran, dan kurang mampu tersedia untuk mahasiswa berprestasi.
                </p>
                
                {/* Social Proof */}
                <div className="social-proof">
                  <div className="proof-item">
                    <i className="fa fa-users"></i>
                    <span><strong>20+</strong> Penerima Beasiswa</span>
                  </div>
                  <div className="proof-item">
                    <i className="fa fa-trophy"></i>
                    <span><strong>Full Scholarship</strong> Tersedia</span>
                  </div>
                </div>

                <div className="cta-buttons">
                  <Link 
                    href="https://staipersisgarut.pmbonline.siakad.tech/" 
                    className="main-btn cta-secondary"
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => trackCTAClick('Daftar Beasiswa', 'Apply Section - Scholarship')}
                  >
                    <i className="fa fa-star"></i> Daftar Beasiswa
                  </Link>
                </div>
                <small className="deadline-text">
                  <i className="fa fa-info-circle"></i> Syarat & ketentuan berlaku
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Apply