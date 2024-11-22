"use client"

import Link from 'next/link';
import Image from "next/image";
import logo from "../../public/images/logo.png";
import { useState } from 'react';

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const NavbarToggleHandler = () =>  {
        setIsMenuOpen(!isMenuOpen);
    }


  return (
    <nav className="flex lg:justify-evenly justify-between py-2 sm:px-14 px-6 items-center shadow-sm cursor-pointer">
        <div className={`${isMenuOpen ? "translate-y-0" : "translate-y-[100%]"} bg-white h-full text-center w-[265px] fixed z-50 top-0 left-0 py-4 px-2 shadow-lg transition-all duration-700`}>
        <div className="absolute top-[12%] left-[10%] ">
            <Image src={logo} className="w-[165px]" alt="Ddsgnr Logo"/>
            </div>
            <div className="absolute top-5 right-5" onClick={NavbarToggleHandler}>x</div>
        <ul className="absolute top-[28%] left-[15%] flex flex-col gap-9 text-start">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">Courses</Link></li>
                <li><Link href="/">Services</Link></li>
                <li><Link href="/">Achievement</Link></li>
                <li><Link href="/">About</Link></li>
                <li><Link href="/">Testimonials</Link></li>
            </ul>
            <div className="flex flex-col  gap-7 absolute top-[65%] left-[15%]">
                <button className='py-2 rounded-lg px-16 bg-transparent border text-black border-black transition-all duration-[0.9s] hover:text-white hover:bg-black '>Login</button>
                <button className='py-2 rounded-lg px-16 bg-black border text-white border-black transition-all duration-[0.9s] hover:text-black hover:bg-transparent '>Signup</button>
            </div>
        </div>
        <div className="xl:hidden block font-semibold sm:text-xl text-lg" onClick={NavbarToggleHandler}>☰</div>
        <div className="logo">
            <Image src={logo} className="sm:w-[145px] w-[120px]" alt="Ddsgnr Logo"/>
            </div>
            <ul className="hidden xl:flex gap-9">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">Courses</Link></li>
                <li><Link href="/">Services</Link></li>
                <li><Link href="/">Achievement</Link></li>
                <li><Link href="/">About</Link></li>
                <li><Link href="/">Testimonials</Link></li>
            </ul>
            <div className="md:flex hidden gap-7">
                <button className='py-2 rounded-lg px-8 bg-transparent border text-black border-black transition-all duration-[0.9s] hover:text-white hover:bg-black '>Login</button>
                <button className='py-2 rounded-lg px-8 bg-black border text-white border-black transition-all duration-[0.9s] hover:text-black hover:bg-transparent '>Signup</button>
            </div>
    </nav>
  )
}

export default Navbar;