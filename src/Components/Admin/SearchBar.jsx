import React from 'react'
import { IoSearch } from "react-icons/io5";
import { useAdmin } from '../../Contexts/AdminContext';

function SearchBar(props) {
  const {setSearch}=useAdmin()
  return (
    <div className="text-black h-[2.5rem] rounded-full overflow-hidden flex items-center border border-[#9696967e]">
      <form action="" className='h-full flex '>
            <button className="bg-[#fff] h-full pl-2 text-lg" type='submit'><IoSearch/></button>
            <input
              list="search"
              name="search"
              id="searchBar"
              className={`bg-[#fff] border-none h-full pl-4 focus:border-none focus:outline-none outline-none ${props.css}`}
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            </form>
          </div>
  )
}

export default SearchBar