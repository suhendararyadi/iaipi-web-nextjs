import Image from 'next/image'
import Header2 from '@/components/Header2/Header2'
import Footer from '@/components/Footer/Footer'
import PageBanner from '@/components/PageBanner/PageBanner'

const posterImages = [
  { src: '/images/pmb/poster-pmb-1.jpeg', alt: 'Poster PMB 1 - Informasi Umum' },
  { src: '/images/pmb/poster-pmb-2.jpeg', alt: 'Poster PMB 2 - Jadwal Penting' },
  { src: '/images/pmb/poster-pmb-3.jpeg', alt: 'Poster PMB 3 - Program Studi' },
  { src: '/images/pmb/poster-pmb-4.jpeg', alt: 'Poster PMB 4 - Cara Pendaftaran' }
]

const highlightItems = [
  {
    icon: 'fa-graduation-cap',
    title: 'Program Terakreditasi',
    description: 'Program Sarjana & Magister dengan akreditasi BAN-PT dan kurikulum berbasis turats Islam.'
  },
  {
    icon: 'fa-money',
    title: 'Beasiswa Hingga 100%',
    description: 'Beasiswa khusus hafidz Al-Qur’an, prestasi akademik, dan bantuan keringanan UKT.'
  },
  {
    icon: 'fa-calendar-check-o',
    title: 'Pendaftaran Fleksibel',
    description: 'Pendaftaran online dibuka sepanjang tahun dengan jadwal seleksi yang terstruktur.'
  }
]

const registrationSteps = [
  {
    title: 'Isi Formulir Online',
    description: 'Kunjungi portal PMB dan lengkapi formulir data diri serta pilihan program studi.'
  },
  {
    title: 'Unggah Dokumen & Pembayaran',
    description: 'Upload dokumen persyaratan dan lakukan pembayaran biaya pendaftaran sesuai petunjuk.'
  },
  {
    title: 'Ikuti Seleksi & Pengumuman',
    description: 'Ikuti proses seleksi, kemudian pantau pengumuman hasil dan lakukan daftar ulang.'
  }
]

const supportChannels = [
  {
    icon: 'fa-whatsapp',
    label: 'Chat Admin PMB',
    href: 'https://wa.me/6282129526424?text=Halo,%20saya%20ingin%20bertanya%20tentang%20pendaftaran%20IAIPI%20Garut',
    description: 'Respons cepat melalui WhatsApp resmi PMB.'
  },
  {
    icon: 'fa-phone',
    label: 'Hubungi PMB',
    href: 'tel:+6282129526424',
    description: 'Senin–Jumat, pukul 08.00–16.00 WIB.'
  },
  {
    icon: 'fa-envelope-o',
    label: 'Email PMB',
    href: 'mailto:pmb@iaipersisgarut.ac.id',
    description: 'Kami merespons dalam 1×24 jam kerja.'
  }
]

