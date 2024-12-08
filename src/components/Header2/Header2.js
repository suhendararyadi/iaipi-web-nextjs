'use client'
import TopHeader from './TopHeader'
import Navigation from './Navigation'
import SearchBox from './SearchBox'

const Header2 = () => {
  return (
    <>
      <header id="header-part">
        {/* <TopHeader /> */}
        <Navigation />
      </header>
      <SearchBox />
    </>
  )
}

export default Header2