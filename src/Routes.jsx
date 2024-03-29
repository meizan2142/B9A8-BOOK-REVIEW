import { createBrowserRouter } from "react-router-dom"
import MainLayout from "./Component/MainLayout"
import Home from "./pages/Home"
import ListedBooks from "./pages/ListedBooks"
import PagesToRead from "./pages/PagesToRead"
import BookDetails from "./Component/BookDetails"
import Wishlist from "./Component/Wishlist"
import ReadBooks from "./Component/ReadBooks"
import AboutUs from "./pages/AboutUs"
import Login from "./pages/Login"

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/blogs.json')
            },
            {
                path: '/listedbooks',
                element: <ListedBooks></ListedBooks>,
                children: [
                    {
                        index: true,
                        element: <ReadBooks></ReadBooks>,
                        loader: () => fetch('/blogs.json')
                    },
                    {
                        path: 'wishlistbooks',
                        element: <Wishlist></Wishlist>
                    },
                ],
            },
            {
                path: '/pagesToRead',
                element: <PagesToRead></PagesToRead>
            },
            {
                path: '/aboutus',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/bookdetails/:bookId',
                element: <BookDetails></BookDetails>,
                loader: () => fetch('/blogs.json')
            },
        ]
    },
])
export default router