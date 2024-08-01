import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('');

    const navigate = useNavigate();

    const BASE_URL = 'http://localhost:8900/api/auth/register';

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Password and Confirm Password do not match');
            return;
        }

        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password,
                role
            })
        });

        const data = await res.json();

        if (res.status === 201) {
            navigate('/login');
        } else {
            alert(data.message);
        }
    };

    return (
        <section>
            <div className="w-[500px] m-auto py-8 px-12 shadow bg-white rounded-lg">
                <h1 className="text-4xl font-bold text-gray-800 text-center mb-5">Register</h1>
                <form action="" className="">
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="role">Role</label>
                        <select className="form-select" id="role" onChange={(e) => setRole(e.target.value)}>
                            <option value="employer">Employer</option>
                            <option value="job-seeker">Job Seeker</option>
                        </select>
                    </div>
                    <p>
                        Already have an account? <a href="/login" className="text-blue-500">Login</a>
                    </p>
                    <div className="flex justify-center items-center">
                        <button type="submit" className="btn btn-primary bg-orange-600 text-white px-5 py-2 rounded-lg" onClick={handleSubmit}>Register</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Register
