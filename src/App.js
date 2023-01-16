import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Auth, Guest } from "./middlewares";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ReloadAccount from "./pages/ReloadAccount";
import ResetPassword from "./pages/ResetPassword";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/login"
                    element={
                        <Guest>
                            <Login />
                        </Guest>
                    }
                />
                <Route
                    path="/register"
                    element={
                        <Guest>
                            <Register />
                        </Guest>
                    }
                />
                <Route
                    path="/forgot-password"
                    element={
                        <Guest>
                            <ForgotPassword />
                        </Guest>
                    }
                />
                <Route
                    path="/reset-password"
                    element={
                        <Guest>
                            <ResetPassword />
                        </Guest>
                    }
                />

                <Route
                    path="/dashboard"
                    element={
                        <Auth>
                            <Dashboard />
                        </Auth>
                    }
                />
                <Route
                    path="/reload-account"
                    element={
                        <Auth>
                            <ReloadAccount />
                        </Auth>
                    }
                />
                <Route path="/*" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default App;
