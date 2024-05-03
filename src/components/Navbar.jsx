//Navbar.jsx
import React, { useRef, useEffect, useState } from 'react';
import { styles } from '../styles';
import { close, menu, logo, logotext } from '../assets';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import lottie from "lottie-web";
import animation from "../utils/srh9OoKmhw.json";



const Navbar = ({ selectedMode, setSelectedMode }) => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const container = useRef(null); 
  const animationload = useRef(true);
  

  
  useEffect(() => {
    if (animationload.current){
      lottie.loadAnimation({
        animationData: animation,
        autoplay: true,
        container: container.current,
        loop: false,
        renderer: "svg",
        
      })
      animationload.current = false
    }
    // Adjust the size of the container element
    if (container.current) {
      container.current.style.width = '50px'; // Set the width to your desired value
      container.current.style.height = '50px'; // Set the height to your desired value
      container.current.style.position = 'relative'; // Ensure position is relative or absolute for left property to work
      container.current.style.left = '-10px'; // Move 100px to the left
    }
  }, [])
  
  
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img
            src={logo} // your logo comes here
            alt="logo"
            className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain"
          />
          

          {/* if you have text you want besides your logo it comes here.
          Otherwise delete this if you don't need it. */}
          <img
            src={logotext}
            alt="logo"
            className="sm:w-[90px] sm:h-[90px] w-[85px] h-[85px] -ml-[0.6rem] object-contain"
          />
          <div ref={container} id="animation-container"></div>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-french' : 'text-eerieBlack'
              } hover:text-taupe text-[21px] font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          {/* <SliderToggle selected={selectedMode} setSelected={setSelectedMode} /> */}
        </ul>
        

        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] absolute 
                top-0 left-0 w-screen h-[100vh] z-10 menu ${
                  toggle ? 'menu-open' : 'menu-close'
                }`}>
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className="list-none flex flex-col -gap-[1rem] 
                items-start justify-end mt-[10rem] -ml-[35px]">
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`${
                      active === nav.title ? 'text-french' : 'text-eerieBlack'
                    } text-[88px] font-bold font-arenq 
                      uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar