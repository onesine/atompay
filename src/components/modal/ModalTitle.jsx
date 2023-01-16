import React from "react";

const ModalTitle = ({ children }) => {
    return (
        <div className="px-5 py-2 border-b">
            <h3 className="text-xl text-gray-700">{children}</h3>
        </div>
    );
};

export default ModalTitle;
