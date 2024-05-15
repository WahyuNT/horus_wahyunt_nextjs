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
  const [valueFilter, setValueFilter] = useState('');
  const handleFilterChange = (newValue: any) => {
    setValueFilter(newValue);
  };
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
        KategoriNum();
      } else {
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
  };

  const fetchData = async () => {
    try {
      const responseVoucher = await axios.get(`http://127.0.0.1:8000/api/history/${valueFilter}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setVoucher(responseVoucher.data.data);
      setTotal(responseVoucher.data.total);

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
  const [total, setTotal] = useState('');
  useEffect(() => {
    checkAuth({} as NextPageContext);
    fetchData();
    KategoriNum();
  }, [valueFilter, total]);
  return (
    <>
      <nav className="navbar  nav-voucher navbar-light bg-light">
        <div className="container d-flex align-items-center">
          <a className="navbar-brand" href="/">
            <div className=" d-none d-lg-block fw-bold">
              <img src="/icon/icon.png" height={40} alt="" />
              Voucer App
            </div>
            <div className="d-lg-none d-block">
              <button className="btn btn-bar d-flex align-items-centeer" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i className="fa-solid fa-bars fa-xl"></i>
              </button>
            </div>
          </a>
          <h4 className="fw-bold d-none d-lg-block">
            History
          </h4>
          <Link href={"/history"}>

            <button className="btn btn-info rounded-pill px-3">History</button>
          </Link>
        </div>
      </nav>




      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-3">
            <div className="card sidebar-mobile shadow-none border-0 m-0 d-flex flex-column align-items-between  mb-3">

              <h5 className="text-center fw-bold">Kategori Voucher</h5>
              {kategori.map((item: { id: string, kategori: string, jumlah: string }) => (
                <div className="" onClick={() => handleFilterChange(item.kategori)}>
                  <div className={`card my-2 shadow-none px-1 py-3 ${valueFilter === item.kategori ? 'card-sidebar-active' : 'card-sidebar'}`}>
                    <div className="d-flex justify-content-between px-3">
                      <div className="div">
                        {item.kategori}
                      </div>
                      <div className="div">
                        {item.jumlah}
                      </div>
                    </div>
                  </div>


                </div>
              ))}
              <p className="text-center">Total : {total}</p>
              <div className="d-flex justify-content-center">

                <button className="btn btn-sm btn-warning btn-sm rounded-pill px-4" onClick={() => handleFilterChange('')}>Reset Filter</button>
              </div>
              <div className="d-flex justify-content-center mt-auto ">
                <button onClick={handleLogout} className="btn btn-danger rounded-pill w-50 ">Log Out</button>
              </div>


            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 pt-4">

        <div className="d-flex justify-content-between mt-4">
          <div className="col-lg-9 col-12">
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

                      <th scope="col">Voucher</th>
                      <th scope="col">Kategori</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {voucher.map((item: { id: string, voucher: { kategori: string, foto: string, nama: string }, status: string }) => {
                      return (
                        <tr key={item.id}>
                          <td><img src={'http://127.0.0.1:8000/img/' + item.voucher.foto} height={30} alt="" className="me-2" />{item.voucher.nama}</td>
                          <td>{item.voucher.kategori}</td>
                          <td><button onClick={() => remove(item.id)} className="btn btn-danger btn-sm rounded-pill">Delete</button></td>
                        </tr>
                      )
                    })}



                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-3 p-0  d-none d-lg-block">
            <div className="card sidebar shadow-none m-0 d-flex flex-column align-items-between  mb-3">

              <h5 className="text-center fw-bold">Kategori Voucher</h5>
              {kategori.map((item: { id: string, kategori: string, jumlah: string }) => (
                <div className="" onClick={() => handleFilterChange(item.kategori)}>
                  <div className={`card my-2 shadow-none px-1 py-3 ${valueFilter === item.kategori ? 'card-sidebar-active' : 'card-sidebar'}`}>
                    <div className="d-flex justify-content-between px-3">
                      <div className="div">
                        {item.kategori}
                      </div>
                      <div className="div">
                        {item.jumlah}
                      </div>
                    </div>
                  </div>


                </div>
              ))}
              <p className="text-center">Total : {total}</p>
              <div className="d-flex justify-content-center">

                <button className="btn btn-sm btn-warning btn-sm rounded-pill px-4" onClick={() => handleFilterChange('')}>Reset Filter</button>
              </div>

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
