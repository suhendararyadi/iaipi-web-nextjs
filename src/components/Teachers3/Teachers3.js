'use client'
import Link from 'next/link'
import Image from 'next/image'

const Teachers3 = () => {
  return (
    <section id="teachers-part" className="pt-65 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-title mt-50 pb-35">
              <h5>Featured Teachers</h5>
              <h2>Meet Our teachers</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Teacher 1 */}
          <div className="col-lg-3 col-sm-6">
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
          <div className="col-lg-3 col-sm-6">
            <div className="singel-teachers mt-30 text-center">
              <div className="image">
                <img src="/images/teachers/t-2.jpg" alt="Teachers" />
              </div>
              <div className="cont">
                <Link href="/teachers-singel"><h6>Mark alen</h6></Link>
                <span>Vice chencelor</span>
              </div>
            </div>
          </div>

          {/* Teacher 3 */}
          <div className="col-lg-3 col-sm-6">
            <div className="singel-teachers mt-30 text-center">
              <div className="image">
                <img src="/images/teachers/t-3.jpg" alt="Teachers" />
              </div>
              <div className="cont">
                <Link href="/teachers-singel"><h6>Mark alen</h6></Link>
                <span>Vice chencelor</span>
              </div>
            </div>
          </div>

          {/* Teacher 4 */}
          <div className="col-lg-3 col-sm-6">
            <div className="singel-teachers mt-30 text-center">
              <div className="image">
                <img src="/images/teachers/t-4.jpg" alt="Teachers" />
              </div>
              <div className="cont">
                <Link href="/teachers-singel"><h6>Mark alen</h6></Link>
                <span>Vice chencelor</span>
              </div>
            </div>
          </div>

          {/* Teacher 5 */}
          <div className="col-lg-3 col-sm-6">
            <div className="singel-teachers mt-30 text-center">
              <div className="image">
                <img src="/images/teachers/t-5.jpg" alt="Teachers" />
              </div>
              <div className="cont">
                <Link href="/teachers-singel"><h6>Mark alen</h6></Link>
                <span>Vice chencelor</span>
              </div>
            </div>
          </div>

          {/* Teacher 6 */}
          <div className="col-lg-3 col-sm-6">
            <div className="singel-teachers mt-30 text-center">
              <div className="image">
                <img src="/images/teachers/t-6.jpg" alt="Teachers" />
              </div>
              <div className="cont">
                <Link href="/teachers-singel"><h6>Mark alen</h6></Link>
                <span>Vice chencelor</span>
              </div>
            </div>
          </div>

          {/* Teacher 7 */}
          <div className="col-lg-3 col-sm-6">
            <div className="singel-teachers mt-30 text-center">
              <div className="image">
                <img src="/images/teachers/t-7.jpg" alt="Teachers" />
              </div>
              <div className="cont">
                <Link href="/teachers-singel"><h6>Mark alen</h6></Link>
                <span>Vice chencelor</span>
              </div>
            </div>
          </div>

          {/* Teacher 8 */}
          <div className="col-lg-3 col-sm-6">
            <div className="singel-teachers mt-30 text-center">
              <div className="image">
                <img src="/images/teachers/t-8.jpg" alt="Teachers" />
              </div>
              <div className="cont">
                <Link href="/teachers-singel"><h6>Mark alen</h6></Link>
                <span>Vice chencelor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Teachers3