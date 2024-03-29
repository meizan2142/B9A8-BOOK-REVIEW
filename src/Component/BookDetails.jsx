import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const BookDetails = () => {
    const bookInfo = useLoaderData();
    const { bookId } = useParams();
    const [selectedBook, setSelectedBook] = useState('');
    useEffect(() => {
        const catchBook = bookInfo?.find((catchesBook) => catchesBook.bookId == bookId)
        console.log(catchBook);
        setSelectedBook(catchBook)
    }, [bookId, bookInfo])
    const handleToast1 = () => {toast('Added to Read Books list')}
    const handleToast2 = () => {toast('Added to Wish List ')}
    return (
        <div className='lg:w-[1200px] lg:mx-auto text-center m-2 lg:mt-12'>
            <div className="hero bg-base-200 rounded-xl">
                <div className="hero-content flex-col lg:flex-row lg:gap-12">
                    <img src={selectedBook.image} className="lg:max-w-sm rounded-lg shadow-2xl" />
                    <div className="lg:space-y-4 space-y-2">
                        <h1 className="text-3xl font-bold">{selectedBook.bookName}</h1>
                        <p className="py-6 font-medium">By : {selectedBook.author}</p>
                        <p className="font-medium">{selectedBook.category}</p>
                        <p className="lg:w-72 lg:text-center mx-auto"><span className="font-bold">Review: </span>{selectedBook.review}</p>
                        <div className="items-center justify-center grid space-y-2 lg:space-y-4">
                            <div className="flex items-center gap-4 lg:gap-10">
                                <p className="font-bold">Tag</p>
                                <p className="btn btn-sm rounded-full text-[#23BE0A] font-bold">#{selectedBook.booksTypeOne}</p>
                                <p className="btn btn-sm rounded-full text-[#23BE0A] font-bold">#{selectedBook.booksTypeTwo}</p>
                            </div>
                            <div className="flex items-center gap-10 justify-between">
                                <p className="font-medium">Number of Pages:</p>
                                <p className="font-bold">{selectedBook.totalPages}</p>
                            </div>
                            <div className="flex items-center gap-10 justify-between">
                                <p className="font-medium">Publisher:</p>
                                <p className="font-bold">{selectedBook.publisher}</p>
                            </div>
                            <div className="flex items-center gap-10 justify-between">
                                <p className="font-medium">Year of Publishing:</p>
                                <p className="font-bold">{selectedBook.yearOfPublishing}</p>
                            </div>
                            <div className="flex items-center gap-10 justify-between">
                                <p className="font-medium">Rating:</p>
                                <p className="font-bold">{selectedBook.rating}</p>
                            </div>
                            <div className="flex items-center gap-6">
                                <a onClick={handleToast1} className="flex items-center justify-center px-4 py-2 hover: text-base font-medium leading-6 text-black whitespace-no-wrap bg-white border-2 rounded-xl shadow-sm hover:bg-transparent  hover:border-white focus:outline-none">
                                    Read
                                </a>
                                <a onClick={handleToast2} className="flex items-center justify-center px-4 py-2 hover: text-base font-medium leading-6 text-black whitespace-no-wrap bg-[#5ac6d1] border-2 rounded-xl shadow-sm hover:bg-transparent  hover:border-white focus:outline-none">
                                    Wishlist
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BookDetails;
