import contactIcon1 from "../Images/Home/graphic-design-blue-icon.png"
import Header from "../Layout/Header"

function ContactUs() {
    return (
        <>
            <Header Name="Contact Us" link="contact" />
            <div class="py-5 contactList">
                <div class="container mx-auto md:py-5 border-b-2 border-black">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="contactInfo text-center">
                            <img src={contactIcon1} alt="" />
                            <h3 class="card-title">PHONE</h3>
                            <p class="card-text">+92-3357-006-141</p>
                            <p>+92-3357-006-141</p>
                        </div>
                        <div class="contactInfo text-center">
                            <img src={contactIcon1} alt="" />
                            <h3 class="card-title">ADDRESS</h3>
                            <p class="card-text">Office No.7,2nd Floor Citygate House 246-250 romford
                                road, London,England,E7 9HZ</p>
                        </div>
                        <div class="contactInfo text-center">
                            <img src={contactIcon1} alt="" />
                            <h3 class="card-title">E-MAIL</h3>
                            <p class="card-text">info@Code-harbor.net</p>
                            <p>info@Code-harbor.net</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-8 contactList border-b-2">
                <div class="container mx-auto md:py-8">
                    <h3 className="mb-8 text-3xl">LET'S GET IN TOUCH</h3>
                    <form class=" mx-auto">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">FIRST NAME</label>
                            </div>
                            <div class="relative z-0 w-full mb-8 group">
                                <input type="email" name="floating_email" id="contact_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">YOUR EMAIL </label>
                            </div>
                            <div class="relative z-0 w-full mb-8 group">
                                <input type="text" name="contact_subject" id="contact_subject" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_subject" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">SUBJECT</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                                <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">PHONE NUMBER</label>
                            </div>

                        </div>
                        <div class="relative z-0 w-full mb-8 group">
                            <input type="text" name="floating_message" id="floating__message" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_message" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">MESSAGE</label>
                        </div>
                        <div class="relative z-0 w-full mb-8 group">
                            <input type="text" name="floating_answer" id="floating_answer" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_answer" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ANSWER</label>
                        </div>
                        <div className="flex ">
                            <input type="checkbox" className="mr-4 mt-2" tabindex="-1" role="button" />
                            <p class="">In publishing and graphic design lorem ipsum is a placeholder text commonly
                                used to demonstrate the visual form of a docoment or a typeface without relying on
                                meaningful contant.</p>
                        </div>
                        <button class="btn btn-primary btn-lg sendMsg">Send Message</button>

                    </form>
                </div>
            </div>
        </>
    )
}
export default ContactUs;