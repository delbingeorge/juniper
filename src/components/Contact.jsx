import React from 'react'

function Contact() {
     return (
          <div id='contact'>
               <div class="bg-gray-50">
                    <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
                         <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
                              <span class="block">Ready to dive in?</span>
                              <span class="block text-indigo-600">Kick start your carrier today.</span>
                         </h2>
                         <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                              <div class="inline-flex rounded-md shadow">
                                   <a href="https://www.delb.in" class="inline-flex items-center justify-center rounded-md border border-transparent bg-primary-blue px-5 py-3 text-base font-medium text-primary-white hover:bg-indigo-700">Get started</a>
                              </div>
                              <div class="ml-3 inline-flex rounded-md shadow">
                                   <a href="https://www.delb.in" class="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50">Learn more</a>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Contact
