import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Sidebar from "./components/sidebar";


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
            <Sidebar />
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
