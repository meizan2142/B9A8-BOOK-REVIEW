import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ListedBooks from './pages/ListedBooks.jsx'
import PagesToRead from './pages/PagesToRead.jsx'
import IslamicBooks from './pages/IslamicBooks.jsx'
import EBook from './pages/EBook.jsx'
import MainLayout from './Component/MainLayout.jsx'
import BookDetails from './Component/BookDetails.jsx'


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
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/pagesToRead',
        element: <PagesToRead></PagesToRead>
      },
      {
        path: '/islamicbooks',
        element: <IslamicBooks></IslamicBooks>
      },
      {
        path: '/ebook',
        element: <EBook></EBook>
      },
      {
        path: '/bookdetails/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/blogs.json')
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}></RouterProvider>
  </>,
)
