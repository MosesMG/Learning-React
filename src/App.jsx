import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import { Accueil } from "./pages/Accueil"
import { Exemple } from "./pages/Exemple"
import { Navbar } from "./layout/Navbar"
import { Articles } from "./pages/Articles"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '',
                element: <Accueil />,
            },
            {
                path: 'exemple',
                element: <Exemple />,
            },
            {
                path: 'articles',
                element: <Articles />,
                loader: () => fetch('https://jsonplaceholder.typicode.com/posts?_limit=25')
            }
        ]
    }
])

function Root() {
    return <>
        <header>
            <Navbar />
        </header>
        <div className="container my-4">
            <Outlet />
        </div>
    </>
}

function App() {
    return <RouterProvider router={router} />
}

export default App
