import Image from 'next/image'
import Header2 from '@/components/Header2/Header2'
import Footer from '@/components/Footer/Footer'
import PageBanner from '@/components/PageBanner/PageBanner'

const posterImages = [
  { src: '/images/pmb/poster-pmb-1.jpeg', alt: 'Poster PMB 1 - Informasi Umum PMB TA 2026/2027', width: 554, height: 1024 },
  { src: '/images/pmb/poster-pmb-2.jpeg', alt: 'Poster PMB 2 - Keunggulan dan Program Studi', width: 479, height: 1024 },
  { src: '/images/pmb/poster-pmb-3.jpeg', alt: 'Poster PMB 3 - Biaya Kuliah dan Jadwal Pendaftaran', width: 503, height: 1024 }
]

const highlightItems = [
  {
    icon: 'fa-moon-o',
    title: 'Kampus Islami',
    description: 'Nuansa religius yang mendukung pengembangan karakter Islami.'
  },
  {
    icon: 'fa-certificate',
    title: 'Terakreditasi BAN-PT',
    description: 'Terakreditasi oleh Badan Akreditasi Nasional Perguruan Tinggi.'
  },
  {
    icon: 'fa-university',
    title: 'Kemenag Berdampak',
    description: 'Bagian dari transformasi pendidikan tinggi Islam oleh Kementerian Agama.'
  },
  {
    icon: 'fa-desktop',
    title: 'Blended Learning',
    description: 'Perpaduan pembelajaran tatap muka dan daring yang fleksibel.'
  },
  {
    icon: 'fa-user-circle-o',
    title: 'Dosen Profesional',
    description: 'Tenaga pendidik berkualitas dan berpengalaman di bidangnya.'
  },
  {
    icon: 'fa-flask',
    title: 'Penelitian Aktif',
    description: '8 Jurnal ilmiah terindex SINTA dan Google Scholar untuk mendukung riset.'
  }
]

const faculties = [
  {
    name: 'Fakultas Tarbiyah dan Keguruan',
    icon: 'fa-graduation-cap',
    programs: [
      'Pendidikan Agama Islam (S1)',
      'Pendidikan Guru Madrasah Ibtidaiyah (S1)',
      'Pendidikan Bahasa Arab (S1)',
      'Bimbingan dan Konseling Pendidikan Islam (S1)'
    ]
  },
  {
    name: 'Fakultas Ekonomi dan Bisnis Islam',
    icon: 'fa-line-chart',
    programs: ['Ekonomi Syariah (S1)', 'Manajemen Keuangan Syariah (S1)']
  },
  {
    name: 'Fakultas Ushuluddin',
    icon: 'fa-book',
    programs: ['Ilmu Hadits (S1)', 'Ilmu Al-Qur’an dan Tafsir (S1)', 'Sejarah Peradaban Islam (S1)']
  },
  {
    name: 'Program Magister',
    icon: 'fa-graduation-cap',
    programs: ['Pendidikan Agama Islam (S2)', 'Ilmu Hadits (S2)']
  }
]

const ukmList = [
  { name: 'Aksara', desc: 'Kepenulisan' },
  { name: 'Trekata', desc: 'Fotografi, Videografi, Desain Grafis' },
  { name: 'Imaraga', desc: 'Olahraga' },
  { name: 'Shurulkhan', desc: 'Beladiri' },
  { name: 'Himpara', desc: 'Pecinta Alam' },
  { name: 'Protokoler', desc: 'Keprotokolan' }
]

const feeS1 = [
  ['Pendaftaran*', 'Rp 350.000'],
  ['Biaya Semester Reguler**', 'Rp 2.500.000'],
  ['Dana Pengembangan Kampus*', 'Rp 2.500.000'],
  ['Perlengkapan Mahasiswa*', 'Rp 1.400.000'],
  ['Pembinaan THQ* (PAI, PGMI, BKPI, PBA, EKOSY, MKS)', 'Rp 300.000'],
  ['Pembinaan THQ* (ILHA, IAT)', 'Rp 500.000']
]

