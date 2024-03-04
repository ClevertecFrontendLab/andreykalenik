import { Outlet, Navigate } from "react-router-dom";
import { ROUTER_PATHS, TOKEN_ID } from "@utils/constants";



export const PrivateRoute = () =>  localStorage.getItem(TOKEN_ID) ? <Outlet /> : <Navigate to={ROUTER_PATHS.AUTH} />;
