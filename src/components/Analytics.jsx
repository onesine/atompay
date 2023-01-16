import { Menu, Transition } from "@headlessui/react";
import { useState } from "react";
import Chart from "react-apexcharts";

import { formatToCurrency } from "../helpers";

const Analytics = ({ balance = 0 }) => {
    const [expenses, setExpenses] = useState({
        value: "45141",
        period: "This week",
        percentage: 57
    });

    const sparkOptions1 = {
        chart: {
            id: "unique-visits",
            group: "sparks2",
            type: "line",
            height: 58,
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                top: 3,
                left: 1,
                blur: 3,
                color: "#009688",
                opacity: 0.7
            }
        },
        stroke: {
            curve: "smooth",
            width: 2
        },
        markers: {
            size: 0
        },
        grid: {
            padding: {
                top: 0,
                bottom: 0,
                left: 0
            }
        },
        colors: ["#009688"],
        tooltip: {
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function formatter() {
                        return "";
                    }
                }
            }
        },
        responsive: [
            {
                breakpoint: 576,
                options: {
                    chart: {
                        height: 95
                    },
                    grid: {
                        padding: {
                            top: 45,
                            bottom: 0,
                            left: 0
                        }
                    }
                }
            }
        ]
    };
    const sparkSeries1 = [
        {
            data: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25]
        }
    ];

    const sparkOptions2 = {
        chart: {
            id: "total-users",
            group: "sparks1",
            type: "line",
            height: 58,
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                top: 1,
                left: 1,
                blur: 2,
                color: "#e2a03f",
                opacity: 0.7
            }
        },
        stroke: {
            curve: "smooth",
            width: 2
        },
        markers: {
            size: 0
        },
        grid: {
            padding: {
                top: 0,
                bottom: 0,
                left: 0
            }
        },
        colors: ["#e2a03f"],
        tooltip: {
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function formatter() {
                        return "";
                    }
                }
            }
        },
        responsive: [
            {
                breakpoint: 576,
                options: {
                    chart: {
                        height: 95
                    },
                    grid: {
                        padding: {
                            top: 35,
                            bottom: 0,
                            left: 0
                        }
                    }
                }
            }
        ]
    };
    const sparkSeries2 = [
        {
            data: [22, 19, 30, 47, 32, 44, 34, 55, 41, 69]
        }
    ];

    return (
        <div className="grid grid-cols-6 gap-8">
            <div className="col-span-6 px-4 py-3 bg-white border rounded-md shadow-xs lg:col-span-2">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg">Statistics</h3>

                    <Menu>
                        <div className="relative">
                            <Menu.Button className="flex items-center justify-center w-12 h-12 text-2xl text-gray-400">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                    />
                                </svg>
                            </Menu.Button>

                            <Transition>
                                <Menu.Items className="absolute z-10 mr-3.5 top-0 mt-9 py-1.5 right-0 text-xs text-gray-700 bg-white border rounded-md w-40">
                                    <Menu.Item>
                                        <a
                                            className="inline-block w-full px-5 py-2 hover:bg-gray-100 hover:text-blue-500"
                                            href="#view-report"
                                        >
                                            View detail
                                        </a>
                                    </Menu.Item>

                                    <Menu.Item>
                                        <a
                                            className="inline-block w-full px-5 py-2 hover:bg-gray-100 hover:text-blue-500"
                                            href="#edit-report"
                                        >
                                            Download
                                        </a>
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </div>
                    </Menu>
                </div>

                <div className="grid grid-cols-2 gap-10">
                    <div className="col-span-1 mt-8">
                        <p className="text-sm font-medium text-gray-600">Total transfer</p>
                        <p className="mt-1 text-xl text-pink-600">338</p>

                        <Chart
                            options={sparkOptions1}
                            series={sparkSeries1}
                            type="line"
                            height={58}
                        />
                    </div>

                    <div className="col-span-1 mt-8">
                        <p className="text-sm font-medium text-gray-600">Total of reception</p>
                        <p className="mt-1 text-xl text-pink-600">393</p>

                        <Chart
                            options={sparkOptions2}
                            series={sparkSeries2}
                            type="line"
                            height={58}
                        />
                    </div>
                </div>
            </div>

            <div className="col-span-6 px-4 py-3 bg-white border rounded-md shadow-xs md:col-span-3 lg:col-span-2">
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl">Expenses</h3>

                    <Menu>
                        <div className="relative">
                            <Menu.Button className="flex items-center justify-center w-12 h-12 text-2xl text-gray-400">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                    />
                                </svg>
                            </Menu.Button>

                            <Transition>
                                <Menu.Items className="absolute z-10 mr-3.5 top-0 mt-9 py-1.5 right-0 text-xs text-gray-700 bg-white border rounded-md w-40">
                                    <Menu.Item>
                                        <a
                                            className="inline-block w-full px-5 py-2 hover:bg-gray-100 hover:text-blue-500"
                                            href="#view-report"
                                            onClick={() => {
                                                setExpenses({
                                                    value: "45141",
                                                    period: "This week",
                                                    percentage: 57
                                                });
                                            }}
                                        >
                                            This Week
                                        </a>
                                    </Menu.Item>

                                    <Menu.Item>
                                        <a
                                            className="inline-block w-full px-5 py-2 hover:bg-gray-100 hover:text-blue-500"
                                            href="#edit-report"
                                            onClick={() => {
                                                setExpenses({
                                                    value: "40000",
                                                    period: "Last week",
                                                    percentage: 45
                                                });
                                            }}
                                        >
                                            Last Week
                                        </a>
                                    </Menu.Item>

                                    <Menu.Item>
                                        <a
                                            className="inline-block w-full px-5 py-2 hover:bg-gray-100 hover:text-blue-500"
                                            href="#edit-report"
                                            onClick={() => {
                                                setExpenses({
                                                    value: "9500",
                                                    period: "Last Month",
                                                    percentage: 27
                                                });
                                            }}
                                        >
                                            Last Month
                                        </a>
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </div>
                    </Menu>
                </div>

                <div className="flex items-end mt-8 space-x-3">
                    <p className="text-4xl font-light text-orange-500 transition-all duration-300">
                        {formatToCurrency(expenses.value)}
                    </p>
                    <div className="flex items-end space-x-1">
                        <p className="text-sm font-bold transition-all duration-300">
                            {expenses.period}
                        </p>
                        <svg
                            className="w-6 h-6 text-green-500 p-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            />
                        </svg>
                    </div>
                </div>

                <div className="flex items-center mt-10 space-x-5">
                    <div className="w-full px-2 py-1 bg-gray-200 rounded-full">
                        <div
                            className="transition-all duration-300 flex items-center justify-end h-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-900"
                            style={{ width: `${expenses.percentage}%` }}
                        >
                            <div className="w-2 h-2 mr-1 bg-white rounded-full" />
                        </div>
                    </div>

                    <p className="font-medium text-orange-500">57%</p>
                </div>
            </div>

            <div className="relative col-span-6 px-4 py-3 overflow-hidden text-white bg-white bg-blue-500 border rounded-md shadow-xs md:col-span-3 lg:col-span-2">
                <div
                    className="absolute z-0 bg-blue-800 rounded-full bg-opacity-50 ml-36"
                    style={{ height: "310px", width: "382px", left: "8%", top: "-45px" }}
                />
                <div className="relative flex justify-between">
                    <h3 className="font-light text-white text-opacity-80">
                        Total balance in your account
                    </h3>
                    <div className="text-right">
                        <p className="text-xl font-light text-white text-opacity-90">
                            {formatToCurrency(balance)}
                        </p>
                        <p className="inline-block px-2 py-1 mt-2 text-sm font-light text-white bg-gray-800 rounded text-opacity-80 bg-opacity-50">
                            + 2453
                        </p>
                    </div>
                </div>

                <div className="relative z-10 flex items-center justify-between mt-24">
                    <div className="space-x-2">
                        <button className="p-1 border border-white rounded focus:outline-none border-opacity-30">
                            <svg
                                className="w-6 h-6 p-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                            </svg>
                        </button>

                        <button className="p-1 border border-white rounded focus:outline-none border-opacity-30">
                            <svg
                                className="w-6 h-6 text-white text-opacity-70"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                />
                            </svg>
                        </button>
                    </div>

                    <p className="text-sm font-light text-white text-opacity-90">Upgrade</p>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
