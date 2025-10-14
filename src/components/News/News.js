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
    coverImage: "/images/news/pmb-2025.jpg"
  },
  {
    title: "Program Beasiswa Penuh untuk Hafidz Al-Quran",
    brief: "Beasiswa full 100% tersedia bagi calon mahasiswa yang hafal Al-Quran minimal 15 juz.",
    link: "/pmb",
    dateAdded: new Date('2024-09-25'),
    coverImage: "/images/news/beasiswa.jpg"
  },
  {
    title: "IAIPI Garut Raih Akreditasi B dari BAN-PT",
    brief: "Institut Agama Islam PERSIS Garut berhasil meraih akreditasi institusi B dari Badan Akreditasi Nasional Perguruan Tinggi.",
    link: "/tentang",
    dateAdded: new Date('2024-09-15'),
    coverImage: "/images/akreditasi/sertifikat-2021.png"
  },
  {
    title: "Jurnal IAIPI Terindex SINTA dan Google Scholar",
    brief: "8 jurnal ilmiah IAIPI Garut kini terindex di SINTA dan Google Scholar, meningkatkan visibilitas penelitian dosen dan mahasiswa.",
    link: "https://jurnal.iaipigarut.ac.id",
    dateAdded: new Date('2024-09-10'),
    coverImage: "/images/publication/p-1a.jpg"
  }
]

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
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title pb-50">
              <h5>Berita dan Agenda</h5>
              <h2>Berita Terbaru</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            {posts[0] && (
              <div className="singel-news mt-30">
                <div className="news-thum pb-25">
                  {posts[0].coverImage ? (
                    <Image
                      src={posts[0].coverImage}
                      alt={posts[0].title}
                      width={600}
                      height={400}
                      style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                    />
                  ) : (
                    <div style={{ width: '100%', height: '400px', background: '#f0f0f0' }} />
                  )}
                </div>
                <div className="news-cont">
                  <ul>
                    <li>
                      <Link href="#">
                        <i className="fa fa-calendar"></i>
                        {new Date(posts[0].dateAdded).toLocaleDateString('id-ID', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa fa-user"></i>Admin IAIPI
                      </Link>
                    </li>
                  </ul>
                  <Link href={posts[0].link} target="_blank" rel="noopener noreferrer">
                    <h3>{posts[0].title}</h3>
                  </Link>
                  <p>{posts[0].brief}</p>
                </div>
              </div>
            )}
          </div>
          <div className="col-lg-6">
            {posts.slice(1, 4).map((post) => (
              <div key={post.slug} className="singel-news news-list">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="news-thum mt-30">
                      {post.coverImage ? (
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          width={200}
                          height={150}
                          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                      ) : (
                        <div style={{ width: '100%', height: '150px', background: '#f0f0f0' }} />
                      )}
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="news-cont mt-30">
                      <ul>
                        <li>
                          <Link href="#">
                            <i className="fa fa-calendar"></i>
                            {new Date(post.dateAdded).toLocaleDateString('id-ID', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fa fa-user"></i>Admin IAIPI
                          </Link>
                        </li>
                      </ul>
                      <Link href={post.link} target="_blank" rel="noopener noreferrer">
                        <h3>{post.title}</h3>
                      </Link>
                      <p>{post.brief.length > 100 ? `${post.brief.substring(0, 100)}...` : post.brief}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default News