import {useMemo} from "react";

export const PrimaryButton = ({ type = "button", children, as = "button", href = "#" }) => {
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
            className="transition-all duration-300 px-2 w-full font-medium py-3 bg-indigo-600 text-white text-sm rounded-md focus:outline-none hover:bg-indigo-700 focus:ring focus:border-indigo-500 focus:ring-indigo-500/50"
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