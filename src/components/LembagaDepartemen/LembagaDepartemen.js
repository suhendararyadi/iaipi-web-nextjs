'use client'
import Link from 'next/link'
import lembagaData from '@/data/lembagaData'

const LembagaDepartemen = () => {
  return (
    <section className="lembaga-section pt-90 pb-90">
      <div className="container">
        {/* Section Header */}
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <div className="section-title pb-50">
              <h5>Struktur Organisasi</h5>
              <h2>Lembaga dan Departemen</h2>
              <p className="mt-3">
                Berbagai lembaga dan unit yang mendukung operasional Institut Agama Islam PERSIS Garut
                dalam menjalankan Tri Dharma Perguruan Tinggi
              </p>
            </div>
          </div>
        </div>

        {/* Filter Info */}
        <div className="row mb-4">
          <div className="col-lg-12">
            <div className="lembaga-filter-info">
              <span className="filter-badge badge-lembaga">
                <i className="fa fa-building"></i> {lembagaData.filter(l => l.category === 'Lembaga').length} Lembaga
              </span>
              <span className="filter-badge badge-pusat">
                <i className="fa fa-university"></i> {lembagaData.filter(l => l.category === 'Pusat').length} Pusat Studi
              </span>
              <span className="filter-badge badge-unit">
                <i className="fa fa-cogs"></i> {lembagaData.filter(l => l.category === 'Unit').length} Unit
              </span>
            </div>
          </div>
        </div>

        {/* Lembaga Cards Grid */}
        <div className="row">
          {lembagaData.map((lembaga) => (
            <div key={lembaga.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <article className={`lembaga-card ${lembaga.status === 'coming_soon' ? 'coming-soon' : ''}`}>
                {lembaga.status === 'coming_soon' && (
                  <span className="coming-soon-badge">Coming Soon</span>
                )}
                
                <div className="lembaga-card-header">
                  <div className="lembaga-icon">
                    <i className={`fa ${lembaga.icon}`}></i>
                  </div>
                  <span className={`category-badge badge-${lembaga.category.toLowerCase()}`}>
                    {lembaga.category}
                  </span>
                </div>

                <div className="lembaga-card-body">
                  <h3 className="lembaga-title">{lembaga.name}</h3>
                  <h4 className="lembaga-subtitle">{lembaga.fullName}</h4>
                  <p className="lembaga-description">{lembaga.description}</p>
                </div>

                <div className="lembaga-card-footer">
                  {lembaga.url ? (
                    <Link 
                      href={lembaga.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lembaga-link"
                    >
                      <span>Kunjungi Website</span>
                      <i className="fa fa-external-link"></i>
                    </Link>
                  ) : (
                    <button className="lembaga-link disabled" disabled>
                      <span>Website Segera Hadir</span>
                      <i className="fa fa-clock-o"></i>
                    </button>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Info Footer */}
        <div className="row mt-5">
          <div className="col-lg-10 mx-auto">
            <div className="lembaga-info-box">
              <div className="info-box-icon">
                <i className="fa fa-info-circle"></i>
              </div>
              <div className="info-box-content">
                <h4>Informasi Kontak</h4>
                <p>
                  Untuk informasi lebih lanjut mengenai lembaga dan departemen, 
                  silakan hubungi Bagian Administrasi Umum Institut Agama Islam PERSIS Garut 
                  melalui email: <a href="mailto:admin@iaipersisgarut.ac.id">admin@iaipersisgarut.ac.id</a> atau 
                  telepon: <a href="tel:+622622328911">+62-262-232891</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LembagaDepartemen
