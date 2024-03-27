const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a className="text-lg font-semibold text-[#38b762] border border-[#38b762]">Home</a></li>
                        <li>
                            <a className="text-lg font-normal">Listed Books</a>
                        </li>
                        <li><a className="text-lg font-normal">Pages to Read</a></li>
                        <li><a className="text-lg font-normal">Islamic Book</a></li>
                        <li><a className="text-lg font-normal">E-Book</a></li>
                    </ul>
                </div>
                <a className="text-2xl font-bold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-3">
                    <li><a className="text-lg font-semibold text-[#38b762] border border-[#38b762]">Home</a></li>
                    <li>
                        <a className="text-lg font-normal">Listed Books</a>
                    </li>
                    <li><a className="text-lg font-normal">Pages to Read</a></li>
                    <li><a className="text-lg font-normal">Islamic Book</a></li>
                    <li><a className="text-lg font-normal">E-Book</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-2 lg:gap-4 hidden lg:flex">
                <a className="btn bg-[#38b762] text-lg font-semibold text-white">Sign In</a>
                <a className="btn text-lg font-semibold text-white bg-[#5ac6d1]">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;

/**
 * 
 * 
 *                         <ul className="hidden md:flex lg:flex  gap-6">
                            <NavLink to={'/'} className={({isActive}) => isActive ? 'text-primary  font bold' : 'font-bold'}>Home</NavLink>
                            <NavLink to={'/blogs'} className={({isActive}) => isActive ? 'text-primary  font bold' : 'font-bold'}>Blogs</NavLink>
                            <NavLink to={'/bookmarks'} className={({isActive}) => isActive ? 'text-primary  font bold' : 'font-bold'}>Bookmarks</NavLink>
                        </ul>
 */
