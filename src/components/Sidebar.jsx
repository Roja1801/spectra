import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';
import { categories } from '../utils/data';
import { Toggle1 } from './Toggle1';
const isNotActiveStyle = 'flex items-center px-5 py-0 gap-3 text-gray-700 hover:text-black transition-all duration-200 ease-in-out uppercase dark:text-slate-400 dark:hover:text-white';
const isActiveStyle = 'flex items-center px-5 py-0 gap-3 font-extrabold dark:text-white border-r-2 border-cyan-800 dark:border-cyan-500 transition-all duration-200 ease-in-out uppercase';





const Sidebar = ({user, closeToggle }) => {
    const handleCloseSidebar = () => {
        if (closeToggle) closeToggle(false);
      };
     

  return (
    <div className='flex flex-col justify-between bg-cyan-100 h-full overflow-y-scroll min-w-210 hide-scrollbar dark:bg-gray-800 '>
        <div className='flex flex-col'>
        <Link
            to="/"
            className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
            onClick={handleCloseSidebar}
        >
          
         <Toggle1 />
            
        </Link>
        <div className="flex flex-col gap-2 ">
        <NavLink
            to="/"
            className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
            onClick={handleCloseSidebar}
          >
                <RiHomeFill className='dark:text-cyan-500'/>
                Home
        </NavLink>
        <h3 className="mt-2 px-5 py-1 text-base 2xl:text-xl dark:text-white">DISCOVER CATEGORIES</h3>
        {categories.slice(0, categories.length - 1).map((category) => (
            <NavLink
              to={`/category/${category.name}`}
              className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
              onClick={handleCloseSidebar}
              key={category.name}
            >
              <img src={category.image} className='w-8 h-8 rounded-full shadow-sm' alt="category" /> 
              {category.name}
            </NavLink>
          ))}
        </div>

        </div>
        {user && (
        <Link
          to={`user-profile/${user._id}`}
          className="flex my-1 mb-3 gap-2 p-1 items-center bg-cyan-700 dark:bg-cyan-400 rounded-full shadow-lg mx-1"
          onClick={handleCloseSidebar}
        >
          <img src={user.image} className="w-10 h-10 rounded-full" alt="user-profile" />
          <p className='text-white dark:text-black'>{user.userName}</p>
          <IoIosArrowForward className='text-white dark:text-black'/>
        </Link>
      )}
    </div>
  )
}

export default Sidebar