import { Link, useLoaderData, useParams } from "react-router-dom";
import { BiDollarCircle } from 'react-icons/bi';
import { RiCalendarTodoLine } from 'react-icons/ri';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../localStorage";


const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = job;

    const handleApplyJob = () => {
        toast('You have applied succesfully')
        saveJobApplication(idInt)
    }

    return (
        <div>
            <h1 className="text-3xl font-semibold">Job Details</h1>
            <div className="grid gap-3 md:grid-cols-4">
                <div className="col-span-3">
                    <p className="text-lg text-[#757575]"><span className="text-xl font-bold">Job Description: </span>
                        {job_description}</p>
                    <p className="text-lg text-[#757575] "><span className="text-xl font-bold">Job Responsibility: </span> {job_responsibility}</p>
                    <p className="text-[#757575] text-lg "><span className="text-xl font-bold">Educational Requirements : </span> {educational_requirements}</p>
                    <p className="text-lg text-[#757575]"><span className="text-xl font-bold">Experience :</span> { experiences}</p>
                </div>
                <div className="">
                    <div className="border-2 bg-gray-200 pl-8 pt-8 rounded-lg">
                        <p className="text-2xl font-bold pb-6 ">Job Details</p>
                        <hr />
                        <div className="flex gap-2 items-center pb-4">
                            <BiDollarCircle className="text-2xl "></BiDollarCircle>
                            <p className="text-lg text-[#757575]"><span className="text-xl font-bold">Salary :</span> { salary}(perMonth)</p>
                        </div>
                        <div className="flex gap-2 items-center pb-4">
                            <RiCalendarTodoLine className="text-2xl"></RiCalendarTodoLine>
                            <p className="text-lg text-[#757575]"><span className="text-xl font-bold">Job Title :</span> { job_title}</p>
                        </div>
                        <p className="text-2xl font-bold pb-6">Contact Information</p>
                         <hr />
                        <div className="flex gap-2 items-center pb-4">
                            <BiDollarCircle className="text-2xl "></BiDollarCircle>
                            <p className="text-lg text-[#757575]"><span className="text-xl font-bold">Phone :</span> {contact_information.phone}</p>
                        </div>
                        <div className="flex gap-2 items-center pb-4">
                            <BiDollarCircle className="text-2xl "></BiDollarCircle>
                            <p className="text-lg text-[#757575]"><span className="text-xl font-bold">Email :</span> {contact_information.email}</p>
                        </div>
                        <div className="flex gap-2 items-center pb-4">
                            <BiDollarCircle className="text-4xl "></BiDollarCircle>
                            <p className="text-lg text-[#757575]"><span className="text-xl font-bold">Adress :</span> {contact_information.address}</p>
                        </div>

                    </div>
                    <div>
                        <Link>
                            <button onClick={handleApplyJob} className="my-6 btn btn-primary w-full">Apply Now</button>
                        </Link>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;