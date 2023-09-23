

const Banner = () => {
    return (
        <div className="bg-gray-200 ">
            <div>
                <div className="flex gap-6 items-center justify-center">
                    <div className="w-[570px]">
                        <h1 className="text-center text-7xl font-bold">One Step Closer To Your <span className="text-blue-600">Dream Job</span></h1>
                        <p className=" text-center text-[#757575] pt-6 text-lg font-medium">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <div className="flex justify-center mt-8">
                            <button className=" btn btn-primary bg-">Get Started</button>
                       </div>
                    </div>
                    <div>
                        <img src="../../assets/images/user.png" alt="" />
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default Banner;