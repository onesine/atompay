import React, {useEffect} from "react";
import Chart from "react-apexcharts";
import {Menu, Transition} from "@headlessui/react";
import PerfectScrollbar from "perfect-scrollbar";
import AdminLayout from "../layouts/AdminLayout";
import {formatToCurrency} from "../helpers";
import {BsCashCoin} from "react-icons/bs";
import {FcMoneyTransfer} from "react-icons/fc";

const Dashboard = () => {
    useEffect(() => {
        document.getElementsByClassName('apexcharts-legend-series')[0].style.marginRight = "20px";
        const demo = document.querySelector('#scroll-sal-bar', {
            wheelSpeed: 0.5,
            swipeEasing:!0,
            minScrollbarLength:40,
            maxScrollbarLength:100,
            suppressScrollY: true

        });
        new PerfectScrollbar(demo);
    }, []);

    const options = {
        chart: {
            height: 160,
            type: 'bar',
            stacked: true,
            stackType: '100%',
            toolbar: {
                show: false,
            }
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 1,
        },
        colors: ['#e2a03f', '#e0e6ed'],
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        xaxis: {
            labels: {
                show: false,
            },
            categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
        },
        yaxis: {
            show: false
        },
        fill: {
            opacity: 1
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '25%',

            }
        },
        legend: {
            show: false,
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            padding: {
                top: 10,
                right: 0,
                bottom: -40,
                left: 0
            },
        },
    };
    const series = [
        {
            name: 'Tfransfer',
            data: [44, 55, 41, 67, 22, 43, 21]
        },
        {
            name: 'Last Week',
            data: [13, 23, 20, 8, 13, 27, 33]
        }
    ];

    const optionsTwo = {
        chart: {
            id: 'sparkline1',
            group: 'sparklines',
            type: 'area',
            height: 295,
            sparkline: {
                enabled: true
            },
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        yaxis: {
            min: 0
        },
        grid: {
            padding: {
                top: 125,
                right: 0,
                bottom: 0,
                left: 0
            },
        },
        fill: {
            type:"gradient",
            gradient: {
                type: "vertical",
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: .40,
                opacityTo: .05,
                stops: [45, 100]
            }
        },
        tooltip: {
            x: {
                show: false,
            },
            theme: 'dark'
        },
        colors: ['#fff']
    };
    const seriesTwo = [
        {
            name: 'Reception',
            data: [28, 40, 36, 52, 38, 60, 38, 52, 36, 40]
        }
    ];

    const optionsThree = {
        chart: {
            fontFamily: 'Nunito, sans-serif',
            height: 365,
            type: 'area',
            zoom: {
                enabled: false
            },
            dropShadow: {
                enabled: true,
                opacity: 0.2,
                blur: 10,
                left: -7,
                top: 22
            },
            toolbar: {
                show: false
            },
            events: {
                mounted: function(ctx, config) {
                    const highest1 = ctx.getHighestValueInSeries(0);
                    const highest2 = ctx.getHighestValueInSeries(1);

                    ctx.addPointAnnotation({
                        x: new Date(ctx.w.globals.seriesX[0][ctx.w.globals.series[0].indexOf(highest1)]).getTime(),
                        y: highest1,
                        label: {
                            style: {
                                cssClass: 'd-none'
                            }
                        },
                        customSVG: {
                            SVG: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#1b55e2" stroke="#fff" strokeWidth="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg>',
                            cssClass: undefined,
                            offsetX: -8,
                            offsetY: 5
                        }
                    })

                    ctx.addPointAnnotation({
                        x: new Date(ctx.w.globals.seriesX[1][ctx.w.globals.series[1].indexOf(highest2)]).getTime(),
                        y: highest2,
                        label: {
                            style: {
                                cssClass: 'd-none'
                            }
                        },
                        customSVG: {
                            SVG: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#e7515a" stroke="#fff" strokeWidth="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg>',
                            cssClass: undefined,
                            offsetX: -8,
                            offsetY: 5
                        }
                    })
                },
            }
        },
        colors: ['#1b55e2', '#e7515a'],
        dataLabels: {
            enabled: false
        },
        markers: {
            discrete: [{
                seriesIndex: 0,
                dataPointIndex: 7,
                fillColor: '#000',
                strokeColor: '#000',
                size: 5
            }, {
                seriesIndex: 2,
                dataPointIndex: 11,
                fillColor: '#000',
                strokeColor: '#000',
                size: 4
            }]
        },
        subtitle: {
            text: '//',
            align: 'left',
            margin: 0,
            offsetX: 95,
            offsetY: 0,
            floating: false,
            style: {
                fontSize: '18px',
                color:  '#4361ee'
            }
        },
        title: {
            text: 'Evolution',
            align: 'left',
            margin: 0,
            offsetX: -10,
            offsetY: 0,
            floating: false,
            style: {
                fontSize: '18px',
                color:  '#6B7280',
                fontWeight: '300',
            }
        },
        stroke: {
            show: true,
            curve: 'smooth',
            width: 2,
            lineCap: 'square'
        },
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        xaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            crosshairs: {
                show: true
            },
            labels: {
                offsetX: 0,
                offsetY: 5,
                style: {
                    fontSize: '12px',
                    fontFamily: 'Nunito, sans-serif',
                    cssClass: 'apexcharts-xaxis-title',
                },
            }
        },
        yaxis: {
            labels: {
                formatter: function(value) {
                    return parseInt((value / 1000)) + 'K'
                },
                offsetX: -17,
                offsetY: 0,
                style: {
                    fontSize: '12px',
                    fontFamily: 'Nunito, sans-serif',
                    cssClass: 'apexcharts-yaxis-title',
                },
            }
        },
        grid: {
            borderColor: '#e0e6ed',
            strokeDashArray: 5,
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: false,
                }
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: -10
            },
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            offsetY: -50,
            fontSize: '16px',
            fontFamily: 'Nunito, sans-serif',
            markers: {
                width: 10,
                height: 10,
                strokeWidth: 0,
                strokeColor: '#fff',
                fillColors: undefined,
                radius: 12,
                onClick: undefined,
                offsetX: 0,
                offsetY: 0
            },
            itemMargin: {
                horizontal: 0,
                vertical: 20
            }
        },
        tooltip: {
            theme: 'dark',
            marker: {
                show: true,
            },
            x: {
                show: false,
            }
        },
        fill: {
            type:"gradient",
            gradient: {
                type: "vertical",
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: .28,
                opacityTo: .05,
                stops: [45, 100]
            }
        },
        responsive: [{
            breakpoint: 575,
            options: {
                legend: {
                    offsetY: -30,
                },
            },
        }]
    };
    const seriesThree = [
        {
            name: 'Transfer',
            data: [16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000, 17000, 14000, 17000]
        }, {
            name: 'Reception',
            data: [16500, 17500, 16200, 17300, 16000, 19500, 16000, 17000, 16000, 19000, 18000, 19000]
        }
    ];

    const optionsFour = {
        chart: {
            type: 'donut',
            width: 400
        },
        colors: ['#e2a03f', '#5c1ac3', '#e7515a'],
        labels: ['Bénin', 'Togo', 'Sénégal'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 20,
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
            fontSize: '14px',
            markers: {
                width: 10,
                height: 10,
            },
            itemMargin: {
                horizontal: 0,
                vertical: 18
            }
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '65%',
                    background: 'transparent',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '29px',
                            fontFamily: 'Nunito, sans-serif',
                            color: undefined,
                            offsetY: -10
                        },
                        value: {
                            show: true,
                            fontSize: '26px',
                            fontFamily: 'Nunito, sans-serif',
                            color: '20',
                            offsetY: 16,
                            formatter: function (val) {
                                return val
                            }
                        },
                        total: {
                            show: true,
                            showAlways: true,
                            label: 'Total',
                            color: '#888ea8',
                            formatter: function (w) {
                                return w.globals.seriesTotals.reduce( function(a, b) {
                                    return a + b
                                }, 0)
                            }
                        }
                    }
                }
            }
        },
    };
    const seriesFour = [985, 737, 270];

    return (
        <AdminLayout>
            <div className="grid grid-cols-6 gap-8">
                <div className="col-span-6 pt-3 bg-white border rounded-md shadow-xs lg:col-span-2 md:col-span-3">
                    <div className="flex items-center justify-between px-4">
                        <div>
                            <h3 className="text-lg">Daily money transfer</h3>
                            <p className="text-sm text-gray-400">Go to columns for details.</p>
                        </div>
                        <div className="flex items-center justify-center w-12 h-12 text-2xl rounded-full text-amber-500 bg-amber-100">
                            <FcMoneyTransfer className="w-6 h-6"/>
                        </div>
                    </div>

                    <div id="chart" className="text-gray-400 mt-14">
                        <Chart options={options} series={series} type="bar" height={160}/>
                    </div>
                </div>

                <div className="col-span-6 px-4 py-3 bg-white border rounded-md shadow-xs lg:col-span-2 md:col-span-3">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg">Summary</h3>

                        <Menu>
                            <div className="relative">
                                <Menu.Button className="flex items-center justify-center w-12 h-12 text-2xl text-gray-400">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
                                </Menu.Button>

                                <Transition>
                                    <Menu.Items className="absolute mr-3.5 top-0 mt-9 py-1.5 right-0 text-xs text-gray-700 bg-white border rounded-md w-40">
                                        <Menu.Item>
                                            <a className="inline-block w-full px-5 py-2 hover:bg-gray-100 hover:text-blue-500" href="#view-report">
                                                View Report
                                            </a>
                                        </Menu.Item>

                                        <Menu.Item>
                                            <a className="inline-block w-full px-5 py-2 hover:bg-gray-100 hover:text-blue-500" href="#edit-report">
                                                Edit Report
                                            </a>
                                        </Menu.Item>

                                        <Menu.Item>
                                            <a className="inline-block w-full px-5 py-2 hover:bg-gray-100 hover:text-blue-500" href="#mark-as-done">
                                                Mark as Done
                                            </a>
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </div>
                        </Menu>
                    </div>

                    <div className="mt-12 space-y-6">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center justify-center w-10 h-10 text-purple-500 bg-gray-200 rounded-full">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center justify-between text-sm text-gray-400 mb-0.5">
                                    <span>Income</span>
                                    <span>{formatToCurrency(92600)}</span>
                                </div>

                                <div className="w-full h-1.5 bg-gray-200 rounded-full shadow-sm">
                                    <div className="h-full rounded-full shadow-sm bg-gradient-to-r from-fuchsia-400 to-purple-500" style={{width: "90%"}}/>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="flex items-center justify-center w-10 h-10 text-green-600 bg-green-100 rounded-full">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center justify-between text-sm text-gray-400 mb-0.5">
                                    <span>Profit</span>
                                    <span>{formatToCurrency(37515)}</span>
                                </div>

                                <div className="w-full h-1.5 bg-gray-200 rounded-full shadow-sm">
                                    <div className="h-full rounded-full shadow-sm bg-gradient-to-r from-green-600 to-cyan-300" style={{width: "65%"}}/>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="flex items-center justify-center w-10 h-10 text-orange-300 bg-orange-100 rounded-full">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center justify-between text-sm text-gray-400 mb-0.5">
                                    <span>Expenses</span>
                                    <span>{formatToCurrency(55085)}</span>
                                </div>

                                <div className="w-full h-1.5 bg-gray-200 rounded-full shadow-sm">
                                    <div className="h-full rounded-full shadow-sm bg-gradient-to-r from-red-500 to-orange-500" style={{width: "80%"}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-6 pt-6 bg-white bg-purple-500 border rounded-md shadow-xs lg:col-span-2 md:col-span-6">
                    <div className="flex items-center justify-between px-4">
                        <div className="flex items-center justify-center w-12 h-12 text-purple-600 bg-gray-200 rounded-xl">
                            <BsCashCoin className="w-6 h-6"/>
                        </div>
                        <div className="text-right text-white text-opacity-90">
                            <h2 className="text-2xl">420</h2>
                            <p className="mt-2 text-sm">Total Total money received</p>
                        </div>
                    </div>

                    <div id="chart" className="mt-10 -mt-20 overflow-hidden text-gray-400">
                        <Chart options={optionsTwo} series={seriesTwo} type="area" height={295}/>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-8">
                <div className="col-span-3 px-4 py-3 bg-white border rounded-md shadow-xs lg:col-span-2">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg">Transfer and reception</h3>
                        <Menu>
                            <div className="relative">
                                <Menu.Button className="flex items-center justify-center w-12 h-12 text-2xl text-gray-400">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
                                </Menu.Button>

                                <Transition>
                                    <Menu.Items className="absolute z-10 mr-3.5 top-0 mt-9 py-1.5 right-0 text-xs text-gray-700 bg-white border rounded-md w-40">
                                        <Menu.Item>
                                            <a className="inline-block w-full px-5 py-2 hover:bg-gray-100 hover:text-blue-500" href="#view-report">
                                                View Report
                                            </a>
                                        </Menu.Item>

                                        <Menu.Item>
                                            <a className="inline-block w-full px-5 py-2 hover:bg-gray-100 hover:text-blue-500" href="#edit-report">
                                                Edit Report
                                            </a>
                                        </Menu.Item>

                                        <Menu.Item>
                                            <a className="inline-block w-full px-5 py-2 hover:bg-gray-100 hover:text-blue-500" href="#mark-as-done">
                                                Mark as Done
                                            </a>
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </div>
                        </Menu>
                    </div>

                    <div id="chart" className="mt-3 text-gray-500 space-y-6">
                        <Chart options={optionsThree} series={seriesThree} type="area" height={365}/>
                    </div>
                </div>

                <div className="col-span-3 px-4 pt-6 bg-white border rounded-md shadow-xs lg:col-span-1">
                    <h3 className="text-lg">Transfer by country</h3>

                    <div id="chart" className="pt-8 overflow-hidden text-gray-400" style={{minHeight: "390px"}}>
                        <Chart options={optionsFour} series={seriesFour} type="donut" height={400}/>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-6 gap-8 mt-8">
                <div className="col-span-6 px-4 py-3 bg-white border rounded-md shadow-xs lg:col-span-2">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg">Transactions</h3>
                        <Menu>
                            <div className="relative">
                                <Menu.Button className="flex items-center justify-center w-12 h-12 text-2xl text-gray-400">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
                                </Menu.Button>

                                <Transition>
                                    <Menu.Items className="absolute mr-3.5 top-0 mt-9 py-1.5 right-0 text-xs text-gray-700 bg-white border rounded-md w-40">
                                        <Menu.Item>
                                            <a className="inline-block w-full px-5 py-2 hover:bg-gray-100 hover:text-blue-500" href="#view-report">
                                                View Report
                                            </a>
                                        </Menu.Item>

                                        <Menu.Item>
                                            <a className="inline-block w-full px-5 py-2 hover:bg-gray-100 hover:text-blue-500" href="#edit-report">
                                                Edit Report
                                            </a>
                                        </Menu.Item>

                                        <Menu.Item>
                                            <a className="inline-block w-full px-5 py-2 hover:bg-gray-100 hover:text-blue-500" href="#mark-as-done">
                                                Mark as Done
                                            </a>
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </div>
                        </Menu>
                    </div>

                    <div className="mt-3 text-gray-500 space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="flex items-center justify-center w-10 h-10 p-2 text-blue-600 bg-blue-100 rounded-lg">SP</div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-700">Shaun Park</h4>
                                    <p className="text-xs font-light">10 Jan 1:00PM</p>
                                </div>
                            </div>

                            <p className="font-light text-green-600">+{formatToCurrency(3611)}</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <svg className="justify-center w-10 h-10 p-2 text-orange-400 bg-orange-100 rounded-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-700">Electricity Bill</h4>
                                    <p className="text-xs font-light">04 Jan 1:00PM</p>
                                </div>
                            </div>

                            <p className="font-light text-red-600">-{formatToCurrency(1644)}</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="flex items-center justify-center w-10 h-10 p-2 text-red-500 bg-red-100 rounded-lg">AD</div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-700">Amy Diaz</h4>
                                    <p className="text-xs font-light">31 Jan 1:00PM</p>
                                </div>
                            </div>

                            <p className="font-light text-green-600">+{formatToCurrency(6644)}</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <svg className="justify-center w-10 h-10 p-2 text-purple-400 bg-purple-200 rounded-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-700">Netflix</h4>
                                    <p className="text-xs font-light">02 Feb 1:00PM</p>
                                </div>
                            </div>

                            <p className="font-light text-red-600">-{formatToCurrency(3200)}</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="flex items-center justify-center w-10 h-10 p-2 text-blue-500 bg-blue-100 rounded-lg">DA</div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-700">Daisy Anderson</h4>
                                    <p className="text-xs font-light">15 Feb 1:00PM</p>
                                </div>
                            </div>

                            <p className="font-light text-green-600">+{formatToCurrency(1008)}</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="flex items-center justify-center w-10 h-10 p-2 text-red-500 bg-red-100 rounded-lg">OG</div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-700">Oscar Garner</h4>
                                    <p className="text-xs font-light">20 Feb 1:00PM</p>
                                </div>
                            </div>

                            <p className="font-light text-red-500">-{formatToCurrency(22.00)}</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-6 px-4 py-3 bg-white border rounded-md shadow-xs md:col-span-3 lg:col-span-2">
                    <h3 className="text-lg">Recent Activities</h3>

                    <div className="mt-3 text-gray-500 space-y-5">
                        <div id="scroll-sal-bar" className="space-y-5 relative max-h-96">
                            <div className="flex items-center justify-between">
                                <div className="flex space-x-2">
                                    <div className="w-1.5 h-1.5 mt-2 text-blue-600 bg-blue-500 rounded-lg flex items-center justify-center"/>
                                    <p className="text-sm text-gray-600">Updated Server Logs</p>
                                </div>

                                <p className="text-xs font-light text-gray-400">Just Now</p>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex space-x-2">
                                    <div className="w-1.5 h-1.5 mt-2 bg-green-500 rounded-lg flex items-center justify-center"/>
                                    <p className="text-sm text-gray-600">Send email to <span className="text-green-500">HR</span> and <span className="text-green-500">Admin</span></p>
                                </div>

                                <p className="text-xs font-light text-gray-400">2 min ago</p>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex space-x-2">
                                    <div className="w-1.5 h-1.5 mt-2 bg-red-500 rounded-lg flex items-center justify-center"/>
                                    <p className="text-sm text-gray-600">Backup Files EOD</p>
                                </div>

                                <p className="text-xs font-light text-gray-400">14:00</p>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex space-x-2">
                                    <div className="w-1.5 h-1.5 mt-2 bg-gray-700 rounded-lg flex items-center justify-center"/>
                                    <p className="text-sm text-gray-600">Collect documents from <span className="text-green-500">Sara</span></p>
                                </div>

                                <p className="text-xs font-light text-gray-400">16:00</p>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex space-x-2">
                                    <div className="w-1.5 h-1.5 mt-2 bg-yellow-500 rounded-lg flex items-center justify-center"/>
                                    <p className="text-sm text-gray-600">Conference call with <br/> <span className="text-green-500">Marketing Manager</span>.</p>
                                </div>

                                <p className="text-xs font-light text-gray-400">17:00</p>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex space-x-2">
                                    <div className="w-1.5 h-1.5 mt-2 bg-purple-500 rounded-lg flex items-center justify-center"/>
                                    <p className="text-sm text-gray-600">Rebooted Server</p>
                                </div>

                                <p className="text-xs font-light text-gray-400">17:00</p>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex space-x-2">
                                    <div className="w-1.5 h-1.5 mt-2 bg-yellow-500 rounded-lg flex items-center justify-center"/>
                                    <p className="text-sm text-gray-600">Send contract details to <br/> Freelancer</p>
                                </div>

                                <p className="text-xs font-light text-gray-400">18:00</p>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex space-x-2">
                                    <div className="w-1.5 h-1.5 mt-2 bg-gray-700 rounded-lg flex items-center justify-center"/>
                                    <p className="text-sm text-gray-600">Kelly want to increase the time of <br/> the project.</p>
                                </div>

                                <p className="text-xs font-light text-gray-400">19:00</p>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex space-x-2">
                                    <div className="w-1.5 h-1.5 mt-2 bg-gray-700 rounded-lg flex items-center justify-center"/>
                                    <p className="text-sm text-gray-600">Kelly want to increase the time of <br/> the project.</p>
                                </div>

                                <p className="text-xs font-light text-gray-400">19:00</p>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex space-x-2">
                                    <div className="w-1.5 h-1.5 mt-2 bg-gray-700 rounded-lg flex items-center justify-center"/>
                                    <p className="text-sm text-gray-600">Kelly want to increase the time of <br/> the project.</p>
                                </div>

                                <p className="text-xs font-light text-gray-400">19:00</p>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex space-x-2">
                                    <div className="w-1.5 h-1.5 mt-2 bg-gray-700 rounded-lg flex items-center justify-center"/>
                                    <p className="text-sm text-gray-600">Kelly want to increase the time of <br/> the project.</p>
                                </div>

                                <p className="text-xs font-light text-gray-400">19:00</p>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex space-x-2">
                                    <div className="w-1.5 h-1.5 mt-2 bg-gray-700 rounded-lg flex items-center justify-center"/>
                                    <p className="text-sm text-gray-600">Kelly want to increase the time of <br/> the project.</p>
                                </div>

                                <p className="text-xs font-light text-gray-400">19:00</p>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex space-x-2">
                                    <div className="w-1.5 h-1.5 mt-2 bg-gray-700 rounded-lg flex items-center justify-center"/>
                                    <p className="text-sm text-gray-600">Kelly want to increase the time of <br/> the project.</p>
                                </div>

                                <p className="text-xs font-light text-gray-400">19:00</p>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex space-x-2">
                                    <div className="w-1.5 h-1.5 mt-2 bg-gray-700 rounded-lg flex items-center justify-center"/>
                                    <p className="text-sm text-gray-600">Kelly want to increase the time of <br/> the project.</p>
                                </div>

                                <p className="text-xs font-light text-gray-400">19:00</p>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex space-x-2">
                                    <div className="w-1.5 h-1.5 mt-2 bg-gray-700 rounded-lg flex items-center justify-center"/>
                                    <p className="text-sm text-gray-600">Kelly want to increase the time of <br/> the project.</p>
                                </div>

                                <p className="text-xs font-light text-gray-400">19:00</p>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex space-x-2">
                                    <div className="w-1.5 h-1.5 mt-2 bg-gray-700 rounded-lg flex items-center justify-center"/>
                                    <p className="text-sm text-gray-600">Kelly want to increase the time of <br/> the project.</p>
                                </div>

                                <p className="text-xs font-light text-gray-400">19:00</p>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex space-x-2">
                                    <div className="w-1.5 h-1.5 mt-2 bg-gray-700 rounded-lg flex items-center justify-center"/>
                                    <p className="text-sm text-gray-600">Kelly want to increase the time of <br/> the project.</p>
                                </div>

                                <p className="text-xs font-light text-gray-400">19:00</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <button className="flex items-center text-sm font-medium text-gray-700 space-x-2 focus:outline-none hover:outline-none group">
                                <span className="transition-all duration-300 ease-out transform group-hover:-translate-x-1">View All</span>
                                <svg className="w-6 h-6 pr-2 text-gray-300 transition-all duration-300 ease-out transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-span-6 overflow-hidden bg-white border shadow-xs rounded-t-2xl rounded-b-md md:col-span-3 lg:col-span-2">
                    <div className="py-4 text-white px-7 bg-gradient-to-r from-blue-500 to-blue-900 rounded-2xl">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center p-1 bg-gray-900 rounded-full bg-opacity-50 space-x-1.5">
                                <img
                                    className="w-8 h-8 rounded-full p-0.5 bg-opacity-30 bg-white"
                                    src="/images/avatar.jpeg" alt=""
                                />
                                <h4 className="pr-2 text-xs text-white text-opacity-700">Alan Green</h4>
                            </div>

                            <div className="flex items-center justify-center w-10 h-10 bg-gray-900 bg-opacity-50 rounded-xl">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                            </div>
                        </div>

                        <div className="flex items-end justify-between mt-8 mb-20">
                            <h4 className="text-xl text-white text-opacity-90">Total balance</h4>

                            <h2 className="text-4xl font-light text-white text-opacity-40"><span className="text-white text-opacity-80">10,840</span> FCFA</h2>
                        </div>
                    </div>

                    <div className="pb-5 -mt-10 px-7">
                        <div className="grid grid-cols-2 gap-5">
                            <div className="px-5 py-3 bg-white border rounded-md shadow-lg border-opacity-30">
                                <div className="flex items-center space-x-3">
                                    <span className="text-sm">Transfer</span>
                                    <svg className="w-6 h-6 p-0.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                                </div>

                                <div className="bg-gray-200 rounded-md px-2 py-0.5 text-center mt-2.5 font-medium text-gray-600 border border-opacity-30">
                                    {formatToCurrency(9799)}
                                </div>
                            </div>

                            <div className="px-5 py-3 bg-white border rounded-md shadow-lg border-opacity-30">
                                <div className="flex items-center space-x-3">
                                    <span className="text-sm">Reception</span>
                                    <svg className="w-6 h-6 p-0.5 transform rotate-180 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                                </div>

                                <div className="bg-gray-200 rounded-md px-2 py-0.5 text-center mt-2.5 font-medium text-gray-600 border border-opacity-30">
                                    {formatToCurrency(5300)}
                                </div>
                            </div>
                        </div>

                        <div className="inline-block">
                            <div className="flex items-center flex-grow-0 px-3 py-1 mt-5 text-white bg-gray-900 rounded-full bg-opacity-80 space-x-2">
                                <div className="w-2 h-2 bg-white rounded-full"/>
                                <p className="text-xs">Pending</p>
                            </div>
                        </div>

                        <div className="mt-5 text-sm space-y-1">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">Bénin</span>
                                <h4><span className="font-medium">1385</span> <span className="text-lg text-gray-400">FCFA</span></h4>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">Togo</span>
                                <h4><span className="font-medium">1566</span> <span className="text-lg text-gray-400">FCFA</span></h4>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">Sénégal</span>
                                <h4><span className="font-medium">2566</span> <span className="text-lg text-gray-400">FCFA</span></h4>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-5 mt-5 text-sm">
                            <button className="bg-purple-200 border border-gray-300 border-opacity-30 text-purple-500 rounded py-1.5 focus:outline-none hover:outline-none hover:shadow-lg transition duration-300">
                                View Details
                            </button>

                            <button className="bg-green-100 text-green-600 rounded py-1.5 focus:outline-none hover:outline-none hover:shadow-lg transition duration-300">
                                Request Money
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-8">
                <div className="col-span-2 px-4 py-3 bg-white border rounded-md shadow-xs lg:col-span-1">
                    <h3 className="text-lg">Recent transfers</h3>

                    <div className="mt-8 text-gray-500 space-y-5">
                        <table className="w-full">
                            <thead>
                            <tr className="text-gray-600">
                                <th className="py-2 pl-5 text-sm font-normal text-left bg-blue-50">ID</th>
                                <th className="py-2 pl-5 text-sm font-normal text-left bg-blue-50 rounded-l-md">
                                    <span className="ml-3">Customer</span>
                                </th>
                                <th className="py-2 pl-5 text-sm font-normal text-left bg-blue-50">Date</th>
                                <th className="py-2 pl-5 text-sm font-normal text-left bg-blue-50">Amount</th>
                                <th className="py-2 pl-5 text-sm font-normal text-left bg-blue-50 rounded-r-md">Status</th>
                            </tr>
                            </thead>
                            <tbody className="text-sm">
                            <tr className="transform text-gray-400 hover:text-gray-600 hover:-translate-y-0.5 transition duration-300 cursor-pointer">
                                <td className="py-3.5 text-left">#46894</td>
                                <td className="py-3.5 pl-5 text-left">
                                    <div className="flex items-center space-x-3">
                                        <img className="w-8 h-8 rounded-md" src="/images/ro-1.jpeg" alt=""/>
                                        <span className="text-gray-700">Luke Ivory</span>
                                    </div>
                                </td>
                                <td className="py-3.5 text-left">
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 p-0.5 text-green-500" fill="#D1FAE5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                        <span className="font-light">12 Jan 2023</span>
                                    </div>
                                </td>
                                <td className="py-3.5 text-left">{formatToCurrency(8500)}</td>
                                <td className="py-3.5 pl-5 text-left">
                                    <span className="px-1.5 py-1 text-xs text-white font-medium bg-green-500 rounded shadow-lg text-opacity-70">Success</span>
                                </td>
                            </tr>

                            <tr className="transform text-gray-400 hover:text-gray-600 hover:-translate-y-0.5 transition duration-300 cursor-pointer">
                                <td className="py-3.5 text-left">#46894</td>
                                <td className="py-3.5 pl-5 text-left">
                                    <div className="flex items-center space-x-3">
                                        <img className="w-8 h-8 rounded-md" src="/images/ro-2.jpeg" alt=""/>
                                        <span className="text-gray-700">Andy King</span>
                                    </div>
                                </td>
                                <td className="py-3.5 text-left">
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 p-0.5 text-green-500" fill="#D1FAE5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                        <span className="font-light">06 Dec 2022</span>
                                    </div>
                                </td>
                                <td className="py-3.5 text-left">{formatToCurrency(9000)}</td>
                                <td className="py-3.5 pl-5 text-left">
                                    <span className="px-1.5 py-1 text-xs text-white font-medium bg-blue-600 rounded shadow-lg text-opacity-70">Pending</span>
                                </td>
                            </tr>

                            <tr className="transform text-gray-400 hover:text-gray-600 hover:-translate-y-0.5 transition duration-300 cursor-pointer">
                                <td className="py-3.5 text-left">#46894</td>
                                <td className="py-3.5 pl-5 text-left">
                                    <div className="flex items-center space-x-3">
                                        <img className="w-8 h-8 rounded-md" src="/images/ro-3.jpeg" alt=""/>
                                        <span className="text-gray-700">Laurie Fox</span>
                                    </div>
                                </td>
                                <td className="py-3.5 text-left">
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 p-0.5 text-green-500" fill="#D1FAE5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                        <span className="font-light">25 Oct 2022</span>
                                    </div>
                                </td>
                                <td className="py-3.5 text-left">{formatToCurrency(21500)}</td>
                                <td className="py-3.5 pl-5 text-left">
                                    <span className="px-1.5 py-1 text-xs text-white font-medium bg-green-500 rounded shadow-lg text-opacity-70">Success</span>
                                </td>
                            </tr>

                            <tr className="transform text-gray-400 hover:text-gray-600 hover:-translate-y-0.5 transition duration-300 cursor-pointer">
                                <td className="py-3.5 text-left">#46894</td>
                                <td className="py-3.5 pl-5 text-left">
                                    <div className="flex items-center space-x-3">
                                        <img className="w-8 h-8 rounded-md" src="/images/ro-4.jpeg" alt=""/>
                                        <span className="text-gray-700">Ryan Collins</span>
                                    </div>
                                </td>
                                <td className="py-3.5 text-left">
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 p-0.5 text-green-500" fill="#D1FAE5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                        <span className="font-light">04 Aug 2022</span>
                                    </div>
                                </td>
                                <td className="py-3.5 text-left">{formatToCurrency(1500)}</td>
                                <td className="py-3.5 pl-5 text-left">
                                    <span className="px-1.5 py-1 text-xs text-white font-medium bg-blue-600 rounded shadow-lg text-opacity-70">Pending</span>
                                </td>
                            </tr>

                            <tr className="transform text-gray-400 hover:text-gray-600 hover:-translate-y-0.5 transition duration-300 cursor-pointer">
                                <td className="py-3.5 text-left">#46894</td>
                                <td className="py-3.5 pl-5 text-left">
                                    <div className="flex items-center space-x-3">
                                        <img className="w-8 h-8 rounded-md" src="/images/ro-5.jpeg" alt=""/>
                                        <span className="text-gray-700">Irene Collins</span>
                                    </div>
                                </td>
                                <td className="py-3.5 text-left">
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 p-0.5 text-green-500" fill="#D1FAE5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                        <span className="font-light">01 Jan 2022</span>
                                    </div>
                                </td>
                                <td className="py-3.5 text-left">{formatToCurrency(34000)}</td>
                                <td className="py-3.5 pl-5 text-left">
                                    <span className="px-1.5 py-1 text-xs text-white font-medium bg-red-500 rounded shadow-lg text-opacity-70">Failure</span>
                                </td>
                            </tr>

                            <tr className="transform text-gray-400 hover:text-gray-600 hover:-translate-y-0.5 transition duration-300 cursor-pointer">
                                <td className="py-3.5 text-left">#46894</td>
                                <td className="py-3.5 pl-5 text-left">
                                    <div className="flex items-center space-x-3">
                                        <img className="w-8 h-8 rounded-md" src="/images/ro-6.jpeg" alt=""/>
                                        <span className="text-gray-700">Sonia Shaw</span>
                                    </div>
                                </td>
                                <td className="py-3.5 text-left">
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 p-0.5 text-green-500" fill="#D1FAE5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                        <span className="font-light">10 Nov 2021</span>
                                    </div>
                                </td>
                                <td className="py-3.5 text-left">{formatToCurrency(5607)}</td>
                                <td className="py-3.5 pl-5 text-left">
                                    <span className="px-1.5 py-1 text-xs text-white font-medium bg-green-500 rounded shadow-lg text-opacity-70">Success</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="col-span-2 px-4 py-3 bg-white border rounded-md shadow-xs lg:col-span-1">
                    <h3 className="text-lg">Recent reception</h3>

                    <div className="mt-8 text-gray-500 space-y-5">
                        <table className="w-full">
                            <thead>
                            <tr className="text-gray-600">
                                <th className="py-2 pl-5 text-sm font-normal text-left bg-blue-50">ID</th>
                                <th className="py-2 pl-5 text-sm font-normal text-left bg-blue-50 rounded-l-md">
                                    <span className="ml-3">Customer</span>
                                </th>
                                <th className="py-2 pl-5 text-sm font-normal text-left bg-blue-50">Date</th>
                                <th className="py-2 pl-5 text-sm font-normal text-left bg-blue-50">Amount</th>
                                <th className="py-2 pl-5 text-sm font-normal text-left bg-blue-50 rounded-r-md">Status</th>
                            </tr>
                            </thead>
                            <tbody className="text-sm">
                            <tr className="transform text-gray-400 hover:text-gray-600 hover:-translate-y-0.5 transition duration-300 cursor-pointer">
                                <td className="py-3.5 text-left">#46894</td>
                                <td className="py-3.5 pl-5 text-left">
                                    <div className="flex items-center space-x-3">
                                        <img className="w-8 h-8 rounded-md" src="/images/ro-1.jpeg" alt=""/>
                                        <span className="text-gray-700">Luke Ivory</span>
                                    </div>
                                </td>
                                <td className="py-3.5 text-left">
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 p-0.5 text-green-500" fill="#D1FAE5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                        <span className="font-light">12 Jan 2023</span>
                                    </div>
                                </td>
                                <td className="py-3.5 text-left">{formatToCurrency(8500)}</td>
                                <td className="py-3.5 pl-5 text-left">
                                    <span className="px-1.5 py-1 text-xs text-white font-medium bg-green-500 rounded shadow-lg text-opacity-70">Success</span>
                                </td>
                            </tr>

                            <tr className="transform text-gray-400 hover:text-gray-600 hover:-translate-y-0.5 transition duration-300 cursor-pointer">
                                <td className="py-3.5 text-left">#46894</td>
                                <td className="py-3.5 pl-5 text-left">
                                    <div className="flex items-center space-x-3">
                                        <img className="w-8 h-8 rounded-md" src="/images/ro-2.jpeg" alt=""/>
                                        <span className="text-gray-700">Andy King</span>
                                    </div>
                                </td>
                                <td className="py-3.5 text-left">
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 p-0.5 text-green-500" fill="#D1FAE5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                        <span className="font-light">06 Dec 2022</span>
                                    </div>
                                </td>
                                <td className="py-3.5 text-left">{formatToCurrency(9000)}</td>
                                <td className="py-3.5 pl-5 text-left">
                                    <span className="px-1.5 py-1 text-xs text-white font-medium bg-blue-600 rounded shadow-lg text-opacity-70">Pending</span>
                                </td>
                            </tr>

                            <tr className="transform text-gray-400 hover:text-gray-600 hover:-translate-y-0.5 transition duration-300 cursor-pointer">
                                <td className="py-3.5 text-left">#46894</td>
                                <td className="py-3.5 pl-5 text-left">
                                    <div className="flex items-center space-x-3">
                                        <img className="w-8 h-8 rounded-md" src="/images/ro-3.jpeg" alt=""/>
                                        <span className="text-gray-700">Laurie Fox</span>
                                    </div>
                                </td>
                                <td className="py-3.5 text-left">
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 p-0.5 text-green-500" fill="#D1FAE5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                        <span className="font-light">25 Oct 2022</span>
                                    </div>
                                </td>
                                <td className="py-3.5 text-left">{formatToCurrency(21500)}</td>
                                <td className="py-3.5 pl-5 text-left">
                                    <span className="px-1.5 py-1 text-xs text-white font-medium bg-green-500 rounded shadow-lg text-opacity-70">Success</span>
                                </td>
                            </tr>

                            <tr className="transform text-gray-400 hover:text-gray-600 hover:-translate-y-0.5 transition duration-300 cursor-pointer">
                                <td className="py-3.5 text-left">#46894</td>
                                <td className="py-3.5 pl-5 text-left">
                                    <div className="flex items-center space-x-3">
                                        <img className="w-8 h-8 rounded-md" src="/images/ro-4.jpeg" alt=""/>
                                        <span className="text-gray-700">Ryan Collins</span>
                                    </div>
                                </td>
                                <td className="py-3.5 text-left">
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 p-0.5 text-green-500" fill="#D1FAE5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                        <span className="font-light">04 Aug 2022</span>
                                    </div>
                                </td>
                                <td className="py-3.5 text-left">{formatToCurrency(1500)}</td>
                                <td className="py-3.5 pl-5 text-left">
                                    <span className="px-1.5 py-1 text-xs text-white font-medium bg-blue-600 rounded shadow-lg text-opacity-70">Pending</span>
                                </td>
                            </tr>

                            <tr className="transform text-gray-400 hover:text-gray-600 hover:-translate-y-0.5 transition duration-300 cursor-pointer">
                                <td className="py-3.5 text-left">#46894</td>
                                <td className="py-3.5 pl-5 text-left">
                                    <div className="flex items-center space-x-3">
                                        <img className="w-8 h-8 rounded-md" src="/images/ro-5.jpeg" alt=""/>
                                        <span className="text-gray-700">Irene Collins</span>
                                    </div>
                                </td>
                                <td className="py-3.5 text-left">
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 p-0.5 text-green-500" fill="#D1FAE5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                        <span className="font-light">01 Jan 2022</span>
                                    </div>
                                </td>
                                <td className="py-3.5 text-left">{formatToCurrency(34000)}</td>
                                <td className="py-3.5 pl-5 text-left">
                                    <span className="px-1.5 py-1 text-xs text-white font-medium bg-red-500 rounded shadow-lg text-opacity-70">Failure</span>
                                </td>
                            </tr>

                            <tr className="transform text-gray-400 hover:text-gray-600 hover:-translate-y-0.5 transition duration-300 cursor-pointer">
                                <td className="py-3.5 text-left">#46894</td>
                                <td className="py-3.5 pl-5 text-left">
                                    <div className="flex items-center space-x-3">
                                        <img className="w-8 h-8 rounded-md" src="/images/ro-6.jpeg" alt=""/>
                                        <span className="text-gray-700">Sonia Shaw</span>
                                    </div>
                                </td>
                                <td className="py-3.5 text-left">
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 p-0.5 text-green-500" fill="#D1FAE5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                        <span className="font-light">10 Nov 2021</span>
                                    </div>
                                </td>
                                <td className="py-3.5 text-left">{formatToCurrency(5607)}</td>
                                <td className="py-3.5 pl-5 text-left">
                                    <span className="px-1.5 py-1 text-xs text-white font-medium bg-green-500 rounded shadow-lg text-opacity-70">Success</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Dashboard;