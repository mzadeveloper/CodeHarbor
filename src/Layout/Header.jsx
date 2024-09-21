import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import TopBarLogo from "../Images/Topbar_logo.png"
import { useEffect } from "react";
import envelop from "../Images/Home/Email-Icon.png"
import WhatsAppIcon from "../Images/Home/whatsapp-icon.png"
import line from "../Images/Home/White-Line-for-top-section.png"
import Phone from "../Images/Home/Phone-Icon.png"
import ArrowBottom from "../Images/Home/arrow-icon.png"

function Header(page) {
    const [openNav, setOpenNav] = useState(true);
    console.log("PageName", page)
    return (
        <>
            <div className="mainbanner bgImg_banner w-100 py-5 " >
                <div class="container mx-auto md:py-5 md:px-0 py-5 px-5" >
                    <div className="topBar md:mb-6 mb-3">
                        <div class="grid grid-cols-3 md:grid-cols-6 gap-8">
                            <div class="topLogo col-span-3">
                                <img src={TopBarLogo} alt="Logo" />
                            </div>
                            <div class="flex text-white col-span-3 md:col-span-2 ms-8 reletive">
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
                            <div class="md:flex hidden text-white inline-block">
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

                    <div>
                        <div className="topNavMenu">
                            <div class="grid md:grid-cols-6 grid-cols-1 gap-5">
                                <div className="col-span-5 navMenu">
                                    <nav class="bg-white border-gray-200 dark:bg-gray-900">
                                        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 md:py-0 py-4">
                                            <button data-collapse-toggle="navbar-default" type="button" onClick={() => setOpenNav(!openNav)} class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                                                <span class="sr-only">Open main menu</span>
                                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                                                </svg>
                                            </button>
                                            <div class={openNav == true ? " hidden w-full md:block md:w-auto" : "w-full md:block md:w-auto"} id="navbar-default" >
                                                <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                                    <li>
                                                        <NavLink to="/" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/about" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/service" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/contact" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                                <div className="top_Contactbtn sm:block hidden" >
                                    <h2>Contact Us</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        page.Name == 'Home' ?
                        (
                            <div className="">
                                <div className=" py-5 grid grid-cols-1 md:grid-cols-2">
                                    <div className="companyName md:py-8 py-5 my-5">
                                        <span class="topbar"></span>
                                        <h2>SOFTWARE SOLUTION</h2>
                                        <h1 className="">PROVIDER <span className="blueColor">COMPANY</span></h1>
                                        <p className="md:mb-8 mb-4">In publishing and graphic design and Use these Tailwind CSS navbar components to help users get around your application with responsive navigation bars featuring search bars, menus, and quick action buttons. </p>
                                        <div className=" topPageLink relative">
                                            <img className="arrowImg md:block hidden" src={ArrowBottom} alt="" />
                                            <button className="md:mt-6">ABOUT US</button>
                                            <button className="bg_blue whiteColor md:mt-6">OUR SERVICE</button>
                                        </div>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        ):(
                            <>

                                <div className="my-8 relative text-center">
                                    <h2 className="mainTitle">{page.Name}</h2>
                                    <NavLink to="/" className="whiteColor md:mt-6">Home </NavLink>
                                    <span className="whiteColor"> >> </span>
                                    <NavLink to={`/${page.link}`} className="whiteColor md:mt-6"> {page.Name}</NavLink>
                                </div>
                            </>
                        )
                    }
                    

                </div>

            </div >
        </>
    )
}
export default Header;