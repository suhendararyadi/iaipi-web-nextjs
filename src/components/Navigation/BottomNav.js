'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const BottomNav = () => {
  const pathname = usePathname()

  const navItems = [
    {
      id: 1,
      name: 'Beranda',
      icon: 'fa-home',
      url: '/',
    },
    {
      id: 2,
      name: 'Berita',
      icon: 'fa-newspaper-o',
      url: 'https://news.iaipersisgarut.ac.id',
      external: true,
    },
    {
      id: 3,
      name: 'PMB',
      icon: 'fa-user-plus',
      url: '/pmb',
    },
    {
      id: 4,
      name: 'SIAKAD',
      icon: 'fa-university',
      url: 'https://siakad.iaipersisgarut.ac.id',
      external: true,
    }
  ]

  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-row">
        {navItems.map((item) => {
          const isActive = pathname === item.url
          
          if (item.external) {
            return (
              <a 
                key={item.id} 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bottom-nav-item"
              >
                <i className={`fa ${item.icon}`}></i>
                <span>{item.name}</span>
              </a>
            )
          }

          return (
            <Link 
              key={item.id} 
              href={item.url}
              className={`bottom-nav-item ${isActive ? 'active' : ''}`}
            >
              <i className={`fa ${item.icon}`}></i>
              <span>{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default BottomNav
