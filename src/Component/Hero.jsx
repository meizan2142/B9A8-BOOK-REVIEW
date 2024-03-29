import { NavLink } from "react-router-dom";
const Hero = () => {
    return (

        <div  className='lg:w-[1200px] lg:mx-auto text-center m-2'>
            <div className="hero bg-[#1313130d] rounded-2xl lg:mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse  lg:gap-24">
                    <img src="https://i.ibb.co/B66s3VK/pngwing-com-1.png" className="w-48 lg:w-60" />
                    <div>
                        <h1 className="lg:text-5xl text-3xl font-bold">Books to freshen<br/>up your bookshelf</h1>
                        <div>
                        <NavLink to="/listedbooks"><button className="btn bg-[#38b762] text-lg font-semibold text-white mt-10">View The list</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-4xl font-bold lg:mt-24 mt-10">
                <p>Books</p>
            </div>
        </div>
    );
};

export default Hero;