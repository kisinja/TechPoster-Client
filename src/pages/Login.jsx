import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');

    const BASE_URL = 'http://localhost:8900/api/auth/login';

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(email, password);

        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
            })
        });

        const data = await res.json();

        console.log(data.token);

        setEmail("");
        setPassword("");

        if (res.status === 200) {
            navigate("/jobs");
        } else {
            setErr(data.message);
        }
    };

    return (
        <div className="w-[500px] m-auto py-8 px-12 shadow bg-white rounded-lg">
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-5">Login</h1>
            <form action="">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <p>
                    Don{"'"}t have an account? <a href="/register" className="text-blue-500">Sign Up</a>
                </p>

                {err && <p className="text-red-600 text-md">{err}</p>}

                <div className="flex justify-center items-center">
                    <button type="submit" className="btn btn-primary bg-orange-600 text-white px-5 py-2 rounded-lg" onClick={handleSubmit}>Sign In</button>
                </div>
            </form>
        </div>
    );
};

export default Login;