import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Sidebar from "./components/Sidebar";
import { useState, useEffect } from "react";
import checkAuth from "./middleware/authMiddleware";
import { NextPageContext } from 'next';
import axios from "axios";
import Cookies from 'js-cookie';
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const token = Cookies.get('jwt');
  const Claim = async (voucherId: string) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/voucher/${voucherId}/claim`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        fetchData();
      } else {
        // Tangani kasus respons tidak berhasil jika diperlukan
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
  };
  const fetchData = async () => {
    try {
      const responseVoucher = await axios.get('http://127.0.0.1:8000/api/get-voucher', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setVoucher(responseVoucher.data.data);

    } catch (error) {

    }
  };

  const [voucher, setVoucher] = useState([]);
  useEffect(() => {
    checkAuth({} as NextPageContext);
    fetchData();

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
          <div className="col-12 d-none d-lg-block  col-lg-3 p-0 ">

            <Sidebar />

          </div>
          <div className="col-12 col-lg-9 ps-2">
            <h4 className="ps-2 mb-0 fw-bold">List Voucher</h4>
            <div className="row flex-wrap">
              {voucher.map((item: { id: string, foto: string, nama: string, kategori: string, status: string }) => (
                <div className="col-12 col-lg-4 p-0 m-0" key={item.id}>
                  <div className="card">
                    <img className="img-voucher" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s" alt="" />
                    <div className="d-flex justify-content-between mt-3 align-items-center">
                      <div className="col-9 d-flex flex-column">
                        <span className="m-0 p-0 fw-bold">{item.nama}</span>
                        <small className="p-0 m-0">
                          <small>{item.kategori}</small>
                        </small>
                      </div>
                      <div className="col-3 text-end">
                        <button onClick={() => Claim(item.id)} className="btn btn-sm btn-success rounded-pill px-2">Claim</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
