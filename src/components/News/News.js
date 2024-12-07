'use client'
import Link from 'next/link'

const News = () => {
  return (
    <section id="news-part" className="section pt-115 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title pb-50">
              <h5>Berita dan Agenda</h5>
              <h2>Berita Tebaru</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="singel-news mt-30">
              <div className="news-thum pb-25">
                <img src="/images/news/n-1.jpg" alt="News" />
              </div>
              <div className="news-cont">
                <ul>
                  <li><Link href="#"><i className="fa fa-calendar"></i> 2 December 2023</Link></li>
                  <li><Link href="#"><i className="fa fa-user"></i> By Adam linn</Link></li>
                </ul>
                <Link href="/blog-singel"><h3>Tips to grade high cgpa in university life</h3></Link>
                <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt .</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="singel-news news-list">
              <div className="row">
                <div className="col-sm-4">
                  <div className="news-thum mt-30">
                    <img src="/images/news/ns-1.jpg" alt="News" />
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="news-cont mt-30">
                    <ul>
                      <li><Link href="#"><i className="fa fa-calendar"></i> 2 December 2023</Link></li>
                      <li><Link href="#"><i className="fa fa-user"></i> By Adam linn</Link></li>
                    </ul>
                    <Link href="/blog-singel"><h3>Intellectual communication</h3></Link>
                    <p>Gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons vel.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="singel-news news-list">
              <div className="row">
                <div className="col-sm-4">
                  <div className="news-thum mt-30">
                    <img src="/images/news/ns-2.jpg" alt="News" />
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="news-cont mt-30">
                    <ul>
                      <li><Link href="#"><i className="fa fa-calendar"></i> 2 December 2023</Link></li>
                      <li><Link href="#"><i className="fa fa-user"></i> By Adam linn</Link></li>
                    </ul>
                    <Link href="/blog-singel"><h3>Study makes you perfect</h3></Link>
                    <p>Gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons vel.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="singel-news news-list">
              <div className="row">
                <div className="col-sm-4">
                  <div className="news-thum mt-30">
                    <img src="/images/news/ns-3.jpg" alt="News" />
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="news-cont mt-30">
                    <ul>
                      <li><Link href="#"><i className="fa fa-calendar"></i> 2 December 2023</Link></li>
                      <li><Link href="#"><i className="fa fa-user"></i> By Adam linn</Link></li>
                    </ul>
                    <Link href="/blog-singel"><h3>Technology education is now...</h3></Link>
                    <p>Gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons vel.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News