import Header from "../Layout/Header"
import PlannImg from "../Images/Home/Planning-icon.png"
import DesignImg from "../Images/Home/Design-icon.png"
import DevelopImg from "../Images/Home/developemt-icon.png"
import TestingImg from "../Images/Home/Lounch-icon.png"
import PMC from "../Images/Home/graphic-design-blue-icon.png"
import PMC_2 from "../Images/Home/Shield-icon.png"
import WL_Icone from "../Images/Home/Circle-with-line.png"
import UXDesign from "../Images/Home/Analysis-blue-icon.png"
import Code from "../Images/Home/web-develp-blue-icon.png"
import SEO from "../Images/Home/SEO-blue-icon.png"
import Graphic from "../Images/Home/graphic-design-blue-icon.png"
function Home() { 
    return (
        <>
           <Header Name="Home"/>
            <section>
                <div class="container mx-auto py-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:py-8 p-5">
                        <div className="wl_cover md:me-8 md:pe-5">
                            <img src={WL_Icone} alt="wellCome icon" />
                            <h2 className="wl_heading blueColor">WELCOME TO <span>CODE HARBOR</span></h2>
                            <p className="mb-5">In publishing and graphic design lorem ipsum is a placeholder text commonly
                                used to demonstrate the visual form of a docoment or a typeface without relying on
                                meaningful contant.</p>
                            <div className="flex justify-content-between wl_sub_head">
                                <div className="wl_icon"><img class="fa-solid fa-pen-nib" src={PMC} /></div>
                                <div>
                                    <h3> Project Management Consulting</h3>
                                    <p>In publishing and graphic design lorem ipsum is a placeholder text
                                        commonly the visual.</p>
                                </div>
                            </div>
                            <div className="flex justify-content-between wl_sub_head">
                                <div className="wl_icon"><img class="fa-solid fa-pen-nib" src={PMC_2} /></div>
                                <div>
                                    <h3> Project Management Consulting</h3>
                                    <p>In publishing and graphic design lorem ipsum is a placeholder text
                                        commonly the visual.</p>
                                </div>
                            </div>
                            <div className="flex justify-content-between wl_sub_head">
                                <div className="wl_Call ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 512 512">
                                        <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" />
                                    </svg>
                                </div>
                                <div className="md:flex">
                                    <h3 class="md:my-3">+92 3357006141 </h3>
                                    <button type="button" class="text-white md:block bg-blue-700 hover:bg-blue-800 ms-4 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 md:px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">READ MORE</button>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
                                <div class="">
                                    <div className="mb-4 bg_black ">
                                        <a href="#" class="block max-w-sm p-6 text-center  hover:rounded-lg shadow bg-[#202020]-500">
                                            <div className="mb-3"><img className="mx-auto" src={PlannImg} /></div>
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#fff] uppercase">Planning </h5>
                                            <p class="font-normal text-[#9d9d9d] font-semibold">Here are the biggest enterprise technology acquisitions, in reverse chronological order.</p>
                                        </a>
                                    </div>
                                    <div className="mb-4 bg_black ">
                                        <a href="#" class="block max-w-sm p-6 text-center  hover:rounded-lg shadow bg-[#202020]-500">

                                            <div className="mb-3"><img className="mx-auto" src={DevelopImg} /></div>
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#fff] uppercase">Development </h5>
                                            <p class="font-normal text-[#9d9d9d] font-semibold">Here are the biggest enterprise technology acquisitions, in reverse chronological order.</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="md:mt-8">
                                    <div className="mb-4 bg_black ">
                                        <a href="#" class="block max-w-sm p-6 text-center  hover:rounded-lg shadow bg-[#202020]-500">

                                            <div className="mb-3"><img className="mx-auto" src={DesignImg} /></div>
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#fff] uppercase">Design </h5>
                                            <p class="font-normal text-[#9d9d9d] font-semibold">Here are the biggest enterprise technology acquisitions, in reverse chronological order.</p>
                                        </a>
                                    </div>
                                    <div className="mb-4 bg_black ">
                                        <a href="#" class="block max-w-sm p-6 text-center hover:rounded-lg shadow bg-[#202020]-500">

                                            <div className="mb-3"><img className="mx-auto " src={TestingImg} /></div>
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#fff] uppercase">Testing & Launch </h5>
                                            <p class="font-normal text-[#9d9d9d] font-semibold">Here are the biggest enterprise technology acquisitions, in reverse chronological order.</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="cH_choose">
                <div className="ch_layer"></div>
                <div class="container mx-auto py-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
                        <div className="wl_cover md:me-8 md:pe-5">
                            <img src={WL_Icone} alt="wellCome icon" />
                            <h2 className="wl_heading blueColor">WHY CHOOSE <span>CODE HARBOR</span></h2>
                            <p className="mb-5">In publishing and graphic design lorem ipsum is a placeholder text commonly
                                used to demonstrate the visual form of a docoment or a typeface without relying on
                                meaningful contant.</p>
                        </div>
                        <div></div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 p-5 serviceType">
                        <div className="mb-4 bg_white ">
                            <a href="#" class="block max-w-sm p-8 text-center  hover:rounded-lg shadow bg-[#202020]-500">
                                <div className="mb-3"><img className="mx-auto" src={UXDesign} /></div>
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#000]">UI / UX Analysis </h5>
                                <p class="font-normal text-[#9d9d9d] font-semibold">Here are the biggest enterprise technology asd.</p>
                            </a>
                        </div>
                        <div className="mb-4 bg_white ">
                            <a href="#" class="block max-w-sm p-8 text-center  hover:rounded-lg shadow bg-[#202020]-500">
                                <div className="mb-3"><img className="mx-auto" src={Code} /></div>
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#000]">Web Development </h5>
                                <p class="font-normal text-[#9d9d9d] font-semibold">Here are the biggest enterprise technology asd.</p>
                            </a>
                        </div>
                        <div className="mb-4 bg_white ">
                            <a href="#" class="block max-w-sm p-8 text-center  hover:rounded-lg shadow bg-[#202020]-500">
                                <div className="mb-3"><img className="mx-auto" src={Graphic} /></div>
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#000]">Graphic Design </h5>
                                <p class="font-normal text-[#9d9d9d] font-semibold">Here are the biggest enterprise technology asd.</p>
                            </a>
                        </div>
                        <div className="mb-4 bg_white ">
                            <a href="#" class="block max-w-sm p-8 text-center  hover:rounded-lg shadow bg-[#202020]-500">
                                <div className="mb-3"><img className="mx-auto" src={SEO} /></div>
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#000]">SEO / Marketing </h5>
                                <p class="font-normal text-[#9d9d9d] font-semibold">Here are the biggest enterprise technology asd.</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="getInTouch">
                <div class="container mx-auto py-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
                        <div className="wl_cover md:me-8 md:pe-5">
                            <img src={WL_Icone} alt="wellCome icon" />
                            <h2 className="dbl_color_heading ">GET IN <span >TOUCH</span></h2>
                            <p className="mb-5">In publishing and graphic design lorem ipsum is a placeholder text commonly
                                used to demonstrate the visual form of a docoment or a typeface without relying on
                                meaningful contant.</p>

                        </div>
                        <div></div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 p-5">
                        <div>
                            <form class="max-w-sm mx-auto">
                                <input type="text" placeholder="Full Name" class="block w-full p-4 w-100 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                            </form>
                        </div>

                        <div>
                            <form class="max-w-sm mx-auto">
                                <input type="email" placeholder="Email" class="block w-full p-4 w-100 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                            </form>
                        </div>
                        <div>
                            <form class="max-w-sm mx-auto">
                                <input type="text" placeholder="Message" class="block w-full p-4 w-100 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                            </form>
                        </div>
                        <div>
                            <button type="button" style={{width:"100%"}} class="px-6 w-100 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit Now</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;