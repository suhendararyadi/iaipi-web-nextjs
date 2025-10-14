'use client'

const NewsSkeletonLoader = () => {
  return (
    <section id="news-part" className="section pt-115 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title pb-50">
              <h5>Berita dan Agenda</h5>
              <h2>Berita Terbaru</h2>
            </div>
          </div>
        </div>
        
        <div className="row">
          {/* Main Article Skeleton */}
          <div className="col-lg-6">
            <div className="singel-news mt-30">
              <div className="news-thum pb-25 skeleton skeleton-image" style={{ height: '350px' }}></div>
              <div className="news-cont">
                <ul>
                  <li className="skeleton skeleton-text" style={{ width: '120px', height: '16px' }}></li>
                  <li className="skeleton skeleton-text" style={{ width: '100px', height: '16px', marginLeft: '10px' }}></li>
                </ul>
                <div className="skeleton skeleton-text" style={{ width: '90%', height: '24px', marginTop: '15px' }}></div>
                <div className="skeleton skeleton-text" style={{ width: '100%', height: '16px', marginTop: '15px' }}></div>
                <div className="skeleton skeleton-text" style={{ width: '80%', height: '16px', marginTop: '8px' }}></div>
              </div>
            </div>
          </div>
          
          {/* Small Articles Skeleton */}
          <div className="col-lg-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="singel-news news-list">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="news-thum mt-30">
                      <div className="skeleton skeleton-image" style={{ height: '120px' }}></div>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="news-cont mt-30">
                      <ul>
                        <li className="skeleton skeleton-text" style={{ width: '80px', height: '14px' }}></li>
                      </ul>
                      <div className="skeleton skeleton-text" style={{ width: '95%', height: '20px', marginTop: '10px' }}></div>
                      <div className="skeleton skeleton-text" style={{ width: '100%', height: '14px', marginTop: '10px' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsSkeletonLoader
