import React from 'react'
import { NavLink } from 'react-router-dom'
import Apneck from '../assets/apneck.png'



const NavBar = (props) => {

    let { activeLink, onUpdateActiveLink } = props;



    return (
        <>

            <nav className="bg-[#f6f8fa] dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 shadow-lg">

                <div className="w-[95%] flex flex-wrap items-center justify-between mx-auto p-4">

                    <a onClick={() => onUpdateActiveLink('nature')} href="/" className={activeLink === 'nature' ? "flex items-center w-20 lg:ml-12" : 'flex items-center w-20 lg:ml-12'}>
                        <img src={Apneck} alt="Apneck" />
                    </a>


                    <div className="items-center justify-between hidden lg:ml-auto lg:mr-9 w-full lg:flex lg:w-auto lg:order-1" id="navbar-sticky">

                        <ul className="flex flex-col justify-center items-center lg:items-stretch p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-[#f6f8fa] lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">

                            <li className=''>
                                <NavLink onClick={() => onUpdateActiveLink('nature')} to="/" className={activeLink === 'nature' ? "text-blue-700 singlelink" : " block py-2 pl-3 pr-4 bg-[#f6f8fa] text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 "}> Nature </NavLink>
                            </li>
                            <li className=''>
                                <NavLink onClick={() => onUpdateActiveLink('city')} to="/city" className={activeLink === 'city' ? "text-blue-700 singlelink" : " block py-2 pl-3 pr-4 bg-[#f6f8fa] text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 "}> City </NavLink>
                            </li>
                            <li className=''>
                                <NavLink onClick={() => onUpdateActiveLink('technology')} to="/technology" className={activeLink === 'technology' ? "text-blue-700 singlelink" : " block py-2 pl-3 pr-4 bg-[#f6f8fa] text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 "}> Technology </NavLink>
                            </li>
                            <li className=''>
                                <NavLink onClick={() => onUpdateActiveLink('food')} to="/food" className={activeLink === 'food' ? "text-blue-700 singlelink" : " block py-2 pl-3 pr-4 bg-[#f6f8fa] text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 "}> Food </NavLink>
                            </li>
                            <li className=''>
                                <NavLink onClick={() => onUpdateActiveLink('still_life')} to="/still_life" className={activeLink === 'still_life' ? "text-blue-700 singlelink" : " block py-2 pl-3 pr-4 bg-[#f6f8fa] text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 "}> StillLife </NavLink>
                            </li>
                            <li className=''>
                                <NavLink onClick={() => onUpdateActiveLink('abstract')} to="/abstract" className={activeLink === 'abstract' ? "text-blue-700 singlelink" : " block py-2 pl-3 pr-4 bg-[#f6f8fa] text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 "}> Abstract </NavLink>
                            </li>
                            <li className=''>
                                <NavLink onClick={() => onUpdateActiveLink('wildlife')} to="/wildlife" className={activeLink === 'wildlife' ? "text-blue-700 singlelink" : " block py-2 pl-3 pr-4 bg-[#f6f8fa] text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 "}> Wildlife </NavLink>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>


        </>
    )
}

export default NavBar
