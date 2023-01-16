import CountUp from 'react-countup';

import Nav from "../layouts/Nav";
import Banner from "../layouts/Banner";
import {Container} from "../components/utils";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <Nav/>

            <Banner/>

            <Container className="wow fadeInUp relative -mt-[110px]">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white border border-gray-200 border-opacity-50 shadow-2xl rounded-xl">
                    <div className="text-center py-10 lg:py-16 space-y-3 text-indigo-900 font-medium">
                        <h1 className="text-5xl lg:text-6xl font-semibold text-indigo-600">
                            <CountUp end={50} />+
                        </h1>
                        <p className="text-sm lg:text-base">Supported Currencies</p>
                    </div>

                    <div className="text-center py-10 lg:py-16 space-y-3 text-indigo-900 font-medium">
                        <h1 className="text-5xl lg:text-6xl font-semibold text-indigo-600">
                            <CountUp end={100} />+
                        </h1>
                        <p className="text-sm lg:text-base">Available Countries</p>
                    </div>

                    <div className="text-center py-10 lg:py-16 space-y-3 text-indigo-900 font-medium">
                        <h1 className="text-5xl lg:text-6xl font-semibold text-indigo-600"><CountUp end={70} />+</h1>
                        <p className="text-sm lg:text-base">Payment Methods</p>
                    </div>

                    <div className="text-center py-10 lg:py-16 space-y-3 text-indigo-900 font-medium">
                        <h1 className="text-5xl lg:text-6xl font-semibold text-indigo-600"><CountUp end={7} />/<CountUp end={24} />+</h1>
                        <p className="text-sm lg:text-base">Support Team</p>
                    </div>
                </div>
            </Container>

            <div className="wow fadeInUp text-center text-indigo-900 space-y-8 mt-28 mb-16">
                <h4 className="text-xl lg:text-2xl font-bold">Send money in a heartbeat</h4>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">The World At Your <br className="hidden lg:block"/> Fingertips</h1>

                <p className="text-sm sm:text-base font-medium">Sign up to start saving on international money transfers and currency exchange.</p>
            </div>

            <Container className="wow fadeInUp flex items-center flex-col-reverse xl:flex-row xl:space-y-0 xl:space-x-5">
                <div className="w-full xl:w-1/2">
                    <img src="/images/global-payment-img.png" className="h-auto object-contain object-center align-middle mt-16 xl:mt-0" alt=""/>
                </div>

                <div className="w-full xl:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 text-indigo-900">
                    <div className="transition-all duration-300 border border-indigo-200 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl">
                        <div className="flex items-center justify-center"><img src="/images/global-payment-icon-1.png" alt=""/></div>
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">Peace of Mind</h3>
                        <p className="max-w-lg">Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio.</p>
                    </div>

                    <div className="transition-all duration-300 border border-indigo-200 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl">
                        <div className="flex items-center justify-center"><img src="/images/global-payment-icon-2.png" alt=""/></div>
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">Business-Ready</h3>
                        <p className="max-w-lg">Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio.</p>
                    </div>

                    <div className="transition-all duration-300 border border-indigo-200 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl">
                        <div className="flex items-center justify-center"><img src="/images/global-payment-icon-3.png" alt=""/></div>
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">100% Transparent</h3>
                        <p className="max-w-lg">Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio.</p>
                    </div>

                    <div className="transition-all duration-300 border border-indigo-200 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl">
                        <div className="flex items-center justify-center"><img src="/images/global-payment-icon-4.png" alt=""/></div>
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">International Network</h3>
                        <p className="max-w-lg">Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio.</p>
                    </div>
                </div>
            </Container>

            <div className="mt-28 pt-10 md:pt-28 pb-52 space-y-8 text-center text-white bg-no-repeat bg-cover bg-center" style={{backgroundImage: "url('/images/our-solutions-bg.png')"}}>
                <h3 className="wow fadeInUp text-xl md:text-2xl text-green-400 font-bold">High speeds. Low fees. No hassle.</h3>
                <h1 className="wow fadeInUp text-3xl md:text-4xl xl:text-6xl font-bold">All Your Payments In <br className="hidden lg:block"/> One Place</h1>
                <p className="wow fadeInUp text-white font-medium text-opacity-80 text-sm md:text-base">Get used to low fees and great exchange rates on international money <br/> transfers.Expand your business worldwide</p>
            </div>

            <Container className="-mt-[150px] wow fadeInUp">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    <div className="w-2/3 mx-auto md:w-full bg-white transition-all duration-300 border border-gray-200 border-opacity-50 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 shadow-xl">
                        <div className="flex items-center justify-center"><img src="/images/our-solutions-icon-1.png" alt=""/></div>
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">Payments</h3>
                        <p className="max-w-lg text-lg text-indigo-900">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>

                    <div className="w-2/3 mx-auto md:w-full bg-white transition-all duration-300 border border-gray-200 border-opacity-50 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 shadow-xl">
                        <div className="flex items-center justify-center"><img src="/images/our-solutions-icon-2.png" alt=""/></div>
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">Collections</h3>
                        <p className="max-w-lg text-lg text-indigo-900">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>

                    <div className="w-2/3 mx-auto md:w-full bg-white transition-all duration-300 border border-gray-200 border-opacity-50 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 shadow-xl">
                        <div className="flex items-center justify-center"><img src="/images/our-solutions-icon-3.png" alt=""/></div>
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">Conversions</h3>
                        <p className="max-w-lg text-lg text-indigo-900">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>

                    <div className="w-2/3 mx-auto md:w-full bg-white transition-all duration-300 border border-gray-200 border-opacity-50 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 shadow-xl">
                        <div className="flex items-center justify-center"><img src="/images/our-solutions-icon-4.png" alt=""/></div>
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">Global Account</h3>
                        <p className="max-w-lg text-lg text-indigo-900">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>

                <div className="flex items-center flex-col-reverse  lg:flex-row space-x-16 mt-24">
                    <img src="/images/app-download-img.png" className="w-full lg:w-1/2 mt-8 lg:mt-0 object-cover object-center" alt=""/>
                    
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div className="text-indigo-900 space-y-8 mt-28">
                            <h4 className="text-xl text-indigo-600 lg:text-2xl font-bold">App Download</h4>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Fast, Secure Money <br className="hidden lg:block"/> Transfers</h1>

                            <p className="text-sm sm:text-base">Access your account via your mobile phone. View balance, transfer <br/> funds, view transactions wherever you are.</p>
                        </div>

                        <div className="space-y-5 text-indigo-900">
                            <div className="flex items-center space-x-3 lg:space-x-5">
                                <img src="/images/check.png" alt=""/>
                                <p>Login with fingerprint or Face ID.</p>
                            </div>

                            <div className="flex items-center space-x-3 lg:space-x-5">
                                <img src="/images/check.png" alt=""/>
                                <p>Simple few Taps to send money.</p>
                            </div>

                            <div className="flex items-center space-x-3 lg:space-x-5">
                                <img src="/images/check.png" alt=""/>
                                <p>View transaction history.</p>
                            </div>

                            <div className="flex items-center space-x-3 lg:space-x-5">
                                <img src="/images/check.png" alt=""/>
                                <p>Get instant App notifications.</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <button className="transition-all duration-300 hover:shadow-xl">
                                <img src="/images/GooglePlay-btn.png" alt=""/>
                            </button>

                            <button className="transition-all duration-300 hover:shadow-xl">
                                <img src="/images/apple-btn.png" alt=""/>
                            </button>
                        </div>
                    </div>
                </div>
            </Container>


            <Footer/>
        </div>
    )
};

export default Home;