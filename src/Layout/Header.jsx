import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import TopBarLogo from "../Images/Topbar_logo.png"
import { useEffect } from "react";
import envelop from "../Images/Home/Email-Icon.png"
import WhatsAppIcon from "../Images/Home/whatsapp-icon.png"
import line from "../Images/Home/White-Line-for-top-section.png"
import Phone from "../Images/Home/Phone-Icon.png"
// import EmailIcon from "../Images/"

function Header() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 960) {
                setOpenNav(false);
            }
        };

        // Add the resize event listener
        window.addEventListener("resize", handleResize);
        console.log("value inner...", openNav)
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    console.log("value...", openNav)
    return (
        <>
            <div className="mainbanner bgImg_banner w-100 py-5" >
                <div class="container mx-auto py-5">
                    <div className="topBar md:mb-6 mb-3">
                        <div class="grid grid-cols-1 md:grid-cols-6 gap-8">
                            <div class="topLogo col-span-3">
                                <img src={TopBarLogo} alt="Logo" />

                            </div>
                            <div class="flex text-white col-span-2 ms-8 reletive">
                                <div className="mr-2">
                                    <img style={{ marginTop: "15%" }} src={envelop} alt="" />
                                </div>
                                <div className='ml-2'>
                                    <strong className='blueColor'>Support</strong>
                                    <p>info@code-harbor.net</p>
                                </div>
                                <div className="ml-auto whatsAppCover">
                                    <img className="lineIcon" src={line} alt="Logo" />
                                    <img className="" src={WhatsAppIcon} alt="Logo" />
                                </div>
                            </div>
                            <div class="flex text-white">
                                <div>
                                    <img className="mt-1.5" src={Phone} alt="" />
                                </div>
                                <div className='ml-2 '>
                                    <strong className='blueColor'>Contact</strong>
                                    <p>+92 3087290245</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                        ) : (
                            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                        )}
                    </div>
                    <div open={openNav}>
                        <div className="topNavMenu">
                            <div class="grid grid-cols-6 gap-5">
                                <div className="col-span-5 navMenu">


                                    <nav class="bg-white border-gray-200 dark:bg-gray-900">
                                        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-0">

                                            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                                                <span class="sr-only">Open main menu</span>
                                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                                                </svg>
                                            </button>
                                            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                                                <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                                    <li>
                                                        <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>


                                </div>
                                <div className="top_Contactbtn sm:">
                                    <h2>Contact Us</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className=" py-5 grid grid-cols-1 md:grid-cols-2">
                            <div className="companyName md:py-8 py-5 my-5">
                                <h2>SOFTWARE SOLUTION</h2>
                                <h1 className="">PROVIDER <span className="blueColor">COMPANY</span></h1>
                                <p className="md:mb-8 mb-4">Use these Tailwind CSS navbar components to help users get around your application with responsive navigation bars featuring search bars, menus, and quick action buttons. </p>
                                <div className=" topPageLink">
                                    <button className="md:mt-6">ABOUT US</button>
                                    <button className="bg_blue whiteColor md:mt-6">OUR SERVICE</button>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}
export default Header;