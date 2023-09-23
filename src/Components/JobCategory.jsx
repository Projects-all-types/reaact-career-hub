

const JobCategory = () => {
    return (
        <div className="mt-32">
            <div>
                <h1 className="text-5xl font-semibold text-center">Job Category List</h1>
                <p className="text-[#757575] text-center font-medium text-base pt-6">Explore thousands of job opportunities with all the information you need. Its your future</p>
                {/* all category cards */}
                <div className="pt-8  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-6">
                    {/* 1st card */}
                    <div className=" pl-12 w-[310px] h-[250px] bg-gray-100 rounded-lg">
                        <div className="mt-12 mb-10">
                            <img className="bg-gray-200 p-4  rounded-lg " src="../../assets/icons/accounts.png" alt="" />
                        </div>
                        <h1 className="text-xl font-bold">Account & Finance</h1>
                        <p className="text-base text-[757575] font-mediumpt-8">p300 Jobs Available</p>
                    </div>
                    {/* 2nd card */}
                    <div className=" pl-12 w-[310px] h-[250px] bg-gray-100 rounded-lg">
                        <div className="mt-12 mb-10">
                            <img className="bg-gray-200 p-4  rounded-lg " src="../../assets/icons/creative.png" alt="" />
                        </div>
                        <h1 className="text-xl font-bold">Creative Design</h1>
                        <p className="text-base text-[757575] font-mediumpt-8">100+ Jobs Available</p>
                    </div>
                    {/* 3rd card */}
                    <div className=" pl-12 w-[310px] h-[250px] bg-gray-100 rounded-lg">
                        <div className="mt-12 mb-10">
                            <img className="bg-gray-200 p-4  rounded-lg " src="../../assets/icons/marketing.png" alt="" />
                        </div>
                        <h1 className="text-xl font-bold">Marketing & Sales</h1>
                        <p className="text-base text-[757575] font-mediumpt-8">150 Jobs Available</p>
                    </div>
                    {/* 4th card */}
                    <div className=" pl-12 w-[310px] h-[250px] bg-gray-100 rounded-lg">
                        <div className="mt-12 mb-10">
                            <img className="bg-gray-200 p-4  rounded-lg " src="../../assets/icons/chip.png" alt="" />
                        </div>
                        <h1 className="text-xl font-bold">Engineering Job</h1>
                        <p className="text-base text-[757575] font-mediumpt-8">224 Jobs Available</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCategory;