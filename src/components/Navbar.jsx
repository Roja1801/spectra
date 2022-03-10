import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { IoMdAdd, IoMdSearch } from 'react-icons/io'
import { Toggle } from './Toggle';
const Navbar = ({searchTerm,setSearchTerm,user}) => {
  const navigate = useNavigate();
  if(!user) return null;
  return (
    <div className='flex gap-2 md:gap-5 w-full mt-5 pb-7 bg-cyan-50 dark:bg-gray-900'>
      <div className='flex justify-start items-center w-full px-2  bg-cyan-50 border-none outline-none focus-within:shadow-sm dark:bg-gray-900'>
        <IoMdSearch fontSize={21} className='ml-1 text-cyan-800 dark:text-cyan-500' />
        <input type="text" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search" value={searchTerm} onFocus={() => navigate('/search')} 
        className="p-2 w-full dark:bg-gray-800 bg-white outline-none dark: rounded-lg shadow-md dark:text-white"
        />
        <div className='mt-0 ml-2'>
        <Toggle />
        </div>
        
      </div>
      
      <div className='flex gap-3 justify-center items-center'>
        
        <Link to={`user-profile/${user?._id}`} className='hidden md:block' >
          <img src={user.image} alt="user" className='w-14 h-12 rounded-lg' />
        </Link>
        
        <Link to='create-pin' className='bg-cyan-700 hover:bg-cyan-800 text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center dark:bg-cyan-400' >
          <IoMdAdd />
        </Link>

      </div>
      
    </div>

  )
}

export default Navbar