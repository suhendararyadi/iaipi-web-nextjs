'use client'

const KontakContent = () => {
  const contactInfo = [
    {
      icon: 'fa-map-marker',
      title: 'Alamat Kampus',
      items: [
        'Jl. Aruji Kartawinata No. 2',
        'Tarogong Kidul, Kabupaten Garut',
        'Jawa Barat 44151, Indonesia'
      ],
      color: '#006739'
    },
    {
      icon: 'fa-phone',
      title: 'Telepon & WhatsApp',
      items: [
        {
          text: '085123123670',
          link: 'tel:+62085123123670',
          label: 'Telepon'
        },
        {
          text: '085123123670',
          link: 'https://wa.me/62085123123670',
          label: 'WhatsApp',
          isExternal: true
        }
      ],
      color: '#3498db'
    },
    {
      icon: 'fa-envelope',
      title: 'Email',
      items: [
        {
          text: 'rektorat@iaipersisgarut.ac.id',
          link: 'mailto:rektorat@iaipersisgarut.ac.id',
          label: 'Rektorat'
        },
        {
          text: 'pmb@iaipersisgarut.ac.id',
          link: 'mailto:pmb@iaipersisgarut.ac.id',
          label: 'PMB'
        }
      ],
      color: '#9b59b6'
    },
    {
      icon: 'fa-clock-o',
      title: 'Jam Operasional',
      items: [
        'Senin - Jumat: 08:00 - 16:00 WIB',
        'Sabtu: 08:00 - 13:00 WIB',
        'Minggu & Libur: Tutup'
      ],
      color: '#e67e22'
    }
  ]

  const departments = [
    {
      name: 'Rektorat',
      email: 'rektorat@iaipersisgarut.ac.id',
      phone: '085123123670',
      description: 'Informasi umum dan kebijakan institusi'
    },
    {
      name: 'Penerimaan Mahasiswa Baru (PMB)',
      email: 'pmb@iaipersisgarut.ac.id',
      phone: '082129526424',
      description: 'Pendaftaran dan informasi calon mahasiswa'
    },
    {
      name: 'Akademik',
      email: 'akademik@iaipersisgarut.ac.id',
      phone: '085123123670',
      description: 'Layanan akademik dan perkuliahan'
    },
    {
      name: 'Kemahasiswaan',
      email: 'kemahasiswaan@iaipersisgarut.ac.id',
      phone: '085123123670',
      description: 'Kegiatan mahasiswa dan organisasi'
    }
  ]

  const socialMedia = [
    {
      name: 'Facebook',
      icon: 'fa-facebook-f',
      url: 'https://facebook.com/iaipigarut',
      color: '#3b5998'
    },
    {
      name: 'Instagram',
      icon: 'fa-instagram',
      url: 'https://instagram.com/iaipi_garut',
      color: '#e4405f'
    },
    {
      name: 'YouTube',
      icon: 'fa-youtube',
      url: 'https://youtube.com/@iaipigarut',
      color: '#ff0000'
    },
    {
      name: 'WhatsApp',
      icon: 'fa-whatsapp',
      url: 'https://wa.me/6285123123670',
      color: '#25d366'
    }
  ]

  return (
    <>
      {/* Contact Info Cards */}
      <section className="contact-info-section pt-70 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-title text-center pb-50">
                <h5>Kontak Kami</h5>
                <h2>Informasi Kontak</h2>
                <p className="mt-3">Hubungi kami melalui berbagai saluran komunikasi yang tersedia</p>
              </div>
            </div>
          </div>

          <div className="row">
            {contactInfo.map((info, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className="contact-info-card">
                  <div className="contact-icon" style={{ backgroundColor: info.color }}>
                    <i className={`fa ${info.icon}`}></i>
                  </div>
                  <h4>{info.title}</h4>
                  <div className="contact-details">
                    {Array.isArray(info.items[0]) || typeof info.items[0] === 'object' ? (
                      info.items.map((item, idx) => (
                        <p key={idx}>
                          {item.label && <strong>{item.label}:</strong>}
                          {' '}
                          <a 
                            href={item.link} 
                            target={item.isExternal ? '_blank' : '_self'}
                            rel={item.isExternal ? 'noopener noreferrer' : undefined}
                          >
                            {item.text}
                          </a>
                        </p>
                      ))
                    ) : (
                      info.items.map((item, idx) => (
                        <p key={idx}>{item}</p>
                      ))
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="departments-section pb-70 gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-title text-center pb-50">
                <h5>Unit Layanan</h5>
                <h2>Kontak Departemen</h2>
              </div>
            </div>
          </div>

          <div className="row">
            {departments.map((dept, index) => (
              <div key={index} className="col-lg-6 mb-4">
                <div className="department-card">
                  <div className="dept-header">
                    <i className="fa fa-building-o"></i>
                    <h4>{dept.name}</h4>
                  </div>
                  <p className="dept-desc">{dept.description}</p>
                  <div className="dept-contact">
                    <div className="dept-item">
                      <i className="fa fa-envelope"></i>
                      <a href={`mailto:${dept.email}`}>{dept.email}</a>
                    </div>
                    <div className="dept-item">
                      <i className="fa fa-phone"></i>
                      <a href={`tel:+62${dept.phone}`}>{dept.phone}</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.8834!2d107.9073!3d-7.2242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTMnMjcuMSJTIDEwN8KwNTQnMjYuMyJF!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%"
                  height="450"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi IAI PERSIS Garut"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="social-media-section pt-70 pb-70 gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-title text-center pb-50">
                <h5>Media Sosial</h5>
                <h2>Ikuti Kami</h2>
                <p className="mt-3">Dapatkan informasi terbaru melalui media sosial kami</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {socialMedia.map((social, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                  style={{ '--social-color': social.color }}
                >
                  <div className="social-icon">
                    <i className={`fa ${social.icon}`}></i>
                  </div>
                  <h4>{social.name}</h4>
                  <span className="follow-text">Follow Us</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default KontakContent
