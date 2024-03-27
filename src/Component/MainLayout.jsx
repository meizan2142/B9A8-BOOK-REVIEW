import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => {
    return (
        <div className="">
           <div className='lg:w-[1200px] lg:mx-auto text-center m-2'>
           <Navbar></Navbar>
           </div>
           <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;