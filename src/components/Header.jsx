import { FaSearch } from "react-icons/fa"
import HeaderImg from '../assets/header.svg';

const Header = () => {
    return (
        <header className="flex justify-center items-center">
            <div className="w-1/2 h-[300px]">
                <img src={HeaderImg} className="w-full h-full object-contain" alt="header illustrator" />
            </div>
            <div className="w-1/2 h-[300px] flex flex-col gap-5">
                <h1 className="text-gray-800 text-5xl font-bold tracking-wide">Find The Job That Fits <br />Your Life</h1>
                <p className="text-gray-500 text-md tracking-wider">Search for jobs that match your skills and experience</p>
                <div className="flex justify-between w-fit relative">
                    <FaSearch className="absolute top-4 left-2" />
                    <input type="text" placeholder="Search for jobs" className="border-none bg-white rounded-l-lg px-8 py-2" />
                    <button className="py-3 px-5 bg-orange-600 text-white rounded-r-lg cursor-pointer">Search</button>
                </div>
            </div>
        </header>
    )
}

export default Header