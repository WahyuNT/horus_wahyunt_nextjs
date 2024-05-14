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
          <div className="col-9">
            <div className="d-flex">
              <Link href={"/"}>

                <button className="btn btn-sm btn-warning rounded-pill"><i className="fa-solid fa-arrow-left"></i></button>
              </Link>
              <h4 className="mb-0 fw-bold ms-2">List Voucher</h4>
            </div>
            <div className="card mx-0 me-3 ">
              <div className="div">
                <table className="table table-bordered ">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Voucher</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th >1</th>
                      <td>Mark</td>
                      <td><button className="btn btn-danger btn-sm  rounded-pill">Delete</button></td>
                    </tr>


                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-3 p-0 ">
            <div className="card sidebar shadow-none m-0 d-flex flex-column align-items-between  mb-3">

              <h5 className="text-center fw-bold">Voucher Terklaim</h5>
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

        </div>
      </div>
    </>
  );
}
