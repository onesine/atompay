import {Container} from "../components/utils";
import {Link} from "react-router-dom";
import {IoMdSync} from "react-icons/io";
import {HiChevronRight} from "react-icons/hi";
import {checkUser} from "../helpers";

const Banner = () => {
    return (
        <section className="w-full overflow-hidden bg-[#f2f3f9] wow fadeInUp">
            <div className="relative bg-auto bg-no-repeat bg-[top_120px_right] md:bg-[top_70px_right] lg:bg-[top_100px_right]" style={{backgroundImage: "url('/images/banner-map.png')"}}>
                <div>
                    <img className="w-[25%] lg:w-[20%] xl:max-w-full h-auto align-middle absolute left-0 bottom-[5%] animate-ripple2" src="/images/banner-box.png" alt=""/>
                    <img className="hidden md:block w-[25%] lg:w-[15%] xl:w-[19%] h-auto align-middle absolute top-0 left-0" src="/images/banner-clock.png" alt=""/>
                    <img className="w-[10%] xl:w-[13%] h-auto align-middle absolute left-[calc(48%)] bottom-[12%] animate-ripple2" src="/images/banner-rocket.png" alt=""/>
                    <img className="block w-[10%] xl:w-[15.5%] h-auto align-middle absolute right-0 bottom-[calc(5%)] animate-ripple" src="/images/banner-human.png" alt=""/>
                </div>

                <div className="pt-[150px] pb-[250px] xl:pb-[200px]">
                    <Container className="pt-5 flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-4 lg:space-x-0 lg:justify-between relative z-10">
                        <img src="/images/banner-wallet.png" className="hidden lg:block lg:w-[11%] absolute top-[3%] left-[47%] xl:left-[54%] animate-ripple" alt=""/>
                        <div>
                            <h5 className="font-bold lg:text-xl xl:text-2xl text-indigo-700 mb-3">Trusted by over 3M customers</h5>
                            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-indigo-900">Pay Anyone,<br/> Anywhere</h1>
                            <p className="lg:text-xl xl:text-2xl text-indigo-900 my-8">Quickly and easily send, receive and <br className="hidden md:block xl:hidden"/> request <br className="hidden md:block hidden xl:block"/> money online with AtomPay. <br className="hidden md:block xl:hidden"/> Get a customised <br className="hidden xl:block"/> solution to fit your <br className="hidden md:block xl:hidden"/> business needs.</p>

                            <div className="flex items-center space-x-4">
                                {!checkUser() && (
                                    <Link to="/register" className="lg:text-lg truncate transition-all duration-300 px-3 lg:px-4 xl:px-8 font-medium py-3 bg-indigo-600 text-white rounded-md focus:outline-none hover:bg-indigo-700 focus:ring focus:border-indigo-500 focus:ring-indigo-500/50">
                                        Open a Free Account
                                    </Link>
                                )}

                                <Link to="/#how-it-work" className="lg:text-lg truncate transition-all duration-300 px-3 lg:px-4 xl:px-8 font-medium py-3 text-indigo-900 border border-indigo-900 rounded-md focus:outline-none hover:text-white hover:bg-indigo-700 focus:ring focus:border-indigo-500 focus:ring-indigo-500/50">
                                    See How it Works
                                </Link>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-100 rounded-lg shadow-xl p-4 md:p-5 w-full md:w-1/2 lg:w-[40%] xl:w-[33%]">
                            <div className="space-y-8 lg:space-y-10">
                                <div className="rounded-lg bg-indigo-50 p-4 lg:p-5">
                                    <div className="flex space-x-3 items-center">
                                        <div className="w-2/3">
                                            <h6 className="text-sm text-indigo-900">You send</h6>
                                            <input
                                                type="text"
                                                className="p-0 w-full bg-indigo-50 border-0 border-b-2 border-gray-300 text-indigo-800 placeholder-indigo-900 font-bold text-xl lg:text-2xl focus:border-indigo-800 focus:ring-0"
                                                placeholder="1,000"
                                            />
                                        </div>

                                        <button className="shadow-sm flex items-center space-x-2 justify-center text-indigo-900 bg-white w-1/4 md:w-1/3 py-3 md:py-4 rounded-lg md:text-lg font-bold uppercase font-semibold">
                                            <span>XOF</span>
                                            <HiChevronRight className="h-6 w-6"/>
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-3 lg:space-y-5 text-indigo-900">
                                    <div className="flex items-center space-x-4 text-indigo-600 text-sm">
                                        <IoMdSync className="w-5 h-5"/>
                                        <span>Show calculations</span>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="w-1/2">
                                            <span>10.04 USD</span>
                                        </div>
                                        <div className="w-1/2">
                                            Our fee
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="w-1/2">
                                            <span>10.04 USD</span>
                                        </div>
                                        <div className="w-1/2">
                                            Our fee
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="w-1/2">
                                            <span>10.04 USD</span>
                                        </div>
                                        <div className="w-1/2">
                                            Our fee
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-lg bg-indigo-50 p-4 lg:p-5">
                                    <div className="flex space-x-3 items-center">
                                        <div className="w-2/3">
                                            <h6 className="text-sm text-indigo-900">Recipient gets</h6>
                                            <input
                                                type="text"
                                                className="p-0 w-full bg-indigo-50 border-0 border-b-2 border-gray-300 text-indigo-800 placeholder-indigo-900 font-bold text-xl lg:text-2xl focus:border-indigo-800 focus:ring-0"
                                                placeholder="1,000"
                                            />
                                        </div>

                                        <button className="shadow-sm flex items-center space-x-2 justify-center text-indigo-900 bg-white w-1/4 md:w-1/3 py-3 md:py-4 rounded-lg text-lg font-bold uppercase font-semibold">
                                            <img src="/images/benin.svg" className="rounded-full h-6 w-6" alt=""/>
                                            <HiChevronRight className="h-6 w-6"/>
                                        </button>
                                    </div>
                                </div>

                                <Link to="/register" className="transition-all block text-center duration-300 px-3 lg:px-4 xl:px-8 font-medium lg:text-lg py-3 bg-indigo-600 text-white rounded-md focus:outline-none hover:bg-indigo-700 focus:ring focus:border-indigo-500 focus:ring-indigo-500/50">
                                    Get started
                                </Link>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </section>
    )
};

export default Banner;