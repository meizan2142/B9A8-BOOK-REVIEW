import Hero from "../Component/Hero";
import Book from "../Component/Book";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const bookInfo = useLoaderData()

    return (
        <div  className='lg:w-[1200px] lg:mx-auto text-center m-2'>
            <Hero></Hero>
            <div className="grid lg:grid-cols-3 lg:gap-6 gap-4">
                {
                    bookInfo?.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    )
};

export default Home;