import React from 'react'
import Favbookimg from '../assets/favoritebook.jpg'
import { Link } from 'react-router-dom'
const Favbook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12 '>
<div className='md:w-1/2'>
<img src={Favbookimg} alt='' className='rounded md:w-10/12'/>

</div>
<div className='md:w-1/2 space-x-6'>
    <h2 className='text-5xl font-bold my-5 md:w-3/4 leading snug'>Find Your  Favorite <span className='text-blue-700'> Book Here !</span></h2>
    <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet ac metus at aliquam. Curabitur at urna sed mauris tincidunt vulputate nec sit amet augue. Nunc consequat sem at purus porttitor, eget ultricies ipsum vehicula. Proin et dolor mauris. Suspendisse pulvinar enim ut suscipit hendrerit</p>

    <div className='flex  flex-col sm:flex-row gap-6 justify-between md: w-3/4 my-14 '>
        <div >
            <h3 className='text-3xl font-bold'>800+</h3>
            <p className='text-base'>Book Listening</p>
        </div>
        <div>
            <h3 className='text-3xl font-bold'>500+</h3>
            <p className='text-base'>Register Users</p>
        </div>
        <div>
            <h3 className='text-3xl font-bold'>1200+</h3>
            <p className='text-base'>PDF Downloads</p>
        </div>
    </div>
<Link to='/shop' className='mt-12 block'>
   <button className='bg-blue-700 rounded-md text-white px-4 py-3 font-semibold hover:bg-black transition-all ease-in duration-300'>Explore More</button>
</Link>

</div>
    </div>
  )
}

export default Favbook