import PerfectScrollbar from "perfect-scrollbar";
import { useEffect } from "react";

import { PageAnimation } from "../components/utils";

import AdminFooter from "./AdminFooter";
import AdminNav from "./AdminNav";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";

const AdminLayout = props => {
    useEffect(() => {
        const demo = document.querySelector("#scroll-bar", {
            wheelSpeed: 0.5,
            swipeEasing: !0,
            minScrollbarLength: 40,
            maxScrollbarLength: 100,
            suppressScrollY: true
        });
        new PerfectScrollbar(demo);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="fixed z-20 w-full">
                <AdminNav />

                <Navigation path={props.path} />
            </header>

            <div className="fixed top-0 z-10 w-full h-12 mt-24 bg-gradient-to-b from-gray-200" />

            <div className="fixed z-0 w-0 h-screen pt-24 overflow-hidden transition-all duration-500 border-r lg:w-1/6">
                <div id="scroll-bar" className="h-full relative px-4 pt-7 mt-1.5 pb-8">
                    <Sidebar />
                </div>
            </div>

            <div className="flex w-full pt-32">
                <div className="hidden w-1/6 lg:block transition-all duration-500" />
                <div className="w-full lg:w-5/6 px-5 mt-0.5 transition-all duration-500">
                    <PageAnimation>{props.children}</PageAnimation>

                    <AdminFooter />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