const PmbPage = () => {
  return (
    <>
      <Header2 />
      <PageBanner
        title="Penerimaan Mahasiswa Baru"
        backgroundImage="/images/page-banner-7.jpg"
        breadcrumbs={[
          { text: 'Home', url: '/' },
          { text: 'Penerimaan Mahasiswa Baru', url: null }
        ]}
      />

      <section className="pmb-intro">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="pmb-intro__content">
                <h2>Mulai Perjalanan Akademik Bersama IAIPI Garut</h2>
                <p>
                  Dapatkan pengalaman belajar yang memadukan nilai-nilai Islam, keilmuan modern,
                  dan lingkungan kampus yang hangat. Isi formulir pendaftaran secara online dan
                  raih kesempatan beasiswa sampai 100%.
                </p>
                <div className="pmb-intro__stats">
                  <div>
                    <strong>7+</strong>
                    <span>Program Studi Favorit</span>
                  </div>
                  <div>
                    <strong>100%</strong>
                    <span>Beasiswa Hafidz</span>
                  </div>
                  <div>
                    <strong>24/7</strong>
                    <span>Dukungan Pendaftaran</span>
                  </div>
                </div>
                <div className="pmb-intro__cta">
                  <a
                    href="https://staipersisgarut.pmbonline.siakad.tech/"
                    className="pmb-btn pmb-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Daftar Online Sekarang
                  </a>
                  <a
                    href="https://wa.me/6282129526424?text=Halo,%20saya%20ingin%20bertanya%20tentang%20pendaftaran%20IAIPI%20Garut"
                    className="pmb-btn pmb-btn--ghost"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Konsultasi dengan Admin PMB
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="pmb-intro__card">
                <h4>Timeline Pendaftaran 2025</h4>
                <ul>
                  <li>
                    <span>Gelombang 1</span>
                    <span>Maret – Mei 2025</span>
                  </li>
                  <li>
                    <span>Gelombang 2</span>
                    <span>Juni – Agustus 2025</span>
                  </li>
                  <li>
                    <span>Gelombang 3</span>
                    <span>September – Oktober 2025</span>
                  </li>
                </ul>
                <p className="pmb-intro__note">
                  Jadwal seleksi dapat berubah mengikuti kebijakan kampus. Pantau informasi terbaru
                  melalui portal PMB dan media sosial IAIPI Garut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pmb-highlights section pt-70 pb-70 gray-bg">
        <div className="container">
          <div className="section-title text-center pb-40">
            <h5>Keunggulan PMB</h5>
            <h2>Kenapa Daftar di IAIPI Garut?</h2>
          </div>
          <div className="row">
            {highlightItems.map((item) => (
              <div key={item.title} className="col-lg-4 col-md-6">
                <div className="pmb-highlight-card">
                  <div className="pmb-highlight-card__icon">
                    <i className={`fa ${item.icon}`} aria-hidden="true"></i>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pmb-steps pt-100 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="section-title pb-25">
                <h5>Langkah Pendaftaran</h5>
                <h2>Tiga Langkah Praktis Menjadi Mahasiswa IAIPI</h2>
                <p>
                  Proses pendaftaran dirancang sederhana sehingga calon mahasiswa dapat fokus
                  menyiapkan dokumen penting dan mengikuti seleksi dengan tenang.
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <ol className="pmb-step-list">
                {registrationSteps.map((step, index) => (
                  <li key={step.title}>
                    <span className="pmb-step-list__number">{index + 1}</span>
                    <div>
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="pmb-gallery pt-80 pb-80 gray-bg">
        <div className="container">
          <div className="section-title text-center pb-40">
            <h5>Informasi Detail</h5>
            <h2>Poster Penerimaan Mahasiswa Baru</h2>
            <p>
              Simak poster resmi untuk melihat syarat, alur, dan jadwal lengkap PMB IAIPI Garut.
            </p>
          </div>
          <div className="row">
            {posterImages.map((poster) => (
              <div key={poster.alt} className="col-lg-6">
                <article className="pmb-poster-card">
                  <div className="pmb-poster-card__image">
                    <Image
                      src={poster.src}
                      alt={poster.alt}
                      width={800}
                      height={1000}
                      priority={poster.alt.endsWith('Umum')}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 540px"
                    />
                  </div>
                  <div className="pmb-poster-card__caption">
                    <i className="fa fa-file-text-o" aria-hidden="true"></i>
                    <span>{poster.alt}</span>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pmb-support pt-75 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="section-title pb-20">
                <h5>Layanan Informasi</h5>
                <h2>Butuh Bantuan? Tim PMB Siap Membantu</h2>
                <p>
                  Jika ada pertanyaan seputar persyaratan, beasiswa, atau proses seleksi, hubungi kami
                  melalui kanal berikut.
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                {supportChannels.map((channel) => (
                  <div key={channel.label} className="col-md-4 col-sm-6">
                    <a
                      href={channel.href}
                      className="pmb-support-card"
                      target={channel.href.startsWith('http') ? '_blank' : '_self'}
                      rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <i className={`fa ${channel.icon}`} aria-hidden="true"></i>
                      <span className="pmb-support-card__label">{channel.label}</span>
                      <span className="pmb-support-card__desc">{channel.description}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default PmbPage
