import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { links } from '../data/dummy.js';

import { useStateContext } from '../contexts/ContextProvider.js';
 
const Sidebar = () => {

  const { activeMenu, setActiveMenu } = useStateContext();

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-2xl  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-stone-200 m-2 transition-all duration-200 ease-in-out delay-75';

  const handleCloseSidebar = () => {

  };

  return (
    <>
      <div 
        className='ml-3 h-screen 
        md:overflow-hidden overflow-auto 
        md:hover:overflow-auto pb-10'
      >
        {activeMenu && (
          <>
            <div className='flex justify-between items-center'>
              <Link 
                to="/"
                onClick={() => setActiveMenu(false)}
                className='items-center gap-3 ml-2 
                mt-4 flex text-xl font-extrabold 
                tracking-tight dark:text-white 
                text-slate-900 border-2 border-stone-400 
                px-2 py-1 rounded-lg ring-1 shadow-md ring-slate-400'
              >
                <SiShopware /> <span>Addboard</span>
              </Link>
              <Tippy
                content="Menu"
                placement='right'
              >
                <button 
                  type="button"
                  onClick={() => setActiveMenu(!activeMenu)}
                  className="text-2xl rounded-full p-2 
                  hover:bg-light-gray mt-4 block"
                >
                  <MdOutlineCancel />
                </button>
              </Tippy>
            </div>
            <div className='mt-10'>
              {links.map((items) => (
                <div key={items.title}>
                  <p className='text-gray-600 m-3 mt-4 uppercase'>
                    {items.title}
                  </p>
                  {items.links.map((link) => (
                    <NavLink
                      to={`/${link.name}`}
                      key={link.name}
                      onClick={handleCloseSidebar}
                      className={
                        ({ isActive }) => (isActive ? activeLink : normalLink)
                      }
                    >
                      {link.icon}
                      <span 
                        className="capitalize text-lg 
                        antialiased font-medium text-emerald-500"
                      >
                        {link.name}
                      </span>
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
          </> 
        )}
      </div>
    </>
  )
}

export default Sidebar