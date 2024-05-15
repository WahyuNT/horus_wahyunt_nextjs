import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            sasas
          </a>
          Halaman Voucher
          <Link href={"/history"}>

            <button className="btn btn-info rounded-pill px-3">History</button>
          </Link>
        </div>
      </nav>




      <div className="container">

        <div className="d-flex justify-content-between mt-4">
          <div className="col-12 d-none d-lg-block  col-lg-3 p-0 ">
            <div className="card sidebar shadow-none m-0 d-flex flex-column align-items-between  mb-3">

              <h5 className="text-center fw-bold">Kategori Voucher</h5>
              <div className="div">
                <a href="/" className="text-decoration-none ">
                  <div className="card card-sidebar-active shadow-none px-1 py-3 my-2 ">
                    <div className="d-flex justify-content-between px-3">
                      <div className="div">
                        Fashion
                      </div>
                      <div className="div">
                        18
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="div">

                <a href="/" className="text-decoration-none  mt-0">
                  <div className="card card-sidebar-active shadow-none px-1 py-3 my-2 ">
                    <div className="d-flex justify-content-between px-3">
                      <div className="div">
                        Food
                      </div>
                      <div className="div">
                        3
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="div">
                <a href="/" className="text-decoration-none  mt-0">
                  <div className="card card-sidebar-active shadow-none px-1 py-3 my-2 ">
                    <div className="d-flex justify-content-between px-3">
                      <div className="div">
                        Electronic
                      </div>
                      <div className="div">
                        3
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="d-flex justify-content-center mt-auto ">
                <button className="btn btn-danger rounded-pill w-50 ">Log Out</button>
              </div>


            </div>
          </div>
          <div className="col-12 col-lg-9 ps-2">
            <h4 className="ps-2 mb-0 fw-bold">List Voucher</h4>
            <div className="row flex-wrap">

              <div className="col-12 col-lg-4 p-0 m-0">
                <div className="card ">
                  <img className="img-voucher" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s" alt="" />

                  <div className="d-flex justify-content-between mt-3 align-items-center">
                    <div className="col d-flex flex-column">

                      <span className="m-0 p-0 fw-bold">Diskon 50</span>
                      <small className="p-0 m-0">
                        <small>
                          Fashion
                        </small>
                      </small>
                    </div>
                    <div className="col text-end">
                      <button className="btn btn-sm btn-success rounded-pill px-2">Claim</button>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
}
