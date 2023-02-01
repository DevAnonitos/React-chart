import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi"; 

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import './App.css';

const App = () => {

  const activeMenu = true;

  return (
    <>
      <div>
        <BrowserRouter>
          <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4" style={{ zIndex: '1000'}}>
              <Tippy 
                content="Settings" 
                zIndex={"50"}
              >
                <button
                  type="button"
                  style={{ 
                    background: 'gray', 
                    borderRadius: '50%' 
                  }}
                  className="text-3xl text-white p-3 
                  hover:drop-shadow-xl 
                  hover:bg-light-gray"
                >
                  <FiSettings />
                </button>
              </Tippy>
            </div>
            {/* ================Active Menu=============================== */}
            {activeMenu ? (
              <div 
                className="w-72 fixed sidebar 
                dark:bg-secondary-dark-bg bg-white"
              >
                Sidebar
              </div>
            ): (
              <div className="w-0 dark:bg-secondary-dark-bg">
                Sidebar w-0
              </div>
            )}
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
