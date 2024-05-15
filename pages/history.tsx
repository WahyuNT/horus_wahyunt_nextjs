import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Sidebar from "./components/Sidebar";
import checkAuth from "./middleware/authMiddleware";
import { NextPageContext } from "next";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import axios from "axios";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function History() {
  const router = useRouter();
  const token = Cookies.get('jwt');
  const remove = async (voucherId: string) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/voucher/${voucherId}/remove`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        fetchData();
      } else {
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
  };

  const fetchData = async () => {
    try {
      const responseVoucher = await axios.get('http://127.0.0.1:8000/api/history', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setVoucher(responseVoucher.data.data);
      console.log('sasa');
    } catch (error) {

    }
  };

  const KategoriNum = async () => {
    try {
      const responseKategori = await axios.get('http://127.0.0.1:8000/api/kategori-claim', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setKategori(responseKategori.data.data);
    } catch (error) {
    }
  };

  const handleLogout = () => {

    Cookies.remove('jwt');

    router.push('/login');
  };

  const [voucher, setVoucher] = useState([]);
  const [kategori, setKategori] = useState([]);
  useEffect(() => {
    checkAuth({} as NextPageContext);
    fetchData();
    KategoriNum();
  }, []);
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
                      <th scope="col">Kategori</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {voucher.map((item: { id: string, foto: string, nama: string, kategori: string, status: string }) => {
                      return (
                        <tr>
                          <th >{item.id}</th>
                          <td>{item.nama}</td>
                          <td>{item.kategori}</td>
                          <td><button onClick={() => remove(item.id)} className="btn btn-danger btn-sm  rounded-pill">Delete</button></td>
                        </tr>
                      )
                    })}


                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-3 p-0 ">
            <div className="card sidebar shadow-none m-0 d-flex flex-column align-items-between  mb-3">

              <h5 className="text-center fw-bold">Kategori Voucher</h5>
              {kategori.map((item: { id: string, kategori: string, jumlah: string }) => (
                <div className="div">
                  <a href="/" className="text-decoration-none ">
                    <div className="card card-sidebar-active shadow-none px-1 py-3 my-2 ">
                      <div className="d-flex justify-content-between px-3">
                        <div className="div">
                          {item.kategori}
                        </div>
                        <div className="div">
                          {item.jumlah}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}

              <div className="d-flex justify-content-center mt-auto ">
                <button onClick={handleLogout} className="btn btn-danger rounded-pill w-50 ">Log Out</button>
              </div>


            </div>
          </div>

        </div>
      </div>
    </>
  );
}
