import React, { useEffect, useState } from 'react'
import Bookcard from '../components/Bookcard';

const BestSellBook = () => {
    const [book,setbook]=useState([]);
useEffect(() => {
fetch("http://localhost:3000/allbooks").then(res=>res.json()).then(data=>setbook(data.slice(0,8)))
}, [])

  return (
    <div><Bookcard book={book} headline="Best Seller Books"/></div>
  )
}

export default BestSellBook