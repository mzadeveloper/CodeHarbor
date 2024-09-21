import Header from "../Layout/Header"
import PMC from "../Images/Home/Shield-icon.png"
import WL_Icone from "../Images/Home/Circle-with-line.png"
import PlannImg from "../Images/Home/Planning-icon.png"
function Service() {
    return (
        <>
        <Header Name = "Services" link="service"/>
            <div className="container mx-auto py-5">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:py-8 p-5">
                    <div className="service_cover md:me-8 md:pe-5">
                        <img src={WL_Icone} alt="wellCome icon" />
                        <h2 className="wl_heading blueColor">WELCOME TO <span>CODE HARBOR</span></h2>

                    </div>
                    <div className="py-5">
                        <p className="mb-5">In publishing and graphic design lorem ipsum is a placeholder text commonly
                            used to demonstrate the visual form of a docoment or a typeface without relying on
                            meaningful contant. The visual form of a docoment or a typeface without relying on
                            meaningful contant.</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4 p-5">
                    <div className="mb-4 bg_black ">
                        <a href="#" class="block max-w-sm p-6 text-center  hover:rounded-lg shadow bg-[#202020]-500">
                            <div className="mb-3"><img className="mx-auto" src={PlannImg} /></div>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#fff] uppercase">Planning </h5>
                            <p class="font-normal text-[#9d9d9d] font-semibold">Here are the biggest enterprise technology acquisitions, in reverse chronological order.</p>
                        </a>
                    </div>
                    <div className="mb-4 bg_black ">
                        <a href="#" class="block max-w-sm p-6 text-center  hover:rounded-lg shadow bg-[#202020]-500">

                            <div className="mb-3"><img className="mx-auto" src={PlannImg} /></div>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#fff] uppercase">Development </h5>
                            <p class="font-normal text-[#9d9d9d] font-semibold">Here are the biggest enterprise technology acquisitions, in reverse chronological order.</p>
                        </a>
                    </div>
                    <div className="mb-4 bg_black ">
                        <a href="#" class="block max-w-sm p-6 text-center  hover:rounded-lg shadow bg-[#202020]-500">
                            <div className="mb-3"><img className="mx-auto" src={PlannImg} /></div>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#fff] uppercase">Planning </h5>
                            <p class="font-normal text-[#9d9d9d] font-semibold">Here are the biggest enterprise technology acquisitions, in reverse chronological order.</p>
                        </a>
                    </div>
                    <div className="mb-4 bg_black ">
                        <a href="#" class="block max-w-sm p-6 text-center  hover:rounded-lg shadow bg-[#202020]-500">
                            <div className="mb-3"><img className="mx-auto" src={PlannImg} /></div>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#fff] uppercase">Planning </h5>
                            <p class="font-normal text-[#9d9d9d] font-semibold">Here are the biggest enterprise technology acquisitions, in reverse chronological order.</p>
                        </a>
                    </div>

                </div>
            </div>
            <div className="container mx-auto">

                <div id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
                    <h2 id="accordion-color-heading-1">
                        <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
                            <span>What is Flowbite?</span>
                            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-color-body-1" class="hidden" aria-labelledby="accordion-color-heading-1">
                        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                            <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                        </div>
                    </div>
                    <h2 id="accordion-color-heading-2">
                        <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-2" aria-expanded="false" aria-controls="accordion-color-body-2">
                            <span>Is there a Figma file available?</span>
                            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-color-body-2" class="hidden" aria-labelledby="accordion-color-heading-2">
                        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                            <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                            <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                        </div>
                    </div>
                    <h2 id="accordion-color-heading-3">
                        <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-3" aria-expanded="false" aria-controls="accordion-color-body-3">
                            <span>What are the differences between Flowbite and Tailwind UI?</span>
                            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-color-body-3" class="hidden" aria-labelledby="accordion-color-heading-3">
                        <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                            <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                            <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                            <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                            <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
                                <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                                <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container mx-auto py-5">
                <div className="service_cover md:me-8 md:pe-5">
                    <img src={WL_Icone} alt="wellCome icon" />
                    <h2 className="wl_heading blueColor">WELCOME TO <span>CODE HARBOR</span></h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:py-8 p-5">
                    <div>
                        <div class="flex mb-5">
                            <div>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                            <div className="qualitiesList">
                                <h3>Tailored Solution</h3>
                                <p>Some quick example text to build on the card title and make up the bulk. <br></br>
                                    Some quick example text to build on the .
                                </p>

                            </div>
                        </div>
                        <div class="flex mb-5">
                            <div>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                            <div className="qualitiesList">
                                <h3>Tailored Solution</h3>
                                <p>Some quick example text to build on the card title and make up the bulk. <br></br>
                                    Some quick example text to build on the .
                                </p>

                            </div>
                        </div>
                        <div class="flex mb-5">
                            <div>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                            <div className="qualitiesList">
                                <h3>Tailored Solution</h3>
                                <p>Some quick example text to build on the card title and make up the bulk. <br></br>
                                    Some quick example text to build on the .
                                </p>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex mb-5">
                            <div>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                            <div className="qualitiesList">
                                <h3>Tailored Solution</h3>
                                <p>Some quick example text to build on the card title and make up the bulk. <br></br>
                                    Some quick example text to build on the .
                                </p>

                            </div>
                        </div>
                        <div class="flex mb-5">
                            <div>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                            <div className="qualitiesList">
                                <h3>Tailored Solution</h3>
                                <p>Some quick example text to build on the card title and make up the bulk. <br></br>
                                    Some quick example text to build on the .
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg_blue py-5 getStarted">
                <div class="container mx-auto text-center md:p-8 whiteColor" >
                    <h2 className="text-4xl font-bold mb-5">LET'S GET STARTED</h2>
                    <p className="text-xl text-[#dce9f1]">Some quick example text to build on the card title and make up the bulk. <br></br>the card title and make up the bulk.</p>
                </div>
            </div>
        </>
    )
}
export default Service;