import { useEffect, useState } from "react";
import { FaMoneyBill } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const PopularJobs = () => {

    const [jobs, setJobs] = useState(null);
    const BASE_URL = "http://localhost:8900/api/jobs";

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await fetch(BASE_URL);
                const data = await res.json();
                setJobs(data.jobs);
                console.log(jobs)
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchJobs();
    }, []);

    return (
        <section className="py-[100px]">
            <h1 className="text-center font-light text-gray-800 text-4xl">Popular Jobs</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
                {jobs && jobs.map((job) => (
                    <div key={job._id} className="bg-white shadow-md p-5 rounded-md flex flex-col gap-5">
                        <h1 className="text-gray-800 text-xl font-semibold">Title: {job.title}</h1>
                        <p className="text-gray-500 text-md flex gap-1 items-center"><MdDescription className="text-gray-500" />{job.description}</p>
                        <p className="text-gray-500 text-md flex gap-1 items-center"><FaLocationDot className="text-gray-500" />{job.location}</p>
                        <p className="text-gray-500 text-md flex gap-1 items-center"><FaBuilding className="text-gray-500" />{job.company}</p>
                        <p className="text-gray-500 text-md flex gap-1 items-center"><FaUser className="text-gray-500" />{job.postedBy.username}</p>
                        <p className="text-gray-500 text-md flex items-center gap-1"><FaMoneyBill className="text-gray-500" />${job.salary}</p>
                        <button className="bg-orange-600 text-white px-5 py-2 rounded-md mt-2">Apply Now</button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PopularJobs
