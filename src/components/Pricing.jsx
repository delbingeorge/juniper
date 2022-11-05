import React from 'react'

function Pricing() {
     return (
          <div>
               <div className=' py-16'>
                    <div className='px-4'>
                         <h1 className="text-3xl font-bold text-center max-sm:text-2xl">Much more than you pay.</h1>
                         <h1 className="text-2xl font-bold text-center max-sm:text-lg">select package that suits you!</h1>
                    </div>
                    <div className='w-full flex flex-row justify-around pt-12 max-sm:flex-col max-sm:items-center max-sm:justify-center max-md:flex-col max-md:items-center'>
                         <div className='h-3/6  w-3/12 rounded-2xl pl-8 py-20 border max-sm:w-3/4 max-md:w-4/6 max-sm:py-4 '>
                              <h2 className='text-xl text-primary-blue pb-14'>Lite</h2>

                              <h1 className='text-5xl text-primary-blue font-semibold'>$20<span className='text-sm text-primary-blue font-semibold'>/month</span></h1>
                              <h3 className='text-sm capitalize text-primary-blue pt-4 pb-4'>package details</h3>

                              <ul className='pl-4 pb-8'>
                                   <li className='text-primary-blue pb-2'>One premium course</li>
                                   <li className='text-primary-blue pb-2'>24/7 support</li>
                                   <li className='text-primary-blue pb-2'>Any time cancelation</li>
                              </ul>
                              <button className='py-2 px-6 rounded-lg border uppercase font-semibold tracking-wider bg-primary-blue text-primary-white text-sm hover:bg-primary-white hover:text-primary-blue duration-200'>Select</button>
                         </div>
                         <div className='h-3/6 bg-primary-blue w-3/12 rounded-2xl pl-8 py-20 max-sm:w-3/4 max-md:w-4/6 max-sm:py-4 max-sm:my-4 max-md:my-4'>
                              <h2 className='text-xl text-primary-white pb-14'>Basic</h2>
                              <h1 className='text-5xl text-primary-white font-semibold'>$40<span className='text-sm text-primary-white font-semibold'>/month</span></h1>
                              <h3 className='text-sm capitalize text-primary-white pt-4 pb-4'>package details</h3>
                              <ul className='pl-4 pb-8'>
                                   <li className='text-primary-white pb-2'>One premium course</li>
                                   <li className='text-primary-white pb-2'>24/7 support</li>
                                   <li className='text-primary-white pb-2'>Any time cancelation</li>
                              </ul>
                              <button className='py-2 px-6 rounded-lg border uppercase font-semibold tracking-wider bg-primary-white text-primary-blue text-sm hover:bg-primary-blue hover:text-primary-white duration-200'>Select</button>
                         </div>
                         <div className='h-3/6  w-3/12 rounded-2xl pl-8 py-20  border max-sm:w-3/4 max-md:w-4/6 max-sm:py-4'>
                              <h2 className='text-xl text-primary-blue pb-14'>Pro</h2>
                              <h1 className='text-5xl text-primary-blue font-semibold'>$60<span className='text-sm text-primary-blue font-semibold'>/month</span></h1>
                              <h3 className='text-sm capitalize text-primary-blue pt-4 pb-4'>package details</h3>
                              <ul className='pl-4 pb-8'>
                                   <li className='text-primary-blue pb-2'>One premium course</li>
                                   <li className='text-primary-blue pb-2'>24/7 support</li>
                                   <li className='text-primary-blue pb-2'>Any time cancelation</li>
                              </ul>
                              <button className='py-2 px-6 rounded-lg border uppercase font-semibold tracking-wider bg-primary-blue text-primary-white text-sm hover:bg-primary-white hover:text-primary-blue duration-200'>Select</button>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Pricing