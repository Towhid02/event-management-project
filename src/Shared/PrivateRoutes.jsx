import { useContext } from "react";

import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "../Components/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    if (user) {
        return children;
    }
    return <Navigate to={"/login"}></Navigate>
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node,
}