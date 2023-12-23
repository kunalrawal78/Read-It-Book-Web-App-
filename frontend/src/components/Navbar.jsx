import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// react icons
import { PiBooksBold } from "react-icons/pi"
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { AuthContext } from '../contects/AuthProvider';

const Navbar = () => {
    const [IsMenuOpen, setIsMenuOpen] = useState(false);
    const [IsSticky, setIsSticky] = useState(false);

    const {user}=useContext(AuthContext);
    console.log(user);

    const toggleMenu = () => {
        setIsMenuOpen(!IsMenuOpen);

    }
    useEffect(() => {
        const handlescroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true)
            }
            else {
                setIsSticky(false)

            }
        }
        window.addEventListener("scroll", handlescroll)
        return () => {
            window.addEventListener("scroll", handlescroll);

        }

    }, [])

    const navItems = [
        { link: "Home", path: '/' },
        { link: "Shop", path: '/shop' },
        { link: "Blog", path: '/blog' },
        { link: "Sell your Book", path: '/admin/dashboard' },
        { link: "About", path: '/about' },




    ]


    return (
        <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 '>
            <nav className={`py-4 lg:px-24 px-4 ${IsSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
                <div className='flex justify-between items-center gap-8 text-base'>

                    <Link to="/" style={{ fontSize: "25px" }} className=' text-2x1 font-bold text-blue-700 flex items-center gap-2' ><PiBooksBold className='inline-block' />Read It</Link>
             
                {/* nav for other links */}
                <ul className='md:flex space-x-12 hidden '>
                    {navItems.map(({ link, path }) => <Link key={path} to={path} className='block uppercase cursor-pointer text-base text-black  hover:text-blue-700'>{link}</Link>

                    )}
                </ul>

                <div className='space-x-12 hidden lg:flex items-center'>
                    <button><FaBarsStaggered className='w-5 hover:text-blue-700' /></button>
                   {
                    user?user.email:""
                   }
                </div>

                {/* menu for mobile */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className=' text-black focus:outline-none'>
                        {IsMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered className='h-5 w-5 text-black' />}
                    </button>

                </div>
            </div>

            {/* for sm devices */}

            <div className={`space-y-4 mt-14 py-7 bg-blue-700 ${IsMenuOpen ? " block fixed top-0 right-0 left-0 ":"hidden" }`}>
                  {navItems.map(({ link, path }) => <Link key={path} to={path} className='block uppercase cursor-pointer text-base text-white '>{link}</Link>

                  )}
            </div>

     
            </nav>
        </header>
    )
}

export default Navbar