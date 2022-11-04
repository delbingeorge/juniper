import React, { useState } from "react";
import { Link } from 'react-scroll';

function Nav() {
    const [show, setShow] = useState(false)
    return (
        <div>
            <nav className=" w-100 flex items-center pt-4 px-6">
                <div className="w-2/6 max-sm:w-2/6">
                    <h1 className="text-3xl font-bold hover:text-primary-blue cursor-pointer">Juniper</h1>
                </div>
                <div className="w-4/6 flex items-center justify-between font-bold max-sm:hidden">
                    <Link
                        to="about-us" spy={true} smooth={true} offset={10} duration={1950}
                        className=" uppercase tracking-wide text-sm hover:text-primary-blue duration-200 cursor-pointer"
                    >
                        About Us
                    </Link>
                    <Link
                        to=""
                        className=" uppercase tracking-wide text-sm hover:text-primary-blue duration-200 cursor-pointer"
                    >
                        Courses
                    </Link>
                    <button class="bg-primary-blue text-sm text-primary-white uppercase tracking-wide hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full  hover:bg-blue-alpha duration-200">
                        Contact
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
