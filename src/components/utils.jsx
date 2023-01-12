import {
    Link as RouterLink
} from "react-router-dom";

export const Link = ({ href = "", children }) => {
    return (
        <RouterLink
            to={href}
            className={"transition-all duration-300 text-sm text-indigo-600 hover:text-indigo-700"}
        >
            {children}
        </RouterLink>
    );
};