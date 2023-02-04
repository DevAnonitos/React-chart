import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';

// Style
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

// data
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from './';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
  return (
    <>
      <Tippy
        content={title}
        placement='bottom'
      >
        <button
          type='button'
          onClick={customFunc}
          style={{ color }}
          className='relative text-xl rounded-full p-3 hover:bg-light-gray'
        >
          <span
            style={{ background: dotColor}}
            className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
          >
            {icon}
          </span>
        </button>
      </Tippy>
    </>
  )
};


const Navbar = () => {

  const { activeMenu, setActiveMenu, handleClick } = useStateContext();

  return (
    <>
      <div className="flex justify-between p-2 md:mx-6 relative">
        <NavButton 
          title="Menu"
          customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
          color="blue"
          icon={<AiOutlineMenu />}
        />
        <div className='flex'>
          <NavButton 
            title="Cart"
            customFunc={() => handleClick('cart')}
            color="blue"
            icon={<FiShoppingCart />}
          />
          <NavButton 
            title="Chat"
            dotColor="#03C9D7"
            customFunc={() => handleClick('chat')}
            color="blue"
            icon={<BsChatLeft />}
          />
          <NavButton 
            title="Notifications"
            dotColor="#03C9D7"
            customFunc={() => handleClick('notifications')}
            color="blue"
            icon={<RiNotification3Line />}
          />
          <Tippy
            content="Profile"
            placement='bottom'
          >
            <div 
              className='flex items-center gap-2 
              cursor-pointer p-1 hover:bg-light-gray rounded-lg'
              onClick={() => handleClick('profile')}
            >

            </div>
          </Tippy>
        </div>
      </div>
    </>
  )
}

export default Navbar