const feeS2 = [
  ['Pendaftaran*', 'Rp 500.000'],
  ['Biaya Semester Reguler**', 'Rp 4.500.000'],
  ['Dana Pengembangan Kampus*', 'Rp 3.000.000'],
  ['Perlengkapan Mahasiswa*', 'Rp 1.700.000'],
  ['Pembinaan THQ*', 'Rp 200.000']
]

const registrationSteps = [
  {
    title: 'Isi Formulir Online',
    description: 'Kunjungi portal PMB dan lengkapi formulir data diri serta pilihan program studi.'
  },
  {
    title: 'Unggah Dokumen dan Pembayaran',
    description: 'Upload dokumen persyaratan dan lakukan pembayaran biaya pendaftaran sesuai petunjuk.'
  },
  {
    title: 'Ikuti Seleksi dan Pengumuman',
    description: 'Ikuti proses seleksi, kemudian pantau pengumuman hasil dan lakukan daftar ulang.'
  }
]

const requirements = [
  'Fotokopi Ijazah/Surat Keterangan Lulus',
  'Fotokopi KTP',
  'Pas foto berwarna',
  'Mengisi formulir pendaftaran online',
  'Dokumen lain sesuai ketentuan'
]

const supportChannels = [
  {
    icon: 'fa-whatsapp',
    label: 'Chat Admin PMB',
    href: 'https://wa.me/6282129526424?text=Halo,%20saya%20ingin%20bertanya%20tentang%20pendaftaran%20IAI%20Persis%20Garut',
    description: '+62 821-2952-6424'
  },
  {
    icon: 'fa-globe',
    label: 'Website PMB',
    href: 'https://iaipersisgarut.ac.id/pmb',
    description: 'iaipersisgarut.ac.id/pmb'
  },
  {
    icon: 'fa-instagram',
    label: 'Instagram',
    href: 'https://instagram.com/pmb.iaipersis',
    description: '@pmb.iaipersis'
  }
]

