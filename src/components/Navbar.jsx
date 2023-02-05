import React, { useEffect } from 'react'
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
          className='relative text-xl rounded-full p-2 hover:bg-light-gray'
        >
          <span
            style={{ background: dotColor}}
            className='absolute inline-flex rounded-full h-2 w-2 right-2 top-1'
          />
          {icon}
        </button>
      </Tippy>
    </>
  )
};


const Navbar = () => {

  const { 
    activeMenu, 
    setActiveMenu, 
    handleClick, 
    isClicked, 
    setIsClicked, 
    screenSize, 
    setScreenSize 
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <>
      <div 
        className="flex items-center 
        justify-between mx-2 py-4 md:mx-6 relative"
      >
        <NavButton 
          title="Menu"
          customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
          color="blue"
          icon={<AiOutlineMenu />}
        />
        <div className='flex items-center'>
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
            customFunc={() => handleClick('notification')}
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
              onClick={() => handleClick('userProfile')}
            >
              <img 
                src={avatar} 
                alt="User Profile" 
                className="rounded-full w-8 h-8"
              />
              <p>
                <span className="text-gray-400 text-14">Hi,</span>{' '}
                <span className="text-gray-400 font-bold ml-1 text-14">
                  BaoNg
                </span>
              </p>
              <MdKeyboardArrowDown className="text-gray-400 text-14" />
            </div>
          </Tippy>

          {isClicked.cart && (<Cart />)}
          {isClicked.chat && (<Chat />)}
          {isClicked.notification && (<Notification />)}
          {isClicked.userProfile && (<UserProfile />)}
        </div>
      </div>
    </>
  )
}

export default Navbar