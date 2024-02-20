import { Navigate, Outlet } from "react-router-dom"

export const PrivateRouter = () => {
    const auth = true
    return(
        auth ? <Outlet/> : <Navigate to='auth'/>
    )
}