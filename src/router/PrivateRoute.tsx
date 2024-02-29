import { Outlet, Navigate } from "react-router-dom";
import { ROUTER_PATHS } from "@utils/constants";

export const PrivateRoute = ( fb:boolean, redirect:ROUTER_PATHS, ) =>  fb ? <Outlet /> : <Navigate to={redirect} />;
