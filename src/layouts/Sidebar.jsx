import {NavLink} from "react-router-dom";
import {scrollTop} from "../helpers";
import {HiOutlineHome} from "react-icons/hi";
import {TfiReload} from "react-icons/tfi";

const Sidebar = () => {

    const handleClickLink = () => {
        scrollTop()
    };


    const getActiveClassByLink = (link) => {
        return {
            isActive: window.location.pathname === link,
            class: window.location.pathname === link ? ' text-white shadow bg-indigo-600' : ''
        }
    };

    const getLinkClass = (link) => {
        return `transition-all duration-300 flex items-center space-x-3 px-2.5 py-3 transition duration-300 rounded-md ${getActiveClassByLink(link).isActive ? '' : 'hover:bg-gray-200 hover:shadow'}${getActiveClassByLink(link).class}`;
    };

    return (
        <ul className="text-sm font-medium text-gray-500 space-y-2">
            <li>
                <NavLink
                    onClick={handleClickLink}
                    className={getLinkClass("/dashboard")}
                    to="/dashboard"
                >
                    <HiOutlineHome className="h-6 w-6"/>
                    <span>Dashboard</span>
                </NavLink>
            </li>

            <li>
                <NavLink
                    onClick={handleClickLink}
                    className={getLinkClass("/reload-account")}
                    to="/reload-account"
                >
                    <TfiReload className="w-6 h-6"/>
                    <span>Reload Account</span>
                </NavLink>
            </li>
        </ul>
    );
};

export default Sidebar;