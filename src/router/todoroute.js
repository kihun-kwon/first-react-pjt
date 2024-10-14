import {Suspense, lazy} from "react"

const Loading = <div>Loading....</div>
const ListPage = lazy(()=>import("../pages/ListPage"))

const todoRouter = () => ([
    {
        path:"list",
        element:<Suspense fallback={Loading}><ListPage/></Suspense>
    },
    {
        path:'',
        element:<Navigator replace={true} to={'list'} />
    }
])

export default todoRouter;