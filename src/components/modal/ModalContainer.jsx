import React, {Fragment} from "react";
import {Dialog, Transition} from "@headlessui/react";

const ModalContainer = ({children, isOpen, setIsOpen, clickOutSideToClose = false, size = "md", margin = "yes"}) => {
    const closeModal = () => {
        if (clickOutSideToClose) {
            setIsOpen(true);
        }
    };
    let modalWidth = "w-3/6";
    if (size === "lg") {
        modalWidth = "w-4/6"
    }

    if (size === "xl") {
        modalWidth = "w-5/6"
    }

    if (size === "sm") {
        modalWidth = "w-2/6"
    }

    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog open={isOpen} onClose={closeModal} className="fixed inset-0 z-50 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className={`relative ${modalWidth} mx-auto bg-white rounded ${margin === "yes" ? "mb-56" : ""}`}>
                            {children}
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};

export default ModalContainer;
