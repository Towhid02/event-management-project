import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="dark">
           <Outlet></Outlet>
        </div>
    );
};

export default Root;