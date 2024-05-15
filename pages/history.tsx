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

const inter = Inter({ subsets: ["latin"] });

export default function History() {
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
            <Sidebar />
          </div>

        </div>
      </div>
    </>
  );
}
