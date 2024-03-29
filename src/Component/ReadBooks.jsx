import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../localStorage";

const ReadBooks = () => {
    const bookInfo = useLoaderData();
    const [callBook, setCallBook] = useState('')
    useEffect(() => {
        const storedBookIds = getStoredReadBook();
        if (bookInfo.length > 0) {
          const booksSelected = [];
          for (const book_id of storedBookIds) {
            const book = bookInfo.find((book) => book.book_id === book_id);
            if (book) {
              booksSelected.push(book);
            }
          }
          setCallBook(booksSelected);
        }
      }, []);
    return (
        // <div>
        //     <div className="bg-base-200 lg:mt-8 mt-5 rounded-xl border-2">
        //         <div className="hero-content flex-col lg:flex-row">
        //             <img src="https://i.ibb.co/vk6ZvNB/Pride-and-Prejudice-png.webp" className="w-40 rounded-lg shadow-2xl" />
        //             <div>
        //                 <h1 className="text-2xl font-bold">bookName</h1>
        //                 <p className="py-6">By : <span className="font-bold">Awlad Hossain</span></p>
        //                 <div className="space-y-5">
        //                     <div className="flex justify-between items-center gap-4">
        //                         <p className="font-bold">Tag</p>
        //                         <p className="btn btn-sm rounded-full text-[#23BE0A] font-bold">#Young Adult</p>
        //                         <p className="btn btn-sm rounded-full text-[#23BE0A] font-bold">#Identity</p>
        //                         <div className="flex items-center gap-2">
        //                             <img className="w-5" src="https://img.icons8.com/?size=48&id=c0kUjxdWTRsk&format=png" alt="" />
        //                             <p>Year of Publishing: <span className="font-bold">1924</span></p>
        //                         </div>
        //                     </div>
        //                     <div className="flex items-center gap-4">
        //                         <div className="flex items-center gap-2">
        //                             <img className="w-5" src="https://img.icons8.com/?size=24&id=vB3C82RDvwwa&format=png" alt="" />
        //                             <p>Publisher: <span className="font-bold">Scribner</span></p>
        //                         </div>
        //                         <div className="flex items-center gap-2">
        //                             <img className="w-5" src="https://img.icons8.com/?size=50&id=11732&format=png" alt="" />
        //                             <p>Page: <span className="font-bold">Scribner</span></p>
        //                         </div>
        //                     </div>
        //                     <div className="space-x-4">
        //                         <p className="btn btn-sm rounded-full text-black bg-[#328eff26] font-bold">Category: Classic</p>
        //                         <p className="btn btn-sm rounded-full text-black bg-[#ffac3326] font-bold">Rating: 4.5</p>
        //                         <p className="btn btn-sm rounded-full text-black bg-[#23BE0A] font-bold">View Details</p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div>
            <p>saif</p>
        </div>
    );
};

export default ReadBooks;