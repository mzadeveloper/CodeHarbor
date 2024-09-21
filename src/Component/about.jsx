import Header from "../Layout/Header"
import Icon1 from "../Images/Home/SEO-blue-icon.png"
import WL_Icone from "../Images/Home/Circle-with-line.png"
import BackgoundImg from "../Images/AboutUs/Backgound.png"
import Growth from "../Images/AboutUs/Growth-Revenue.png"
import Risk from "../Images/AboutUs/Risk-Manage.png"
import Security from "../Images/AboutUs/best-Security.png"
import Support from "../Images/AboutUs/great-support.png"
function About() {
    return (
        <>
            <Header Name="About Us" link="about" />
            <section className="px-5">
                <div className="container mx-auto our_mission py-5">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:py-8 py-5">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:pr-8 pr-5">
                            <div>
                                <div class=" text-primary card-heading mb-5 heading ">
                                    <img className="mb-5" src={Security} alt="" />
                                    <h4 class="card-title">BEST SECURITY</h4>
                                    <p class="card-text">Some quick example text to build on the card title and bulk.</p>
                                </div>
                                <div class=" text-secondary card-heading mb-5 heading">
                                    <img className="mb-5" src={Growth} alt="" />
                                    <h4 class="card-title">GROWTH REVENUE</h4>
                                    <p class="card-text">Some quick example text to build on the card title and bulk.</p>
                                </div>
                            </div>
                            <div>
                                <div class=" text-primary card-heading mb-5 heading">
                                    <img className="mb-5" src={Risk} alt="" />
                                    <h4 class="card-title ">RISK MANAGE</h4>
                                    <p class="card-text">Some quick example text to build on the card title and bulk.</p>
                                </div>
                                <div class=" text-secondary card-heading mb-5 heading ">
                                    <img className="mb-5" src={Support} alt="" />
                                    <h4 class="card-title">GREAT SUPPORT</h4>
                                    <p class="">Some quick example text to build on the card title bulk.</p>
                                </div>
                            </div>

                        </div>
                        <div>
                            <h1 class="font-bold text-4xl mb-5 blueColor">WHO WE ARE</h1>
                            <p>In publishing and graphic design lorem ipsum is a placeholder text commonly
                                used to demonstrate the visual form of a docoment or a typeface without relying on
                                meaningful contant typeface without relying on meaningful contant typeface without
                                relying on
                                meaningful contant.</p>
                            <h4 className="card-title mt-5">Our Mission</h4>
                            <p>In publishing and graphic design lorem ipsum is a placeholder text  commonly
                                used to demonstrate the visual form of a docoment or a typeface without relying on
                                meaningful contant typeface without relying on meaningful contant typeface without
                                relying on meaningful contant.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="whatwe_do py-8 px-5">
                <div className="container mx-auto services py-5 ">
                    <h2 class="dbl_color_heading">WHAT<span> WE DO</span></h2>
                    <p class="mb-5">WE OFFER A WIDE RANGE OF SERVICE,INCLUDING:</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:py-8 py-5">
                        <div>
                            <div class="card-body">
                                <h3 class="card-title">Costum Software Develoment</h3>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content
                                    natural lead-in to additional content
                                </p>

                            </div>
                            <div class="card-body">
                                <h3 class="card-title">Consulting and Stretegy</h3>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content
                                    natural lead-in to additional content
                                </p>

                            </div>
                        </div>
                        <div>
                            <div class="card-body">
                                <h3 class="card-title">UI / UX Design</h3>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content
                                    natural lead-in to additional content
                                </p>

                            </div>
                            <div class="card-body">
                                <h3 class="card-title">Maintenance and Support</h3>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content
                                    natural lead-in to additional content
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-8 px-5">
                <div className="container mx-auto py-5">
                    <div className="service_cover md:me-8 md:pe-5">
                        <img src={WL_Icone} alt="wellCome icon" />
                        <h2 className="dbl_color_heading ">Why <span>Choose Us</span></h2>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:py-8 py-5">
                        <div class=" mb-4">
                            <div>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                            <div className="qualitiesList">
                                <h3>Expertise</h3>
                                <p>Some quick example text to build on the card title and make up the bulk. <br></br>
                                    Some quick example text to build on the .
                                </p>

                            </div>
                        </div>
                        <div class="mb-4">
                            <div>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                            <div className="qualitiesList">
                                <h3>Tranceparency</h3>
                                <p>Some quick example text to build on the card title and make up the bulk. <br></br>
                                    Some quick example text to build on the .
                                </p>

                            </div>
                        </div>
                        <div class=" mb-4">
                            <div>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                            <div className="qualitiesList">
                                <h3>Persnalized Service</h3>
                                <p>Some quick example text to build on the card title and make up the bulk. <br></br>
                                    Some quick example text to build on the .
                                </p>

                            </div>
                        </div>
                        <div class=" mb-4">
                            <div>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                            <div className="qualitiesList">
                                <h3>Affordability</h3>
                                <p>Some quick example text to build on the card title and make up the bulk. <br></br>
                                    Some quick example text to build on the .
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </section >
            <section className="py-8 ourValue px-5">
                <div class="ch_layer"></div>
                <div className="container mx-auto py-5">
                    <div className="service_cover md:me-8 md:pe-5">
                        <img src={WL_Icone} alt="wellCome icon" />
                        <h2 className="dbl_color_heading ">Our <span>Values</span></h2>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-1 gap-2 md:py-8 py-5">

                        <div class="">
                            <div>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                            <div className="qualitiesList">
                                <h3>Innovation</h3>
                                <p>Some quick example text to build on the card title and make up the bulk. <br></br>
                                    Some quick example text to build on the .
                                </p>

                            </div>
                        </div>
                        <div >
                            <div>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                            <div className="qualitiesList">
                                <h3>Integrity</h3>
                                <p>Some quick example text to build on the card title and make up the bulk. <br></br>
                                    Some quick example text to build on the .
                                </p>

                            </div>
                        </div>
                        <div class="">
                            <div>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                            <div className="qualitiesList">
                                <h3>Customer Centricity</h3>
                                <p>Some quick example text to build on the card title and make up the bulk. <br></br>
                                    Some quick example text to build on the .
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </section >
            <section>
                <div class="bg_blue py-5 getStarted">
                    <div class="container mx-auto text-center md:p-8 whiteColor" >
                        <h2 className="text-4xl font-bold mb-5">LET'S GET STARTED</h2>
                        <p className="text-xl text-[#dce9f1]">Some quick example text to build on the card title and make up the bulk. <br></br>the card title and make up the bulk.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;