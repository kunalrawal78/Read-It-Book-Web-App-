import React, { useRef, useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Bookcard.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6'

const Bookcard = ({headline,book}) => {
 
  return (
    <div className='my-16 px-4 lg:px-24'>
    <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>
  {/* cards */}
  <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
        
       {
        book.map(book=><SwiperSlide key={book._id}>
            <Link to={`/book/${book._id}`}>
                <div className='relative'>
                
                    <img src={book.ImageUrl}/>
                    <div className='absolute top-3 right-2 bg-blue-600 hover:bg-black rounded-md  p-2'>
                        <FaCartShopping className='w-4 h-4 text-white '/>
                    </div>
                </div>
                <div>
                    <h2 className='font-bold '>{book.BookTitle}</h2>
                    <p>{book.AuthorName}</p>
                  <div>
                    <p>$10.00</p>
                  </div>
                </div>
            </Link>
        </SwiperSlide>)
       }
      </Swiper>
  </div>

 
    </div>
  )
}

export default Bookcard