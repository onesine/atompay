import { Navigate } from "react-router-dom";

import config from "../config";

const driver = config.AUTH.DRIVER;
export const Auth = ({ children }) => {
    return driver.getItem("user") ? children : <Navigate to="/login" />;
};

export const Guest = ({ children }) => {
    return !driver.getItem("user") ? children : <Navigate to="/dashboard" />;
};
