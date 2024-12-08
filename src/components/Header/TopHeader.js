import Image from 'next/image'

const TopHeader = () => {
  return (
    <div className="header-top d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="header-contact text-lg-left text-center">
              <ul>
                <li>
                  <img src="/images/all-icon/map.png" alt="icon" />
                  Tarogong Kidul, Garut
                </li>
                <li>
                  <img src="/images/all-icon/email.png" alt="icon" />
                  info@iaipersisgarut.ac.id
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="header-opening-time text-lg-right text-center">
              <p>Senin - Jumat: 8 Am to 5 Pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader