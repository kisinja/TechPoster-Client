import { FaSearch } from "react-icons/fa";
import { useEffect } from "react";

const Navbar = () => {


    useEffect(() => {
        window.onscroll = () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 0) {
                nav.classList.add('bg-white', 'shadow-md');
            } else {
                nav.classList.remove('bg-white', 'shadow-md');
            }
        };
    }, []);

    return (
        <nav className="flex justify-between py-[20px] items-center sticky top-0 px-[2%]">
            <div className="logo">
                <a href="/" className="text-2xl font-bold text-orange-400">
                    Tech<span className="text-orange-600">Poster</span>
                </a>
            </div>

            <div className="flex items-center gap-8">
                <ul className="flex gap-8 items-center">
                    <li>
                        <a href="/" className="text-lg text-gray-800" id="links">Home</a>
                    </li>
                    <li>
                        <a href="/jobs" className="text-lg text-gray-800" id="links">Jobs</a>
                    </li>
                    <li>
                        <a href="/login" className="text-lg text-gray-800" id="links">Login</a>
                    </li>
                    <li>
                        <a href="/register" className="text-lg text-gray-800" id="links">Register</a>
                    </li>
                </ul>

                <div>
                    <FaSearch />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;