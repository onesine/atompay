import {useState} from "react";
import {HiEye, HiEyeSlash} from "react-icons/hi2";

export const Input = ({ id = "", type = "text", label = "", placeholder = "" }) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <label htmlFor={id} className="text-sm text-gray-700 font-semibold">
                {label}
            </label>

            <div className="relative">
                <input
                    id={id}
                    type={type === "password" ? (show ? "text" : "password") : type}
                    className={`transition-all duration-300 mt-2 py-2.5 px-4 w-full border-gray-300 rounded-md text-sm placeholder-gray-400 focus:ring focus:border-indigo-500 focus:ring-indigo-500/20 ${
                        type === "password" ? " pr-10" : ""
                    }`}
                    placeholder={placeholder}
                />

                {type === "password" && (
                    <>
                        {show ? (
                            <HiEye
                                onClick={() => setShow(!show)}
                                className="cursor-pointer right-3 top-[1.2rem] text-gray-300 h-5 w-5 absolute"
                            />
                        ) : (
                            <HiEyeSlash
                                onClick={() => setShow(!show)}
                                className="cursor-pointer right-3 top-[1.2rem] text-gray-300 h-5 w-5 absolute"
                            />
                        )}
                    </>
                )}
            </div>
        </>
    );
};

export const Checkbox = ({ id = "", label = "" }) => {
    return (
        <label htmlFor={id} className="space-x-2 inline-block mr-2">
            <input
                id={id}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
                type="checkbox"
            />
            <span className="text-sm cursor-pointer">{label}</span>
        </label>
    );
};