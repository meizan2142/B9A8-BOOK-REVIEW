const Hero = () => {
    return (

        <div>
            <div className="hero bg-[#1313130d] rounded-2xl lg:mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse  lg:gap-24">
                    <img src="https://i.ibb.co/B66s3VK/pngwing-com-1.png" className="w-48 lg:w-60" />
                    <div className="space-y-12">
                        <h1 className="lg:text-5xl text-3xl font-bold">Books to freshen <br /> up your bookshelf</h1>
                        <button className="btn bg-[#38b762] text-lg font-semibold text-white">View The list</button>
                    </div>
                </div>
            </div>
            <div className="text-4xl font-bold mt-24">
                <p>Books</p>
            </div>
        </div>
    );
};

export default Hero;