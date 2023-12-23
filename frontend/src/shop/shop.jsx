import React, { useEffect, useState } from 'react'
import { Card } from 'flowbite-react';
const Shop = () => {
  const [books,setbooks]=useState([]);
  useEffect(() => {
  fetch('http://localhost:3000/all-books').then(res=>res.json()).then(data=>setbooks(data));

  }, [])
  
  return (
<>
<div className='mt-28 px-4 lg:px-24'>

  <h1 className='text-5xl font-bold text-balck text-center'>All Books Are Here</h1>
  <div className='grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8 mt-11 ' >
    {
      books.map(books=>
        <Card    >
      
   <img src={books.ImageUrl} className='h-96'/>

      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      <p>
        {books.BookTitle}
      </p>
        
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">

       {books.BookDescription}
      </p>
      <button  className='font-semibold rounded-lg text-white bg-blue-700 px-3 py-3 '>Buy Now</button>
    </Card>

      )
    }
  </div>
</div>
</>

  )
}

export default Shop;