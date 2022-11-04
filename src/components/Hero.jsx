import React from "react";

function Hero() {
    return (
        <div className=" h-4/4 flex flex-col items-center">
            <div className="pt-48 pb-48 max-sm:pt-24">
                <div className="flex items-center justify-center flex-col">
                    <h1 className="text-7xl font-bold text-center max-sm:text-6xl">
                        <span className="text-primary-blue text-extrabold ">Juniper</span>,
                        <br></br>
                        from darkness
                        <br></br>
                        to
                        light!
                    </h1>
                    <p className="text-2xl tracking-wide py-9 text-center">
                        Enroll now and get up-to <span className="font-bold">40%</span> off on <br></br>every course you join!
                    </p>
                    <button class="bg-primary-blue text-primary-white font-bold py-2 px-8 tracking-wide rounded-full hover:bg-blue-alpha duration-200">
                        Enroll Now
                    </button>
                </div>
                {/* <img className="h-96 " src={heroImg} alt="illustration"></img> */}
            </div>
        </div>
    );
}

export default Hero;
