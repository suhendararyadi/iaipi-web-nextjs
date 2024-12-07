'use client'
import Link from 'next/link'

const PageBanner = ({ title, backgroundImage, breadcrumbs }) => {
  return (
    <section 
      id="page-banner" 
      className="pt-105 pb-110 bg_cover" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
      data-overlay="8"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-banner-cont">
              <h2>{title}</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  {breadcrumbs.map((item, index) => (
                    <li key={index} className={`breadcrumb-item ${!item.url ? 'active' : ''}`}>
                      {item.url ? (
                        <Link href={item.url}>{item.text}</Link>
                      ) : (
                        item.text
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageBanner