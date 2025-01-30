import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image';
import SearchBar from './SearchBar';
import NavbarIcons from './NavbarIcons';

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      <div className="flex items-center justify-between h-full md:hidden">
        {/* Mobile */}
        <Link href="/">
          <div className="text-2xl tracking-wide">LAMA</div>
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center h-full justify-between gap-8">
        {/* LEFT */}
        <div className="w-1/3">
          <Link href="/" className='flex gap-3 items-center'>
          <Image src="/logo.png" alt='logo img' width={24} height={24}/>
            <div className="text-2xl tracking-wide">LAMA</div>
          </Link>
        </div>

        {/* RIGHT */}
        <div className="w-2/3 flex items-center justify-between gap-8">
        <SearchBar/>
        <NavbarIcons/>
        </div>
      </div>
    </div>
  );
}

export default Navbar
