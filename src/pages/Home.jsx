import { useEffect, useState } from "react";
import Hero from "../Component/Hero";
import Book from "../Component/Book";

const Home = () => {
    const [bookInfo, setBookInfo] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(response => response.json())
            .then(data => setBookInfo(data))
    }, [])
    return (
        <div  className='lg:w-[1200px] lg:mx-auto text-center m-2'>
            <Hero></Hero>
            <div className="grid lg:grid-cols-3 lg:gap-6 gap-4">
                {
                    bookInfo.map(books => <Book key={books.bookId} book={books}></Book>)
                }
            </div>
        </div>
    )
};

export default Home;