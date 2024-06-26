import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import checkAuth from "./middleware/notAuthMiddleware";
import { NextPageContext } from 'next';

export default function Login() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://be-horus.wahyunt.me/api/login', {
                username,
                password,
            });
            const token = response.data.token; 
            Cookies.set('jwt', token, { expires: 7 });
  
            router.push('/');
        } catch (error) {
            setError('Invalid username or password');
        }
    };
    useEffect(() => {
        checkAuth({} as NextPageContext);
    }, []);
    return (
        <>
            <div className="d-flex justify-content-center align-items-center ">
                <div className="card mt-5">
                    <div className="card-body">

                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" name='username' className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" name='password' className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="d-flex justify-content-center ">
                            <button onClick={handleLogin} className="btn btn-primary rounded-pill px-3">Login</button>
                        </div>
                        {error && <p className='text-danger'>{error}</p>}
                        <div className="d-flex">
                            <small className="mt-2 text-center">Belum punya akun? <a href="/register">Register</a></small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
