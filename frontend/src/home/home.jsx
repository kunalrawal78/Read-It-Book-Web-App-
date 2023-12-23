import React from 'react'
import Banner from '../components/Banner';

import BestSellBook from './BestSellBook';
import Favbook from './Favbook';
import Promobanner from './Promobanner';
import Otherbooks from './Otherbooks';
import Review from './Review';



const Home = () => {
  return (
<div className=''>


 
<Banner/>
<BestSellBook/>
<Favbook/>
<Promobanner/>
<Otherbooks/>
<Review/>

  </div> 
  )
}

export default Home;