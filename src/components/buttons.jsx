import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export const PrimaryButton = ({
    type = "button",
    children,
    as = "button",
    href = "#",
    disabled = false,
    ...other
}) => {
    const Tag = as;

    const otherAttributes = useMemo(() => {
        const attributes = {};
        if (as === "button") {
            attributes.type = type;
        }

        if (as === "a") {
            attributes.href = href;
        }

        return attributes;
    }, [as, href, type]);

    return (
        <Tag
            {...otherAttributes}
            {...other}
            className={`flex items-center justify-center space-x-3 transition-all duration-300 px-2 w-full font-medium py-3 ${
                disabled ? "cursor-not-allowed bg-indigo-800" : "bg-indigo-600"
            } text-white text-sm rounded-md focus:outline-none hover:bg-indigo-700 focus:ring focus:border-indigo-500 focus:ring-indigo-500/50`}
        >
            {children}
        </Tag>
    );
};

export const SecondaryButton = ({ type = "button", children, as = "button", href = "#" }) => {
    const Tag = as;

    const otherAttributes = useMemo(() => {
        const attributes = {};
        if (as === "button") {
            attributes.type = type;
        }

        if (as === "a") {
            attributes.href = href;
        }

        return attributes;
    }, [as, href, type]);

    return (
        <Tag
            {...otherAttributes}
            className="transition-all duration-300 px-2 border py-3 rounded-md border-gray-300 w-full flex justify-center items-center space-x-2 hover:bg-gray-300"
        >
            {children}
        </Tag>
    );
};

export const Button = ({
    color = "primary",
    onClick = () => {},
    children,
    disabled = false,
    size = "normal",
    url = null,
    className = ""
}) => {
    const navigate = useNavigate();
    let sizeClass = "py-2";
    if (size === "normal") {
        sizeClass = "py-2";
    }

    if (size === "small") {
        sizeClass = "py-1";
    }

    const gotoLink = () => {
        navigate(url);
    };

    switch (color) {
        case "primary":
            return (
                <button
                    disabled={disabled}
                    className={`${className} flex items-center justify-center space-x-2 ${
                        disabled ? "cursor-not-allowed bg-indigo-800" : "bg-indigo-600"
                    } px-6 ${sizeClass} text-sm text-white transition duration-300 rounded shadow-xl focus:outline-none hover:shadow-none`}
                    onClick={url === null ? onClick : gotoLink}
                >
                    {children}
                </button>
            );
        case "secondary":
            return (
                <button
                    disabled={disabled}
                    className={`${className} flex items-center justify-center space-x-2 ${
                        disabled ? "cursor-not-allowed bg-gray-200" : "bg-white"
                    } px-6 ${sizeClass} text-sm text-indigo-400 transition duration-300 border rounded shadow-xl focus:outline-none hover:shadow-none`}
                    onClick={url === null ? onClick : gotoLink}
                >
                    {children}
                </button>
            );
        case "outline":
            return (
                <button
                    disabled={disabled}
                    className={`${className} flex items-center justify-center space-x-2 ${
                        disabled
                            ? "cursor-not-allowed bg-gray-50"
                            : "bg-white hover:text-white hover:bg-indigo-400"
                    } px-6 ${sizeClass} text-sm text-indigo-400 transition duration-300 border border-indigo-400 rounded shadow-xl focus:outline-none hover:shadow-none`}
                    onClick={url === null ? onClick : gotoLink}
                >
                    {children}
                </button>
            );
        default:
            return (
                <button
                    disabled={disabled}
                    className={`${className} flex items-center justify-center space-x-2 ${
                        disabled ? "cursor-not-allowed bg-indigo-800" : "bg-indigo-600"
                    } px-6 ${sizeClass} text-sm text-white transition duration-300 rounded shadow-xl focus:outline-none hover:shadow-none`}
                    onClick={url === null ? onClick : gotoLink}
                >
                    {children}
                </button>
            );
    }
};
