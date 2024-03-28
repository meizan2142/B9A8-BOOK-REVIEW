import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

// import PropTypes from 'prop-types';
const BookDetails = () => {
    const bookInfo = useLoaderData();
    const {bookId} = useParams();
    const [selectedBook, setSelectedBood] = useState('');
    useEffect(()=> {
        const catchBook = bookInfo?.find((catchesBook) => catchesBook.bookId == bookId)
        console.log(catchBook);
        setSelectedBood(catchBook)
    },[bookId, bookInfo])
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
                            <p  className="btn btn-sm rounded-full text-[#23BE0A] font-bold">#{selectedBook.booksTypeOne}</p>
                            <p  className="btn btn-sm rounded-full text-[#23BE0A] font-bold">#{selectedBook.booksTypeTwo}</p>
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
                        <button className="btn btn-primary">Get Started</button>
                        <button className="btn btn-primary">Get Started</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
// BookDetails.propTypes = {
//     book: PropTypes.object
// }


export default BookDetails;