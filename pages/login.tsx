import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

export default function Login() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', {
                username,
                password,
            });
            const token = response.data.token; // assuming your API returns a token
            Cookies.set('jwt', token, { expires: 7 });
            // redirect to dashboard or any other route
            router.push('/');
        } catch (error) {
            setError('Invalid username or password');
        }
    };

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
                        {error && <p>{error}</p>}
                        <div className="d-flex">
                            <small className="mt-2 text-center">Belum punya akun? <a href="/register">Register</a></small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
