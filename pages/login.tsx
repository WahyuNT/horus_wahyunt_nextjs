
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function Login() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center ">

                <div className="card mt-5">
                    <div className="card-body">
                        <form action="">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>

                            <div className="d-flex justify-content-center ">
                                <button type="submit" className="btn btn-primary rounded-pill px-3">Login</button>
                            </div>
                            <div className="d-flex">

                                <small className="mt-2 text-center">Belum punya akun? <a href="/register">Register</a></small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
