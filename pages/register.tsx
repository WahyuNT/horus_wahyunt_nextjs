
import axios from "axios";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useState } from "react";


const inter = Inter({ subsets: ["latin"] });

export default function Register() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        nama: '',
        tanggal_daftar: '',
    });

    const [errors, setErrors] = useState([]);
    const router = useRouter();
    const handleChange = (e: any) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register-store', formData);
            router.push('/login');
        } catch (error: any) {
            console.log(error.response.data.errors);
            setErrors(error.response.data.errors);

        }
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center ">

                <div className="card mt-5">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input required type="text" className="form-control" id="username" value={formData.username} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input required type="password" className="form-control" id="password" value={formData.password} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input required type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nama" className="form-label">Nama</label>
                                <input required type="text" className="form-control" id="nama" value={formData.nama} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tanggal_daftar" className="form-label">Nama</label>
                                <input required type="date" className="form-control" id="tanggal_daftar" value={formData.tanggal_daftar} onChange={handleChange} />
                            </div>
                            <div className="d-flex justify-content-start my-3">

                                <small className="text-danger">{errors}</small>
                            </div>
                            <div className="d-flex justify-content-center ">
                                <button type="submit" className="btn btn-primary rounded-pill px-3">Register</button>
                            </div>
                            <div className="d-flex justify-content-center">
                                <small className="text-center mt-2">Sudah punya akun? <a href="/login">Login</a></small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
