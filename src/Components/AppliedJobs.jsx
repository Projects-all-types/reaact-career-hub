import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../localStorage";
import AppliedJob from "./AppliedJob";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs , setDisplayJobs] = useState([])

    const handleFilterBtn = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs)
        } else if (filter === 'remote') {
            let remoteFilteredJobs = appliedJobs.filter((job) =>  job?.remote_or_onsite?.includes('Remote'))
            setDisplayJobs(remoteFilteredJobs)
        } else if (filter === 'onsite') {
            let onsiteFilteredJobs = appliedJobs.filter((job) => job?.remote_or_onsite?.includes('Onsite'))
            setDisplayJobs(onsiteFilteredJobs) 
        }
    }
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            setAppliedJobs(jobsApplied)
            
        }
        
    },[jobs])
    return (
        <div>
            <h1 className="text-center text-3xl font-bold ">Applied Jobs </h1>
            <div>
                <div className="flex justify-end">
                    <details className="dropdown mb-32">
                        <summary className="m-1 btn">Fitler</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li onClick={()=>handleFilterBtn('all')}><a>All</a></li>
                            <li onClick={()=>handleFilterBtn('remote')}><a>Remote</a></li>
                            <li onClick={()=>handleFilterBtn('onsite')}><a>On Site</a></li>
                        </ul>
                    </details>
                </div>
                <div className="pb-20">
                    
                    {
                        displayJobs.map(appliedJob => <AppliedJob key={appliedJob.id} appliedJob={appliedJob}></AppliedJob>)
                  }
               </div>
            </div>
        </div>
    );
};

export default AppliedJobs;