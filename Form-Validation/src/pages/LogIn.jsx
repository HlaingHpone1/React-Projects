import React from "react";
import LogInForm from "../components/logInForm/LogInForm";
import { Link } from "react-router-dom";

const LogIn = () => {
    return (
        <div className="login__section container">
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white shadow-2xl  px-10 py-14 rounded-lg">
                    <div className="title mb-8 text-3xl font-bold text-center">
                        Log in
                    </div>
                    <LogInForm />
                    <div className="mt-3">
                        <Link className="text-lg font-semibold" to="/register">
                            Create Acc ?
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
