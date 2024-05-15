// pages/profile.tsx

import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

const test = () => {
    const [email, setEmail] = useState<string | null>(null);

    useEffect(() => {
        // Ambil token dari localStorage atau cookies
        const token = localStorage.getItem('token'); // atau Cookies.get('token');

        if (token) {
            // Decode token
            const decodedToken: any = jwt_decode(token);
            // Cek apakah ada klaim email di dalam token
            if (decodedToken && decodedToken.email) {
                setEmail(decodedToken.email);
            } else {
                setEmail(null);
            }
        }
    }, []);

    return (
        <div>
            <h1>Profile</h1>
            {email ? (
                <p>Email: {email}</p>
            ) : (
                <p>Email not found in JWT.</p>
            )}
        </div>
    );
};

export default test;
