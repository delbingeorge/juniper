import React from 'react'

function Faq() {
     return (
          <div className=' w-100 px-16 py-40 max-sm:p-8'>
               <div>
                    <h1 className="text-3xl font-bold text-center max-sm:text-3xl pb-14">Frequently Asked Questions</h1>
               </div>
               <div className='w-full flex items-start justify-between max-sm:flex-wrap flex-row'>
                    <div className='w-3/12 max-sm:w-full py-2'>
                         <h1 className='font-bold text-xl'>What is juniper?</h1>
                         <p className='text-md'>We make educational series' for learning software development. We stand out because of our ease of learning. We want to convey a sense of mystery, while at the same time being inexpensive!</p>
                    </div>
                    <div className='w-3/12 max-sm:w-full py-2'>
                         <h1 className='font-bold text-xl'>Why juniper?</h1>
                         <p className='text-md'>Flexible and affordable pricing, select from 3 different pricing package which suits your need, this is what makes juni different from others</p>
                    </div>

                    <div className='w-3/12 max-sm:w-full py-2'>
                         <h1 className='font-bold text-xl'>24/7, really?</h1>
                         <p className='text-md'>Yup really we provide 24/7 support to our users</p>
                    </div>
               </div>
               <div className='w-full flex items-start justify-between max-sm:flex-wrap flex-row'>
                    <div className='w-3/12 max-sm:w-full py-2'>
                         <h1 className='font-bold text-xl'>Regarding cancelation.</h1>
                         <p className='text-md'>You can cancel your subscription any time in a period of one week.</p>
                    </div>
                    <div className='w-3/12 max-sm:w-full py-2'>
                         <h1 className='font-bold text-xl'>How can i share course to my friend?</h1>
                         <p className='text-md'>If you are on Pro package, <br></br>then create a community add your friends to it then add the course they want, its that simple!</p>
                    </div>
                    <div className='w-3/12 max-sm:w-full py-2'>
                         <h1 className='font-bold text-xl'>Does your certificate has value?</h1>
                         <p className='text-md'>Of course, your juniper course completion certificate has value which is equal to degree certificate by which you can apply for your dream job. </p>
                    </div>
               </div>

          </div>
     )
}

export default Faq