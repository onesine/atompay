import { Menu, Transition } from '@headlessui/react'
import {HiChevronRight} from "react-icons/hi";
import {IoMdSync} from "react-icons/io";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {checkUser, formatToCurrency, toast} from "../helpers";
import {Loader} from "./utils";

const TransferForm = () => {
    const defaultMessage = {
        amount: [],
        phoneNumber: []
    };
    const countries = [
        {
            text: "Bénin",
            img: "benin",
        },
        {
            text: "Togo",
            img: "togo",
        },
        {
            text: "Sénégal",
            img: "senegal",
        }
    ];

    const navigate = useNavigate();
    
    const [errorMessage, setErrorMessage] = useState(defaultMessage);
    const [loading, setLoading] = useState(false);
    const [country, setCountry] = useState(countries[0]);
    const [currency, setCurrency] = useState("XOF");
    const [amount, setAmount] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const submit = () => {
        if (!checkUser()) {
            toast("error", "This action requires you to be connected");
            navigate('/login');
        } else {
            setLoading(true);
            setTimeout(() => {
                const newErrorMessage = defaultMessage;
                if (!amount) {
                    newErrorMessage.amount = ["This field is required"]
                }
                if (!phoneNumber) {
                    newErrorMessage.phoneNumber = ["This field is required"];
                }

                if (amount && phoneNumber) {
                    toast("success", "Successful transfer");
                    setAmount("");
                    setCurrency("");
                } else {
                    toast("error", "Transfer failure");
                }
                setErrorMessage(newErrorMessage);

                setLoading(false);
            }, 3000);
        }
    };


    return (
        <>
            <div className="rounded-lg bg-indigo-50 p-4 lg:p-5">
                <div className="flex space-x-3 items-center">
                    <div className="w-2/3 relative">
                        <h6 className="text-sm text-indigo-900">You send</h6>
                        <input
                            type="number"
                            className={`p-0 w-full bg-indigo-50 border-0 border-b-2 ${errorMessage.amount.length ? 'border-red-600 focus:border-red-600' : 'border-gray-300 focus:border-indigo-800'} text-indigo-800 placeholder-indigo-900 placeholder-opacity-80 font-bold text-xl lg:text-2xl focus:ring-0`}
                            placeholder="0,000"
                            value={amount}
                            onChange={e => setAmount(e.target.value)}
                        />
                        {errorMessage.amount.length > 0 && (
                            <p className="absolute text-sm text-red-600">{errorMessage.amount}</p>
                        )}
                    </div>

                    <Menu>
                        {({open}) => (
                            <div className="relative w-1/4 md:w-1/3">
                                <Menu.Button className="w-full shadow-sm flex items-center space-x-2 justify-center text-indigo-900 bg-white py-3 md:py-4 rounded-lg md:text-lg font-bold uppercase font-semibold">
                                    <span>{currency}</span>
                                    <HiChevronRight className={`transition-all duration-300 ${open ? 'rotate-90' : ''} h-6 w-6`}/>
                                </Menu.Button>

                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Menu.Items>
                                        <div className="absolute right-0 z-10 px-2 py-1 mt-1 w-44 text-gray-600 bg-white border rounded-md shadow">
                                            <Menu.Item as={"button"} className="flex items-center space-x-3 px-3 py-2.5 text-sm hover:text-indigo-600">
                                                <span>XOF</span>
                                                <span>FRANC CFA</span>
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </div>
                        )}
                    </Menu>
                </div>
            </div>

            <div className="space-y-3 lg:space-y-5 text-indigo-900">
                <div className="flex items-center space-x-4 text-indigo-600 text-sm">
                    <IoMdSync className="w-5 h-5"/>
                    <span>Show calculations</span>
                </div>

                <div className="flex items-center">
                    <div className="w-1/2">
                        <span>1 XOF = 1 XOF</span>
                    </div>
                    <div className="w-1/2">
                        Currency
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="w-1/2">
                        <span>{formatToCurrency(180)} / {formatToCurrency(parseFloat(amount || 0) + 180)}</span>
                    </div>
                    <div className="w-1/2">
                        TVA / Total
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="w-1/2">
                        <span>{formatToCurrency(parseFloat(amount || 0))}</span>
                    </div>
                    <div className="w-1/2">
                        Recipient gets
                    </div>
                </div>
            </div>

            <div className="rounded-lg bg-indigo-50 p-4 lg:p-5">
                <div className="flex space-x-3 items-center">
                    <div className="w-2/3 relative">
                        <h6 className="text-sm text-indigo-900">Recipient's phone number</h6>
                        <input
                            type="tel"
                            className={`p-0 w-full bg-indigo-50 border-0 border-b-2 ${errorMessage.phoneNumber.length ? 'border-red-600 focus:border-red-600' : 'border-gray-300 focus:border-indigo-800'} text-indigo-800 placeholder-indigo-900 placeholder-opacity-80 font-bold text-xl lg:text-2xl focus:ring-0`}
                            placeholder="68 89 54 89"
                            value={phoneNumber}
                            onChange={e => setPhoneNumber(e.target.value)}
                        />
                        {errorMessage.phoneNumber.length > 0 && (
                            <p className="absolute text-sm text-red-600">{errorMessage.phoneNumber}</p>
                        )}
                    </div>

                    <Menu>
                        {({open}) => (
                            <div className="relative w-1/4 md:w-1/3">
                                <Menu.Button className="w-full shadow-sm flex items-center space-x-2 justify-center text-indigo-900 bg-white py-3 md:py-4 rounded-lg text-lg font-bold uppercase font-semibold">
                                    <img src={`/images/${country.img}.svg`} className="rounded-full h-6 w-6" alt=""/>
                                    <HiChevronRight className={`transition-all duration-300 ${open ? 'rotate-90' : ''} h-6 w-6`}/>
                                </Menu.Button>

                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Menu.Items>
                                        <div className="absolute right-0 z-10 px-2 py-1 mt-1 w-44 text-gray-600 bg-white border rounded-md shadow">
                                            {countries.map((item, index) => (
                                                <Menu.Item key={index} as={"button"} className="flex items-center space-x-3 px-3 py-2 text-sm hover:text-indigo-600" onClick={() => setCountry(item)}>
                                                    <img src={`/images/${item.img}.svg`} className="rounded-full h-5 w-5" alt=""/>
                                                    <span>{item.text}</span>
                                                </Menu.Item>
                                            ))}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </div>
                        )}
                    </Menu>
                </div>
            </div>

            <button onClick={submit} className="w-full flex items-center justify-center space-x-3 transition-all block text-center duration-300 px-3 lg:px-4 xl:px-8 font-medium lg:text-lg py-3 bg-indigo-600 text-white rounded-md focus:outline-none hover:bg-indigo-700 focus:ring focus:border-indigo-500 focus:ring-indigo-500/50">
                {loading && (
                    <Loader color={"white"}/>
                )}
                <span>Get started</span>
            </button>
        </>
    );
};

export default TransferForm;