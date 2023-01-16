import {Link, useNavigate} from "react-router-dom";
import {Menu, Transition} from "@headlessui/react";
import {HiBeaker} from "react-icons/hi2";
import {AiOutlineHome} from "react-icons/ai";
import {logout} from "../helpers";

const AdminNav = () => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        logout(navigate);
    };

    return (
        <div className="flex items-center justify-between py-2 pl-6 pr-4 text-white bg-gray-900">
            <div className="flex items-center w-1/2 space-x-16">
                <Link to="/" className="flex items-center space-x-3">
                    <HiBeaker className="w-9 h-9 md:w-12 md:h-12 text-indigo-600" />
                    <div>
                        <p className="inline text-xl md:text-2xl uppercase font-bold leading-[0.5rem]">
                            Atom<span className="font-[300]">Pay</span>
                        </p>
                        <div className="flex items-center space-x-0.5 leading-[0.5rem]">
                                    <span className="text-[0.62rem] font-bold text-indigo-600 uppercase leading-[0.5rem]">
                                        React
                                    </span>
                            <hr className="w-5 border-sky-600" />
                        </div>
                    </div>
                </Link>

                <div className="relative w-2/4 text-white text-opacity-20">
                    <input
                        className="w-full pl-10 text-sm text-white placeholder-white bg-white border-none rounded-md text-opacity-60 placeholder-opacity-50 focus:placeholder-opacity-20 bg-opacity-10 focus:ring-1 focus:ring-white focus:ring-opacity-20"
                        type="text"
                        placeholder="Search..."
                    />

                    <svg className="absolute top-0 w-6 h-6 mt-1.5 ml-2 text-white text-opacity-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                </div>
            </div>

            <div className="flex items-center space-x-5">
                <Menu>
                    <div className="relative">
                        <Menu.Button>
                            <img className="w-5 h-5 mt-1.5" src="/images/ca.png" alt=""/>
                        </Menu.Button>

                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Menu.Items>
                                <div className="absolute right-0 z-10 w-36 px-2 py-1 mt-1 text-gray-600 bg-white border rounded-md shadow">
                                    <Menu.Item>
                                        <Link to={"#french"} className="flex items-center space-x-3 px-4 py-2.5 text-sm hover:bg-gray-100 hover:text-purple-500">
                                            <img className="w-5 h-5" src="/images/fr.png" alt=""/>
                                            <h3>French</h3>
                                        </Link>
                                    </Menu.Item>

                                    <Menu.Item>
                                        <Link to={"#english"} className="flex items-center space-x-3 px-4 py-2.5 text-sm hover:bg-gray-100 hover:text-purple-500">
                                            <img className="w-5 h-5" src="/images/ca.png" alt=""/>
                                            <h3>English</h3>
                                        </Link>
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </div>
                </Menu>

                <Menu>
                    <div className="relative">
                        <Menu.Button className="focus:outline-none">
                            <svg className="w-7 h-7 mt-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        </Menu.Button>

                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Menu.Items>
                                <div className="absolute right-0 z-10 w-56 px-2 py-1 mt-1 text-gray-600 bg-white border rounded-md shadow">
                                    <Menu.Item>
                                        <Link to={"#notif-1"} className="flex items-center justify-between px-3 py-2.5 text-sm hover:text-purple-500">
                                            <div className="flex items-center space-x-2">
                                                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" /></svg>
                                                <div>
                                                    <h3>Server Rebooted</h3>
                                                    <p className="text-gray-400">45 min ago</p>
                                                </div>
                                            </div>

                                            <svg className="w-5 h-5 hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                        </Link>
                                    </Menu.Item>
                                    <hr/>

                                    <Menu.Item>
                                        <Link to={"#notif-2"} className="flex items-center justify-between px-3 py-2.5 text-sm hover:text-purple-500">
                                            <div className="flex items-center space-x-2">
                                                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                                <div>
                                                    <h3>Licence Expiring Soon</h3>
                                                    <p className="text-gray-400">8 hrs ago</p>
                                                </div>
                                            </div>

                                            <svg className="w-5 h-5 hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                        </Link>
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </div>
                </Menu>

                <Menu>
                    <div className="relative">
                        <Menu.Button className="focus:outline-none">
                            <img className="w-8 h-8 rounded-md" src="/images/avatar.jpeg" alt=""/>
                        </Menu.Button>


                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Menu.Items>
                                <div className="absolute right-0 z-10 w-48 px-2 py-1 mt-1 text-gray-600 bg-white border rounded-md shadow">
                                    <Menu.Item>
                                        <Link to={"/"} className="flex items-center space-x-3 px-3 py-2.5 text-sm hover:text-purple-500">
                                            <AiOutlineHome className="h-5 w-5"/>
                                            <span>Lending Page</span>
                                        </Link>
                                    </Menu.Item>
                                    <hr/>

                                    <Menu.Item>
                                        <Link to={"#profile"} className="flex items-center space-x-3 px-3 py-2.5 text-sm hover:text-purple-500">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                            <span>Profile</span>
                                        </Link>
                                    </Menu.Item>
                                    <hr/>

                                    <Menu.Item>
                                        <a href={"/logout"} className="flex items-center space-x-3 px-3 py-2.5 text-sm hover:text-purple-500" onClick={handleClick}>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                                            <span>Logout</span>
                                        </a>
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </div>
                </Menu>
            </div>
        </div>
    );
};

export default AdminNav;