const PmbPage = () => {
  return (
    <>
      <Header2 />
      <PageBanner
        title="Penerimaan Mahasiswa Baru 2026/2027"
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
                <h2>Menjadi Kampus Unggul Pengembangan Turats Islam pada Tahun 2028</h2>
                <p>
                  IAI Persis Garut membuka Penerimaan Mahasiswa Baru Tahun Akademik 2026/2027 untuk
                  jenjang Sarjana (S1) dan Magister (S2). Biaya kuliah bisa dicicil secara ringan,
                  fleksibel, dan terjangkau agar setiap calon mahasiswa siap memulai perjalanan
                  akademiknya bersama IAI Persis Garut.
                </p>
                <div className="pmb-intro__stats">
                  <div>
                    <strong>11</strong>
                    <span>Program Studi S1 & S2</span>
                  </div>
                  <div>
                    <strong>Gel. 5</strong>
                    <span>Gelombang Pendaftaran Aktif</span>
                  </div>
                  <div>
                    <strong>2,9 Jt</strong>
                    <span>Biaya Minimum Langsung Kuliah</span>
                  </div>
                </div>
                <div className="pmb-intro__cta">
                  <a
                    href="https://iaipersisgarut.ac.id/pmb"
                    className="pmb-btn pmb-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Daftar Online Sekarang
                  </a>
                  <a
                    href="https://wa.me/6282129526424?text=Halo,%20saya%20ingin%20bertanya%20tentang%20pendaftaran%20IAI%20Persis%20Garut"
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
                <h4>Jadwal Pendaftaran Gelombang 5</h4>
                <ul>
                  <li>
                    <span>Beasiswa</span>
                    <span>3 Juli – 31 Juli 2026</span>
                  </li>
                  <li>
                    <span>Reguler</span>
                    <span>3 Juli – 31 Agustus 2026</span>
                  </li>
                </ul>
                <p className="pmb-intro__note">
                  Tes dapat dilakukan kapan saja setelah melakukan pembayaran biaya formulir selama
                  periode pendaftaran. Jadwal dapat berubah mengikuti kebijakan kampus, pantau
                  informasi terbaru melalui portal PMB dan media sosial IAI Persis Garut.
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
            <h2>Kenapa Daftar di IAI Persis Garut?</h2>
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

      <section className="pmb-programs pt-100 pb-80">
        <div className="container">
          <div className="section-title text-center pb-40">
            <h5>Program Studi</h5>
            <h2>Pilihan Program Studi S1 dan S2</h2>
          </div>
          <div className="row">
            {faculties.map((faculty) => (
              <div key={faculty.name} className="col-lg-6">
                <div className="pmb-faculty-card">
                  <h4>
                    <i className={`fa ${faculty.icon}`} aria-hidden="true"></i>
                    {faculty.name}
                  </h4>
                  <ul>
                    {faculty.programs.map((program) => (
                      <li key={program}>{program}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="section-title text-center pt-20 pb-30">
            <h5>Unit Kegiatan Mahasiswa</h5>
            <h2>Kembangkan Minat dan Bakatmu</h2>
          </div>
          <div className="row">
            {ukmList.map((ukm) => (
              <div key={ukm.name} className="col-lg-2 col-md-4 col-sm-6">
                <div className="pmb-highlight-card" style={{ textAlign: 'center' }}>
                  <h4>{ukm.name}</h4>
                  <p>{ukm.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pmb-fee pt-80 pb-80 gray-bg">
        <div className="container">
          <div className="section-title text-center pb-40">
            <h5>Biaya Kuliah</h5>
            <h2>Rincian Biaya Program S1 dan S2</h2>
            <p>
              *dibayar sekali, **dibayar tiap semester. Biaya dapat dicicil/dibayarkan secara
              bertahap sesuai syarat dan ketentuan yang berlaku.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="pmb-fee-card">
                <h4>S1 &ndash; Program Sarjana</h4>
                <table className="pmb-fee-table">
                  <tbody>
                    {feeS1.map((row) => (
                      <tr key={row[0]}>
                        <td>{row[0]}</td>
                        <td>{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="pmb-fee-card__minimum">Biaya Minimum 2,9 Jt Bisa Langsung Kuliah</div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pmb-fee-card">
                <h4>S2 &ndash; Program Magister</h4>
                <table className="pmb-fee-table">
                  <tbody>
                    {feeS2.map((row) => (
                      <tr key={row[0]}>
                        <td>{row[0]}</td>
                        <td>{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="pmb-fee-card__minimum">Biaya Minimum 4 Jt Bisa Langsung Kuliah</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pmb-steps pt-100 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="section-title pb-25">
                <h5>Langkah Pendaftaran</h5>
                <h2>Tiga Langkah Praktis Menjadi Mahasiswa IAI Persis Garut</h2>
                <p>
                  Proses pendaftaran dirancang sederhana sehingga calon mahasiswa dapat fokus
                  menyiapkan dokumen penting dan mengikuti seleksi dengan tenang.
                </p>
              </div>
              <div className="section-title pb-10">
                <h5>Persyaratan Umum</h5>
              </div>
              <ul className="pmb-requirements">
                {requirements.map((item) => (
                  <li key={item}>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
            <h2>Poster Penerimaan Mahasiswa Baru TA 2026/2027</h2>
            <p>
              Simak poster resmi untuk melihat syarat, alur, dan jadwal lengkap PMB IAI Persis Garut,
              atau{' '}
              <a href="/images/pmb/poster-pmb-full.jpeg" target="_blank" rel="noopener noreferrer">
                unduh poster lengkap
              </a>
              .
            </p>
          </div>
          <div className="row">
            {posterImages.map((poster, index) => (
              <div key={poster.alt} className="col-lg-4 col-md-6">
                <article className="pmb-poster-card">
                  <div className="pmb-poster-card__image">
                    <Image
                      src={poster.src}
                      alt={poster.alt}
                      width={poster.width}
                      height={poster.height}
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
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
                  Jika ada pertanyaan seputar persyaratan, biaya, atau proses seleksi, hubungi kami
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
