
import { StartButton } from '../StartButton/StartButton';
import logo from './../imgs/lavygin.jpg';
import React, { useState } from 'react';

export function NavMenus() {
    const [showMenu, setShowMenu] = useState(false);
    const handleClick = () => {
        setShowMenu(!showMenu);
      };
    return(
        <nav className=" container transition-all duration-3000 relative bg-sitered mx-auto p-3 rounded-lg min-w-[265px] h-150 mt-3 ">
        

   
        <div className="flex items-center justify-between">
          {/* logo  className={`hamburger ${showMenu ? "open":""}  block lg:max-w-[0px] lg:w-[0px]  `}*/}
          <div className="logo pt-2 rounded-lg mx-5 overflow-hidden">
                <img src={logo} alt="" className="max-h-20  rounded-lg  " />
          </div>
          {/* menuItems */}

          <div className="hidden w-300 lg:flex space-x-6 text-white| mr-5 ">
            <a href="#" className="text-gray-light hover:text-white">Домашняя</a>
            <a href="#" className="text-gray-light hover:text-white">Воторое</a>
            <a href="#" className="text-gray-light hover:text-white">Супы</a>
            <a href="#" className="text-gray-light hover:text-white">Салаты</a>
            <a href="#" className="text-gray-light hover:text-white">Выпечка</a>
            <a href="#" className="text-gray-light hover:text-white">Десерты</a>
            <a href="#" className="text-gray-light hover:text-white">Мороженное</a>
            <a href="#" className="text-gray-light hover:text-white">Напитки</a> 
          </div>
         { StartButton()}


                <div id="menu-btn" className={`hamburger ${showMenu ? "open":""} lg:hidden`} onClick={handleClick}>
                    <span className="hamburger-top   "></span>
                    <span className="hamburger-middle  "></span>
                    <span className="hamburger-bottom   "></span>
                </div>

        </div>            

        {showMenu && 
                    <div id="menu" className="absolute flex  flex-col  items-center self-end  
                    py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-lg md:hidden">
                        <a href="#" className="text-gray-light hover:text-white">Домашняя</a>
                        <a href="#" className="text-gray-light hover:text-white">Воторое</a>
                        <a href="#" className="text-gray-light hover:text-white">Супы</a>
                        <a href="#" className="text-gray-light hover:text-white">Салаты</a>
                        <a href="#" className="text-gray-light hover:text-white">Выпечка</a>
                        <a href="#" className="text-gray-light hover:text-white">Десерты</a>
                        <a href="#" className="text-gray-light hover:text-white">Мороженное</a>
                        <a href="#" className="text-gray-light hover:text-white">Напитки</a> 
                    </div>
        }

        
      </nav>
    )
    
}