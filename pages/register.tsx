
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function Register() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center ">

                <div className="card mt-5">
                    <div className="card-body">
                        <form action="">
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="username" />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nama" className="form-label">Nama</label>
                                <input type="nama" className="form-control" id="nama" />
                            </div>
                            <div className="d-flex justify-content-center ">
                                <button type="submit" className="btn btn-primary rounded-pill px-3">Register</button>
                            </div>
                            <div className="d-flex justify-content-center">
                                <small className="text-center mt-2">Sudah punya akun?<a href="/login">Login</a></small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
