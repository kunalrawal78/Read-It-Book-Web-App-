import React from 'react'
import { useState,useEffect } from 'react';
import Bookcard from '../components/Bookcard';


const Otherbooks = () => {
    const [book,setbook]=useState([]);
useEffect(() => {
fetch("http://localhost:3000/allbooks").then(res=>res.json()).then(data=>setbook(data.slice(7,14)))
}, [])

  return (
    <div><Bookcard book={book} headline="Other Books"/></div>
  )
}

export default Otherbooks