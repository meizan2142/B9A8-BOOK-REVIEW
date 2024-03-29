import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0)
    return (
        <div className='lg:w-[1200px] lg:mx-auto text-center m-2'>
            <p className="bg-[#1313130d] rounded-2xl lg:mt-9 h-12 lg:h-24 items-center justify-center grid font-bold text-2xl">Books</p>
            <div className="grid justify-center items-center lg:mt-8 mt-5">
                <button className="flex items-center justify-center px-4 gap-3 py-2 text-base font-medium leading-6 text-black whitespace-no-wrap bg-[#38b762] border-2 rounded-xl shadow-sm hover:bg-transparent   ">
                    <p>Sort By</p>
                    <img src="https://img.icons8.com/?size=24&id=85327&format=png" alt="" />
                </button>
            </div>
            {/* Tabs */}
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap mt-11">
                <Link onClick={() => setTabIndex(0)}
                to='' 
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'}   border-black text-black rounded-t-md`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Read Books</span>
                </Link>
                <Link onClick={() => setTabIndex(1)} 
                to='wishlistbooks' 
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1? 'border border-b-0' : 'border-b'}   border-black text-black rounded-t-md`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Wishlist Books</span>
                </Link>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;