import { useSelector } from "react-redux";
import { selectIsLogin } from "redux/auth/authSelector";
import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoute() {
    const isLoggedIn = useSelector(selectIsLogin);
    if (isLoggedIn) {
        return <Navigate to='/users'/>
    }
    return <Outlet />
}