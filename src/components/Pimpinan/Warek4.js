"use client";

import React from "react";

const Warek4 = () => {
  return (
    <section id="teachers-singel" className="pt-70 pb-120 gray-bg">
      <div className="container">
        <div className="row justify-content-center">
          {/* Teacher Left Section */}
          <div className="col-lg-4 col-md-8">
            <div className="teachers-left mt-50">
              <div className="hero">
                <img src="/images/dosen/d-5.jpg" alt="Teachers" />
              </div>
              <div className="name">
                <h6>Dr. Heri Mohamad Tohari, M.Pd.</h6>
                <span>Wakil Rektor IV Bidang Humas, Kerjasama, dan Alumni</span>
              </div>
              <div className="social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google-plus-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin-square"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div className="description">
                <p>
                Dr. H. Tiar Anwar Bachtiar, S.S, M.Hum (lahir 20 Juni 1979) adalah sejarawan Islam, akademisi, dan penulis Indonesia. 
                Ia menjabat sebagai Ketua Sekolah Tinggi Agama Islam PERSIS Garut periode 2024–2028.
                </p>
              </div> */}
            </div>
          </div>

          {/* Teacher Right Section */}
          <div className="col-lg-8">
            <div className="teachers-right mt-50">
              <ul className="nav nav-justified" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="dashboard-tab"
                    data-toggle="tab"
                    href="#dashboard"
                    role="tab"
                    aria-controls="dashboard"
                    aria-selected="true"
                  >
                    Profil
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="courses-tab"
                    data-toggle="tab"
                    href="#courses"
                    role="tab"
                    aria-controls="courses"
                    aria-selected="false"
                  >
                    Publikasi
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="reviews-tab"
                    data-toggle="tab"
                    href="#reviews"
                    role="tab"
                    aria-controls="reviews"
                    aria-selected="false"
                  >
                    Buku
                  </a>
                </li>
              </ul>

              {/* Tab Content */}
              <div className="tab-content" id="myTabContent">
                {/* Dashboard Tab */}
                <div
                  className="tab-pane fade show active"
                  id="dashboard"
                  role="tabpanel"
                  aria-labelledby="dashboard-tab"
                >
                  <div className="dashboard-cont">
                    <div className="singel-dashboard pt-40">
                      <h5>Tentang</h5>
                      <p>
                      Aktif sebagai pekerja sosial dan bertindak sebagai penggagas Desa Caang dan menakhkodai The Creative Institute.
 

                      </p>
                      <p>
                      Pernah ikut terlibat dalam pemberdayaan “Living Value Education” dan “Pesantren Ramah Anak”, sebuah program kerjasama UNICEF, Terre des Hommes, dan LSAF. Pernah juga menjadi Staf Ahli di DPR RI dan Tenaga Ahli Kurator. Kini aktif terlibat sebagai Fasilitator Program Sekolah Penggerak Kemendikbud RI.

                      </p>
                      <p>
                      Berprofesi sebagai dosen muda, peneliti, dan penulis di berbagai media massa, jurnal nasional dan internasional. Kerap kali langganan diundang menulis dan mengisi forum internasional yang berkaitan community development, seperti: IIGCE, IIGW, dll.
                      </p>
                    </div>
                    <div className="singel-dashboard pt-40">
                      <h5>Pendidikan</h5>
                      <p>S1 Universitas Gadjah Mada		Universitas Padjadjaran	</p>
                      <p>S2 Universitas Pendidikan Indonesia</p>	
                      <p>S3 Universitas Pendidikan Indonesia</p>

                    </div>
                    <div className="singel-dashboard pt-40">
                        <h5>ID Penelitian</h5>
                        <p>Sinta ID: 6724739</p>
                        <p>
                            Google Scholar:  
                            <a href="https://scholar.google.co.id/citations?user=f__HAIUAAAAJ&hl=id" target="_blank" rel="noopener noreferrer">
                             Klik di sini
                            </a>
                        </p>
                        </div>
                  </div>
                </div>

                {/* Courses Tab */}
                <div className="tab-pane fade" id="courses" role="tabpanel" aria-labelledby="courses-tab">
                  {/* <div className="courses-cont pt-20">
                    <div className="row">
                      <Course
                        image="/images/course/cu-2.jpg"
                        price="$10"
                        title="Learn basic JavaScript from start for beginners"
                        teacherImage="/images/course/teacher/t-2.jpg"
                        teacherName="Mark Anthem"
                        reviewsCount={20}
                        userCount={31}
                        likeCount={10}
                      />
                      <Course
                        image="/images/course/cu-3.jpg"
                        price="$30"
                        title="Learn basic JavaScript from start for beginners"
                        teacherImage="/images/course/teacher/t-2.jpg"
                        teacherName="Mark Anthem"
                        reviewsCount={20}
                        userCount={31}
                        likeCount={10}
                      />
                    </div>
                  </div> */}
                </div>

                {/* Reviews Tab */}
                <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Course = ({ image, price, title, teacherImage, teacherName, reviewsCount, userCount, likeCount }) => (
  <div className="col-md-6">
    <div className="singel-course mt-30">
      <div className="thum">
        <div className="image">
          <img src={image} alt="Course" />
        </div>
        <div className="price">
          <span>{price}</span>
        </div>
      </div>
      <div className="cont border">
        <ul>
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index}>
              <i className="fa fa-star"></i>
            </li>
          ))}
        </ul>
        <span>({reviewsCount} Reviews)</span>
        <a href="#">
          <h4>{title}</h4>
        </a>
        <div className="course-teacher">
          <div className="thum">
            <a href="#">
              <img src={teacherImage} alt="Teacher" />
            </a>
          </div>
          <div className="name">
            <a href="#">
              <h6>{teacherName}</h6>
            </a>
          </div>
          <div className="admin">
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-user"></i>
                  <span>{userCount}</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-heart"></i>
                  <span>{likeCount}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Warek4;