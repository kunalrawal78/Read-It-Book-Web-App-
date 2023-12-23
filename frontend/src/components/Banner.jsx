import React from 'react'
import Bannercard from '../home/Bannercard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex iteams-center'>
   
   <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
 {/* left side  */}
 <div className=' md:w-1/2 space-y-7 h-full'>
    <h2 className='text-6xl font-bold leading-snug text-black'>Buy and Sell your  Books <span className='text-blue-700'> For the Best Prices</span> </h2>


    <p className='md:w-3/4'>We have a team of experts who handpick the books and ensure that they are in good condition 

    before they are listed on our website. Our collection of second hand books / Used Books is carefully curated and includes rare and hard-to-find titles. We believe that every book deserves a second chance, and we strive to make reading more accessible and affordable for everyone.</p>



   <div className=''>
    <input type='text' name='search' id='' placeholder='Search a Book' className='py-2  px-2 rounded-full outline-none '/>
    <button className='bg-blue-500 py-2 text-white font-medium  px-5  hover:bg-black transition-all ease-in duration-300 rounded-lg'>Search</button>
</div> 

 </div>



 {/* right side  */}
 <div><Bannercard/></div>

   </div>

    </div>
  )
}

export default Banner