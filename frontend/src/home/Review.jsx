import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Avatar } from 'flowbite-react';
import proPic from '../assets/profile.jpg'
import proPic1 from '../assets/1men.jpg'
import proPic2 from '../assets/2men-distance.jpg'
import proPic3 from '../assets/1w.jpg'



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FaStar} from "react-icons/fa6"
// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';


const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24 '>
    <h2 className='text-5xl  font-bold text-center mb-10 leading-snug'>Our Customers</h2>
    <div>
         <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-md border'>
            <div >
                <div className='text-amber-500 flex gap-2 mb-3 '>
                <Avatar img={proPic} alt="avatar of Jese" rounded  className='h-10 w-10'/>
                <span className='text-black '>gimmy haz</span>
                
                 <FaStar className='my-1'/>
              <FaStar className='my-1'/>
                <FaStar className='my-1'/>  
                <FaStar className='my-1'/>        

                      </div>
                     
                      {/* text */}
                      <div className='mb-10'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a augue justo. Sed eget libero nec lorem malesuada tristique. Etiam imperdiet ipsum sit amet luctus pharetra. Donec auctor odio ut enim blandit, at placerat mi tincidunt. </p>
                        
                      </div>
                      
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-md border'>

        <div>
                <div className='text-amber-500 flex gap-2 mb-3'>
                <Avatar img={proPic1} alt="avatar of Jese" rounded  className='h-10 w-10 rounded-full'/>
                <span className='text-black '>gimmy haz</span>
                 <FaStar className='my-1'/>
              <FaStar className='my-1'/>
                <FaStar className='my-1'/>        
                      </div>
                      
                      {/* text */}
                      <div className='mb-10'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a augue justo. Sed eget libero nec lorem malesuada tristique. Etiam imperdiet ipsum sit amet luctus pharetra. Donec auctor odio ut enim blandit, at placerat mi tincidunt. </p>
                        
                      </div>
                      
            </div>


        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-md border'> 
        <div>
                <div className='text-amber-500 flex gap-2 mb-3'>
                <Avatar img={proPic2} alt="avatar of Jese" rounded  className='h-10 w-10'/>
                <span className='text-black '>gimmy haz</span>
                 <FaStar className='my-1'/>
              <FaStar className='my-1'/>
                <FaStar className='my-1'/>    
                <FaStar className='my-1'/>  
                 <FaStar className='my-1'/>      
                      </div>
                      
                      {/* text */}
                      <div className='mb-10'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a augue justo. Sed eget libero nec lorem malesuada tristique. Etiam imperdiet ipsum sit amet luctus pharetra. Donec auctor odio ut enim blandit, at placerat mi tincidunt. </p>
                        
                      </div>
                      
            </div>
        
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-md border'>

        <div>
                <div className='text-amber-500 flex gap-2 mb-3'>
                <Avatar img={proPic3} alt="avatar of Jese" rounded  className='h-10 w-10'/>
                <span className='text-black '>gimmy haz</span>
                 <FaStar className='my-1'/>
              <FaStar className='my-1'/>
                <FaStar className='my-1'/>        
                      </div>
                      
                      {/* text */}
                      <div className='mb-10'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a augue justo. Sed eget libero nec lorem malesuada tristique. Etiam imperdiet ipsum sit amet luctus pharetra. Donec auctor odio ut enim blandit, at placerat mi tincidunt. </p>
                        
                      </div>
                      
            </div>


        </SwiperSlide>
       
      </Swiper>
    </div>
   

    
    </div>
  )
}

export default Review