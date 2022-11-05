import React from 'react'

function About() {
     return (
          <div className="py-44 bg-primary-grey flex items-center justify-center  " id='about-us'>
               <div className="w-11/12 flex items-center justify-center max-sm:flex-col ">
                    <div className="w-5/12 max-sm:w-full">
                         <img className="rounded-xl" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="landing" loading="lazy" ></img>
                    </div>
                    <div className="w-3/4 pl-8 max-sm:w-full max-sm:p-0 max-sm:pt-12">
                         <h2 className="text-3xl font-bold pb-8">Juniper Learning - Learn to code!</h2>
                         <p className="text-lg pb-4">We make educational series' for learning software development. We stand out
                              because of our ease of learning. We want to convey a
                              sense of mystery, while at the same time being inexpensive!</p>
                         <p className="text-lg"> We facilitate online and in contact classNameroom education with flexible schedule and work sessions. Enroll Now, be greater!</p>

                    </div>
               </div>
          </div>
     )
}

export default About
