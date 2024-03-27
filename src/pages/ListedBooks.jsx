const ListedBooks = () => {
    return (
        <div className='lg:w-[1200px] lg:mx-auto text-center m-2'>
            <p className="bg-[#1313130d] rounded-2xl lg:mt-9 h-12 lg:h-24 items-center justify-center grid font-bold text-2xl">Books</p>
            <label className="form-control lg:mt-8 mt-5 text-center justify-center items-center grid ">
                <select className="select select-bordered bg-[#38b762] font-bold text-white text-lg border-none">
                    <option>Rating</option>
                    <option>Number of Pages</option>
                    <option>Publisher Year</option>
                </select>
            </label>
        </div>
    );
};

export default ListedBooks;