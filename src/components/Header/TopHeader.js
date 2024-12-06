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
                  127/5 Mark street, New york
                </li>
                <li>
                  <img src="/images/all-icon/email.png" alt="icon" />
                  info@yourmail.com
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="header-opening-time text-lg-right text-center">
              <p>Opening Hours : Monday to Saturay - 8 Am to 5 Pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader