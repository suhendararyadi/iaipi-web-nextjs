'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getHashnodePosts } from '@/utils/hashnodeApi'
import NewsSkeletonLoader from './NewsSkeletonLoader'

// Fallback static articles
const fallbackArticles = [
  {
    title: "Penerimaan Mahasiswa Baru Tahun Akademik 2025/2026",
    brief: "IAIPI Garut membuka pendaftaran mahasiswa baru untuk tahun akademik 2025/2026. Tersedia program sarjana dan magister dengan berbagai beasiswa menarik.",
    link: "https://staipersisgarut.pmbonline.siakad.tech/",
    dateAdded: new Date('2024-10-01'),
    coverImage: "/images/news/pmb-2025.jpg",
    category: "Pendaftaran",
    readTime: "3 min"
  },
  {
    title: "Program Beasiswa Penuh untuk Hafidz Al-Quran",
    brief: "Beasiswa full 100% tersedia bagi calon mahasiswa yang hafal Al-Quran minimal 15 juz.",
    link: "/pmb",
    dateAdded: new Date('2024-09-25'),
    coverImage: "/images/news/beasiswa.jpg",
    category: "Beasiswa",
    readTime: "2 min"
  },
  {
    title: "IAIPI Garut Raih Akreditasi B dari BAN-PT",
    brief: "Institut Agama Islam PERSIS Garut berhasil meraih akreditasi institusi B dari Badan Akreditasi Nasional Perguruan Tinggi.",
    link: "/tentang",
    dateAdded: new Date('2024-09-15'),
    coverImage: "/images/akreditasi/sertifikat-2021.png",
    category: "Prestasi",
    readTime: "4 min"
  },
  {
    title: "Jurnal IAIPI Terindex SINTA dan Google Scholar",
    brief: "8 jurnal ilmiah IAIPI Garut kini terindex di SINTA dan Google Scholar, meningkatkan visibilitas penelitian dosen dan mahasiswa.",
    link: "https://jurnal.iaipigarut.ac.id",
    dateAdded: new Date('2024-09-10'),
    coverImage: "/images/publication/p-1a.jpg",
    category: "Penelitian",
    readTime: "3 min"
  }
]

// Helper function to calculate read time
const calculateReadTime = (text) => {
  const wordsPerMinute = 200
  const wordCount = text.split(' ').length
  const readTime = Math.ceil(wordCount / wordsPerMinute)
  return `${readTime} min`
}

// Helper function to format date
const formatDate = (date) => {
  const now = new Date()
  const diffTime = Math.abs(now - new Date(date))
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays === 0) return 'Hari ini'
  if (diffDays === 1) return 'Kemarin'
  if (diffDays < 7) return `${diffDays} hari lalu`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} minggu lalu`
  
  return new Date(date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

const News = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getHashnodePosts()
        if (posts && posts.length > 0) {
          setPosts(posts)
        } else {
          // Use fallback if API returns empty
          setPosts(fallbackArticles)
          setError(null)
        }
      } catch (error) {
        console.error('Error fetching posts:', error)
        // Use fallback on error
        setPosts(fallbackArticles)
        setError(null)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  // Show skeleton loader while loading
  if (isLoading) {
    return <NewsSkeletonLoader />
  }

  return (
    <section id="news-part" className="section pt-115 pb-110">
      <div className="container">
        {/* Section Header */}
        <div className="row align-items-end">
          <div className="col-lg-8">
            <div className="section-title pb-50">
              <h5>Berita & Agenda</h5>
              <h2>Berita Terbaru IAIPI Garut</h2>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="news-view-all text-right pb-50">
              <Link href="https://news.iaipersisgarut.ac.id" target="_blank" rel="noopener noreferrer" className="view-all-link">
                Lihat Semua Berita <i className="fa fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Featured News - Large Card */}
          {posts[0] && (
            <div className="col-lg-6 col-md-12">
              <article className="news-card news-card-featured">
                <Link href={posts[0].link} target={posts[0].link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="news-card-link">
                  <div className="news-card-image">
                    {posts[0].coverImage ? (
                      <Image
                        src={posts[0].coverImage}
                        alt={posts[0].title}
                        width={600}
                        height={400}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      <div className="news-card-image-placeholder">
                        <i className="fa fa-image"></i>
                      </div>
                    )}
                    <div className="news-card-overlay"></div>
                    {posts[0].category && (
                      <span className="news-category-badge">{posts[0].category}</span>
                    )}
                  </div>
                  <div className="news-card-content">
                    <div className="news-meta">
                      <span className="news-date">
                        <i className="fa fa-calendar-o"></i>
                        {formatDate(posts[0].dateAdded)}
                      </span>
                      {posts[0].readTime && (
                        <span className="news-read-time">
                          <i className="fa fa-clock-o"></i>
                          {posts[0].readTime}
                        </span>
                      )}
                    </div>
                    <h3 className="news-title">{posts[0].title}</h3>
                    <p className="news-excerpt">
                      {posts[0].brief.length > 150 
                        ? `${posts[0].brief.substring(0, 150)}...` 
                        : posts[0].brief}
                    </p>
                    <div className="news-read-more">
                      Baca Selengkapnya <i className="fa fa-arrow-right"></i>
                    </div>
                  </div>
                </Link>
              </article>
            </div>
          )}

          {/* Small News Cards */}
          <div className="col-lg-6 col-md-12">
            <div className="news-grid-small">
              {posts.slice(1, 4).map((post, index) => (
                <article key={post.slug || index} className="news-card news-card-small">
                  <Link href={post.link} target={post.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="news-card-link-small">
                    <div className="row g-0">
                      <div className="col-5">
                        <div className="news-card-image-small">
                          {post.coverImage ? (
                            <Image
                              src={post.coverImage}
                              alt={post.title}
                              width={200}
                              height={150}
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                          ) : (
                            <div className="news-card-image-placeholder-small">
                              <i className="fa fa-image"></i>
                            </div>
                          )}
                          {post.category && (
                            <span className="news-category-badge-small">{post.category}</span>
                          )}
                        </div>
                      </div>
                      <div className="col-7">
                        <div className="news-card-content-small">
                          <div className="news-meta-small">
                            <span className="news-date-small">
                              <i className="fa fa-calendar-o"></i>
                              {formatDate(post.dateAdded)}
                            </span>
                          </div>
                          <h4 className="news-title-small">
                            {post.title.length > 70 
                              ? `${post.title.substring(0, 70)}...` 
                              : post.title}
                          </h4>
                          <p className="news-excerpt-small">
                            {post.brief.length > 80 
                              ? `${post.brief.substring(0, 80)}...` 
                              : post.brief}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Show all 4 news in card grid */}
        <div className="row d-lg-none mt-4">
          {posts.slice(0, 4).map((post, index) => (
            <div key={`mobile-${index}`} className="col-md-6 col-12">
              <article className="news-card news-card-mobile">
                <Link href={post.link} target={post.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="news-card-link">
                  <div className="news-card-image-mobile">
                    {post.coverImage ? (
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        width={400}
                        height={250}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      <div className="news-card-image-placeholder">
                        <i className="fa fa-image"></i>
                      </div>
                    )}
                    {post.category && (
                      <span className="news-category-badge">{post.category}</span>
                    )}
                  </div>
                  <div className="news-card-content-mobile">
                    <div className="news-meta">
                      <span className="news-date">
                        <i className="fa fa-calendar-o"></i>
                        {formatDate(post.dateAdded)}
                      </span>
                    </div>
                    <h4 className="news-title-mobile">{post.title}</h4>
                    <p className="news-excerpt-mobile">
                      {post.brief.length > 100 
                        ? `${post.brief.substring(0, 100)}...` 
                        : post.brief}
                    </p>
                  </div>
                </Link>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News