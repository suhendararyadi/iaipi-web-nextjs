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

      <style jsx>{`
        .bottom-nav {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background: var(--iaipi-green, #006a4e);
          backdrop-filter: blur(10px);
          z-index: 99999;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          padding-bottom: env(safe-area-inset-bottom);
          box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
        }

        @media (min-width: 768px) {
          .bottom-nav {
            display: none;
          }
        }

        .bottom-nav-row {
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 65px;
        }

        .bottom-nav-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .bottom-nav-item i {
          font-size: 20px;
          margin-bottom: 4px;
        }

        .bottom-nav-item span {
          font-size: 10px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .bottom-nav-item.active {
          color: var(--iaipi-yellow, #ffc600);
        }

        .bottom-nav-item:active {
          transform: scale(0.9);
        }
      `}</style>
    </nav>
  )
}

export default BottomNav
