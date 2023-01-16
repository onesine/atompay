import React from "react";

const ModalFooter = ({children, className = ""}) => {
    return (
        <div className={`flex items-center justify-end px-5 py-3 bg-gray-100 overflow-hidden rounded-b space-x-3 ${className}`}>
            {children}
        </div>
    );
};

export default ModalFooter;
