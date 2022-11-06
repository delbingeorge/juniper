import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';


function Testimonials() {

     return (
          <div className=' bg-primary-grey h-82 py-28 flex flex-col items-center justify-around'>
               <div>
                    <h1 className="text-3xl font-bold text-center max-sm:text-3xl pb-8">Testimonials</h1>
               </div>

               <div className='w-8/12 flex flex-row items-center justify-between pb-4 max-sm:w-full max-sm:justify-around'>
                    <Link to=''><img className="w-32 h-32 rounded-full hover:border-8 duration-50 max-sm:w-20 max-sm:h-20 max-sm:border-none" alt='testimonial' src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"></img></Link>
                    <Link to='second' ><img className="w-32 h-32 rounded-full hover:border-8 duration-50 max-sm:w-20 max-sm:h-20 max-sm:border-none" alt='testimonial' src="https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=862&q=80"></img></Link>
                    <Link to='third'><img className="w-32 h-32 rounded-full hover:border-8 duration-50 max-sm:w-20 max-sm:h-20 max-sm:border-none" alt='testimonial' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"></img></Link>
               </div>


               <Routes>
                    <Route path='' element={
                         <div className='max-sm:px-8'>
                              <h2 className="text-4xl font-bold text-center max-sm:text-2xl py-6">"Thanks guys, keep up the good work!<br></br> We've seen amazing results already."</h2>
                              <h3 className="text-2xl font-bold text-center max-sm:text-xl">- John Doe</h3>
                         </div>}></Route>

                    <Route path='second' element={

                         <div className='max-sm:px-8'>
                              <h2 className="text-4xl font-bold text-center max-sm:text-2xl py-6">"I will recommend you to my colleagues. <br></br>Thanks guys, keep up the good work!"</h2>
                              <h3 className="text-2xl font-bold text-center max-sm:text-xl">- Verona Jakes</h3>
                         </div>}></Route>

                    <Route path='third' element={

                         <div className='max-sm:px-8'>
                              <h2 className="text-4xl font-bold text-center max-sm:text-2xl py-6">"Juniper is worth much more than I paid. <br></br>I couldn't have asked for more than this."</h2>
                              <h3 className="text-2xl font-bold text-center max-sm:text-xl">- Mike Davis</h3>
                         </div>}></Route>
               </Routes >


          </div >
     )
}

export default Testimonials
