'use client'

const SearchBox = () => {
  return (
    <div className="search-box">
      <div className="serach-form">
        <div className="closebtn">
          <span></span>
          <span></span>
        </div>
        <form action="#">
          <input type="text" placeholder="Search by keyword" />
          <button><i className="fa fa-search"></i></button>
        </form>
      </div>
    </div>
  )
}

export default SearchBox