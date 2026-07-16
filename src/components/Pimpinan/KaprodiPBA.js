"use client";

import React from "react";

// CATATAN: nama & jabatan diambil dari foto resmi yang dikirim prodi
// ("Kaprodi S1 Pendidikan Bahasa Arab Hasan Ansori.jpeg"). Gelar akademik,
// riwayat pendidikan, Sinta ID, dan Google Scholar BELUM tersedia — jangan
// diisi karangan, lengkapi dari data resmi prodi/FTK sebelum publish.
const KaprodiPBA = () => {
  return (
    <section id="teachers-singel" className="pt-70 pb-120 gray-bg">
      <div className="container">
        <div className="row justify-content-center">
          {/* Teacher Left Section */}
          <div className="col-lg-4 col-md-8">
            <div className="teachers-left mt-50">
              <div className="hero">
                <img src="/images/dosen/d-18.jpeg" alt="Teachers" />
              </div>
              <div className="name">
                <h6>Hasan Ansori</h6>
                <span>Ketua Prodi Pendidikan Bahasa Arab (PBA)</span>
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
                        Ketua Program Studi Pendidikan Bahasa Arab (PBA) Fakultas Tarbiyah dan
                        Keguruan Institut Agama Islam Persis Garut.
                      </p>
                    </div>
                    <div className="singel-dashboard pt-40">
                      <h5>Pendidikan</h5>
                      <p>-</p>
                    </div>
                    <div className="singel-dashboard pt-40">
                      <h5>ID Penelitian</h5>
                      <p>Sinta ID: -</p>
                      <p>Google Scholar: -</p>
                    </div>
                  </div>
                </div>

                {/* Courses Tab */}
                <div className="tab-pane fade" id="courses" role="tabpanel" aria-labelledby="courses-tab"></div>

                {/* Reviews Tab */}
                <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KaprodiPBA;
