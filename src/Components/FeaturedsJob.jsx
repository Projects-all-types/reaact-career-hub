
import { IoLocationOutline } from 'react-icons/io5';
import { BiDollarCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const FeaturedsJob = ({ featuredJob }) => {
    const { id,logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = featuredJob
    return (
        <div>
            <div className="border-2 rounded-xl lg:w-[500px] pl-10 pt-10 shadow-lg">
                <img src={logo} alt="" />
                <p className="text-2xl font-extrabold pt-8 pb-2 text-[#474747]">{job_title}</p>
                <p className="text-xl font-semibold text-[#757575]">{company_name}</p>
                <div className="">
                    <button className="btn border-2 border-violet-500 my-6 text-violet-500 font-bold mr-4">{remote_or_onsite}</button>
                    <button className="btn border-2 border-violet-500 text-violet-500 font-bold" >{job_type}</button>
                </div>
                <div className='flex gap-4 items-center pb-6'>
                    <div className='flex gap-2 items-center'>
                        <IoLocationOutline className='text-xl'></IoLocationOutline>
                        <p className="text-[#757575] text-xl font-medium">{location}</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <BiDollarCircle className='text-xl'></BiDollarCircle>
                        <p className="text-[#757575] text-xl font-medium">Salary :{salary}</p>
                    </div>
                </div>
                <Link to={`/job/${id}`}>
                    <button className='btn btn-primary mb-10'> View Details</button>
                </Link>
                
            </div>
            
        </div>
    );
};

export default FeaturedsJob;