import { useEffect, useState } from "react";
import FeaturedsJob from "./FeaturedsJob";
 


const FeaturedJob = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    const [dataLength , setDataLength]= useState(3)
    useEffect(() => {
        fetch('jobs.json')
        .then(response=>response.json())
        .then(data=>setFeaturedJobs(data))
    },[])
    return (
        <div className="mt-32">
            <div>
                <h1 className="text-5xl text-center font-semibold">Featured Jobs { featuredJobs.length}</h1>
                <p className="text-center text-base pt-6 text-[#757575] font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="mt-32 grid grid-cols-1 gap-6  lg:grid-cols-3 items-center justify-center ">
                {
                    featuredJobs.slice(0,dataLength).map(featuredJob=><FeaturedsJob key={featuredJob.id} featuredJob={featuredJob}></FeaturedsJob>)
                }
            </div>
            <div className="flex items-center justify-center mt-10 mb-24  ">
                <div className={dataLength===featuredJobs.length ? "hidden" : ''   }>
                    <button onClick={() => setDataLength(featuredJobs.length)} className='btn btn-primary '>Show All</button>
                </div>

            </div>
        </div>
    );
};

export default FeaturedJob;