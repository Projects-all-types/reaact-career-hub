import Banner from "./Banner";
import FeaturedJob from "./FeaturedJob";
import JobCategory from "./JobCategory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <FeaturedJob></FeaturedJob>
        </div>
    );
};

export default Home;