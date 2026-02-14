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
      name: 'Fakultas',
      icon: 'fa-graduation-cap',
      url: '/fakultas',
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
          background: #006a4e; /* Gunakan hex langsung untuk kepastian */
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

        /* Gunakan selector yang lebih spesifik agar Link dan A punya style identik */
        .bottom-nav-row :global(.bottom-nav-item) {
          flex: 1;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          color: rgba(255, 255, 255, 0.7) !important;
          text-decoration: none !important;
          transition: all 0.3s ease !important;
          background: transparent !important;
          border: none !important;
          outline: none !important;
        }

        .bottom-nav-row :global(.bottom-nav-item i) {
          font-size: 20px !important;
          margin-bottom: 4px !important;
          display: block !important;
        }

        .bottom-nav-row :global(.bottom-nav-item span) {
          font-size: 10px !important;
          font-weight: 500 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.5px !important;
          display: block !important;
        }

        .bottom-nav-row :global(.bottom-nav-item.active) {
          color: #ffc600 !important;
        }

        .bottom-nav-row :global(.bottom-nav-item:active) {
          transform: scale(0.9) !important;
        }
      `}</style>
    </nav>
  )
}

export default BottomNav
