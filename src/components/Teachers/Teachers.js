'use client'
import Link from 'next/link'

const Teachers = () => {
  return (
    <section id="teachers-part" className="section pt-70 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-title mt-50">
              <h5>Featured Teachers</h5>
              <h2>Meet Our teachers</h2>
            </div>
            <div className="teachers-cont">
              <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt mauris.</p>
              <p>auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt mauris</p>
              <Link href="#" className="main-btn mt-55">Career with us</Link>
            </div>
          </div>

          <div className="col-lg-6 offset-lg-1">
            <div className="teachers mt-20">
              <div className="row">
                {/* Teacher 1 */}
                <div className="col-sm-6">
                  <div className="singel-teachers mt-30 text-center">
                    <div className="image">
                      <img src="/images/teachers/t-1.jpg" alt="Teachers" />
                    </div>
                    <div className="cont">
                      <Link href="/teachers-singel"><h6>Mark alen</h6></Link>
                      <span>Vice chencelor</span>
                    </div>
                  </div>
                </div>

                {/* Teacher 2 */}
                <div className="col-sm-6">
                  <div className="singel-teachers mt-30 text-center">
                    <div className="image">
                      <img src="/images/teachers/t-2.jpg" alt="Teachers" />
                    </div>
                    <div className="cont">
                      <Link href="/teachers-singel"><h6>David card</h6></Link>
                      <span>Pro chencelor</span>
                    </div>
                  </div>
                </div>

                {/* Teacher 3 */}
                <div className="col-sm-6">
                  <div className="singel-teachers mt-30 text-center">
                    <div className="image">
                      <img src="/images/teachers/t-3.jpg" alt="Teachers" />
                    </div>
                    <div className="cont">
                      <Link href="/teachers-singel"><h6>Rebeka alig</h6></Link>
                      <span>Pro chencelor</span>
                    </div>
                  </div>
                </div>

                {/* Teacher 4 */}
                <div className="col-sm-6">
                  <div className="singel-teachers mt-30 text-center">
                    <div className="image">
                      <img src="/images/teachers/t-4.jpg" alt="Teachers" />
                    </div>
                    <div className="cont">
                      <Link href="/teachers-singel"><h6>Hanna bein</h6></Link>
                      <span>Aerobics head</span>
                    </div>
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

export default Teachers