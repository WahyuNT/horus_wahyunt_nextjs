import React from 'react'
import Link from "next/link";
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import checkAuth from '../middleware/authMiddleware';
import { NextPageContext } from 'next';

export default function Sidebar() {
    useEffect(() => {
        checkAuth({} as NextPageContext);
    }, []);
    const router = useRouter();
    const handleLogout = () => {
        
        Cookies.remove('jwt'); 
       
        router.push('/login');
    };


    return (
        <div >
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
                    <button onClick={handleLogout} className="btn btn-danger rounded-pill w-50 ">Log Out</button>
                </div>


            </div>
        </div>
    )
}