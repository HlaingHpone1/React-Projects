import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterForm = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState({
        password: "",
        confirmPassword: "",
    });

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value.trim(),
        });
    };

    const showPasswordVisibility = (field) => {
        setShowPassword({
            ...showPassword,
            [field]: !showPassword[field],
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const newErrors = {};

        for (const fieldName in data) {
            if (data[fieldName] == "") {
                newErrors[fieldName] = `${fieldName} is required`;
            }
        }

        if (data.password != data.confirmPassword) {
            newErrors.notSamePassword = "Password aren't same";
        }

        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted:", data);
        }

        setErrors(newErrors);
    };

    return (
        <div>
            <form
                className="min-w-[350px]"
                action=""
                method="POST"
                onSubmit={submitHandler}
            >
                {errors.notSamePassword && (
                    <p className="text-red-700 rounded-lg mt-2">
                        {errors.notSamePassword}
                    </p>
                )}
                <div className="input-box mb-3">
                    <input
                        className={`focus:outline-none bg-transparent border-b-2  focus:border-slate-700 transition-colors duration-200 ease-linear w-full block text-lg px-2 py-2.5 ${errors.name ? "border-red-400" : "border-slate-300"}`}
                        type="text"
                        name="name"
                        id="name"
                        value={data.name}
                        onChange={inputHandler}
                        placeholder="Enter Your Name"
                        autoComplete="off"
                    />
                    {errors.name && (
                        <p className="text-red-700 rounded-lg mt-2">
                            {errors.name}
                        </p>
                    )}
                </div>
                <div className="input-box mb-3">
                    <input
                        className={`focus:outline-none bg-transparent border-b-2  focus:border-slate-700 transition-colors duration-200 ease-linear w-full block text-lg px-2 py-2.5 ${errors.email ? "border-red-400" : "border-slate-300"}`}
                        type="email"
                        name="email"
                        id="email"
                        value={data.email}
                        onChange={inputHandler}
                        placeholder="Enter your Email"
                        autoComplete="off"
                    />
                    {errors.email && (
                        <p className="text-red-700 rounded-lg mt-2">
                            {errors.email}
                        </p>
                    )}
                </div>
                <div className="input-box mb-3">
                    <div
                        className={`flex items-center border-b-2 transition-colors duration-200 ease-linear ${errors.password ? "border-red-400" : "border-slate-300"} focus:border-slate-700`}
                    >
                        <input
                            className={`focus:outline-none bg-transparent  w-full block text-lg px-2 py-2.5 `}
                            type={showPassword.password ? "text" : "password"}
                            name="password"
                            id="password"
                            value={data.password}
                            onChange={inputHandler}
                            placeholder="Enter your Password"
                            autoComplete="off"
                        />
                        <button
                            type="button"
                            onClick={() => showPasswordVisibility("password")}
                        >
                            {showPassword.password ? (
                                <FaEye className="opacity-75" size={20} />
                            ) : (
                                <FaEyeSlash className="opacity-25" size={20} />
                            )}
                        </button>
                    </div>
                    {errors.password && (
                        <p className="text-red-700 rounded-lg mt-2">
                            {errors.password}
                        </p>
                    )}
                </div>
                <div className="input-box mb-3">
                    <div
                        className={`flex items-center border-b-2 focus:border-slate-700 transition-colors duration-200 ease-linear ${errors.confirmPassword ? "border-red-400" : "border-slate-300"}`}
                    >
                        <input
                            className={`focus:outline-none bg-transparent  w-full block text-lg px-2 py-2.5 `}
                            type={
                                showPassword.confirmPassword
                                    ? "text"
                                    : "password"
                            }
                            name="confirmPassword"
                            id="confirmPassword"
                            value={data.confirmPassword}
                            onChange={inputHandler}
                            placeholder="Enter your Password Again"
                            autoComplete="off"
                        />
                        <button
                            type="button"
                            onClick={() =>
                                showPasswordVisibility("confirmPassword")
                            }
                        >
                            {showPassword.confirmPassword ? (
                                <FaEye className="opacity-75" size={20} />
                            ) : (
                                <FaEyeSlash className="opacity-25" size={20} />
                            )}
                        </button>
                    </div>
                    {errors.confirmPassword && (
                        <p className="text-red-700 rounded-lg mt-2">
                            {errors.confirmPassword}
                        </p>
                    )}
                </div>
                <button
                    className="bg-slate-500 text-white px-5 py-2 rounded-md text-lg"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
