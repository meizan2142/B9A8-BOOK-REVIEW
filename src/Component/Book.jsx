import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const Book = ({book}) => {
    return (
        <div className="lg:mt-24 mt-10">
            <NavLink to={`/bookdetails/${book.bookId}`}>
            <div>
                <div className="card bg-base-100 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src={book.image} alt="Shoes" className="rounded-xl w-52 lg:w-[280px] lg:h-[250px] bg-[#1313130d] shadow-xl"/>
                    </figure>
                    <div className="card-body">
                        <div className="space-x-3">
                            <button className="btn btn-sm rounded-full text-[#23BE0A] font-bold">{book.booksTypeOne}</button>
                            <button className="btn btn-sm rounded-full text-[#23BE0A] font-bold">{book.booksTypeTwo}</button>
                        </div>
                        <div className="mt-4 space-y-4">
                            <h1 className="text-2xl font-bold">{book.bookName}</h1>
                            <p className="#131313cc text-base font-medium">By : {book.author}</p>
                        </div>
                        <div className="flex justify-evenly items-center">
                            <h1 className="font-medium">{book.category}</h1>
                            <div className="flex gap-2">
                                <p className="font-medium">{book.rating}</p>
                                <img className="w-6" src="https://i.ibb.co/swTKnNX/icons8-star-48.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </NavLink>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object
}

export default Book;