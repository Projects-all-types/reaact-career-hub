import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex pt-[200px] justify-center ">
            <div className=" border-2 shadow-lg w-2/3  h-[500px] rounded-lg ">
                <h2 className="text-center font-semibold text-7xl flex justify-center items-center">Ooops !!!</h2>
                <div className="text-center py-5">
                    <Link to="/" className="btn btn-primary">Back to home</Link>

                </div>
            </div>
       </div>
    );
};

export default ErrorPage;