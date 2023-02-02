import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { links } from '../data/dummy.js';
 
const Sidebar = () => {

  const activeMenu = true;

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
                onClick={() => {}}
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
                  className="text-2xl rounded-full p-2 
                  hover:bg-light-gray mt-4 block md:hidden"
                >
                  <MdOutlineCancel />
                </button>
              </Tippy>
            </div>
            <div className='mt-10'>

            </div>
          </> 
        )}
      </div>
    </>
  )
}

export default Sidebar