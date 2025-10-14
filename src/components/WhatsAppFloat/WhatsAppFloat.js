'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <Link
      href="https://wa.me/6282118282828?text=Halo,%20saya%20ingin%20bertanya%20tentang%20pendaftaran%20mahasiswa%20baru%20IAIPI%20Garut"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
    >
      <i className="fa fa-whatsapp"></i>
      <span>Chat Admin PMB</span>
    </Link>
  )
}

export default WhatsAppFloat
