import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";

//=================================== Components=============================
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';

// Style
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import ClipLoader from "react-spinners/ClipLoader";
import './App.css';

import { useStateContext } from "./contexts/ContextProvider";

const EcommerceView = lazy(() => delayView(import('./pages/Ecommerce')));

// ==============Delay functions ============================
function delayView(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 1500);
  }).then(() => promise);
}

const App = () => {

  const { activeMenu }  = useStateContext();

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
                dark:bg-secondary-dark-bg bg-white
                transition-all duration-200 ease-in-out
                delay-75 scroll-smooth scroll-m-1"
              >
                <Sidebar />
              </div>
            ): (
              <div
                className="w-0 dark:bg-secondary-dark-bg
                "
              >
                <Sidebar />
              </div>
            )}
            <div
              className={
                activeMenu
                  ? 'dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full '
                  : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
              }
            >
              <div
                className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full"
              >
                <Navbar />
              </div>

              <div>
                <Suspense
                  fallback={
                    <div className="flex justify-center items-center">
                      <ClipLoader
                        title="Loading..."
                        color="blue"
                        size={30}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                      />
                    </div>
                  }
                >
                  <Routes>
                    {/* dashboard  */}
                    <Route path="/" element={(<EcommerceView />)} />
                    <Route path="/ecommerce" element={(<EcommerceView />)} />

                    {/* pages  */}
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/customers" element={<Customers />} />

                    {/* apps  */}
                    <Route path="/kanban" element={<Kanban />} />
                    <Route path="/editor" element={<Editor />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/color-picker" element={<ColorPicker />} />

                    {/* charts  */}
                    <Route path="/line" element={<Line />} />
                    <Route path="/area" element={<Area />} />
                    <Route path="/bar" element={<Bar />} />
                    <Route path="/pie" element={<Pie />} />
                    <Route path="/financial" element={<Financial />} />
                    <Route path="/color-mapping" element={<ColorMapping />} />
                    <Route path="/pyramid" element={<Pyramid />} />
                    <Route path="/stacked" element={<Stacked />} />
                  </Routes>
                </Suspense>
              </div>

              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
