'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getHashnodePosts } from '@/utils/hashnodeApi'

const News = () => {
  const [posts, setPosts] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getHashnodePosts()
        setPosts(posts)
      } catch (error) {
        console.error('Error:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (isLoading) {
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
          <div className="text-center">
            <p>Memuat artikel...</p>
          </div>
        </div>
      </section>
    )
  }

  if (!posts || posts.length === 0) {
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
          <div className="text-center">
            <p>Tidak ada artikel yang tersedia.</p>
          </div>
        </div>
      </section>
    )
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
                  <img 
                    src={posts[0].coverImage || "/images/news/n-1.jpg"} 
                    alt={posts[0].title}
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
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
                      <img 
                        src={post.coverImage || "/images/news/ns-1.jpg"} 
                        alt={post.title}
                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                      />
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