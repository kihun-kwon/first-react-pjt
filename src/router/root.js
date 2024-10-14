import {Suspense, lazy} from "react"

import {createBrowserRouter} from "react-router-dom";

const Loading = <div>Loading....</div>
const Main = lazy(()=>import("../pages/MainPage"))
const About = lazy(()=>import("../pages/AboutPage"))
const Todo = lazy(()=>import("../pages/Todo"))
const ListPage = lazy(()=>import("../pages/ListPage"))

const root = createBrowserRouter([
    {
        path:"",
        element:<Suspense fallback={Loading}><Main/></Suspense>
    },
    {
        path:"about",
        element:<Suspense fallback={Loading}><About/></Suspense>
    },
    {
        path:"todo",
        element:<Suspense fallback={Loading}><Todo/></Suspense>,
        children:[
            {
                path:"list",
                element:<Suspense fallback={Loading}><ListPage/></Suspense>
            }
        ]
    }
])

export default root;