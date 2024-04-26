import React,{ useRef, useEffect }from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { motion } from "framer-motion";
import { navLinks } from '../constants';
import { Baagii_black, bwmap, worldmap } from '../assets';
import lottie from "lottie-web";
import animation from "../utils/J1Pa0XH7n5.json";

const Hero = () => {
  const container = useRef(null); 
  const animationload = useRef(true);
  useEffect(() => {
    if (animationload.current){
      lottie.loadAnimation({
        animationData: animation,
        autoplay: true,
        container: container.current,
        loop: true,
        renderer: "svg",
      })
      animationload.current = false
    }
    // Adjust the size of the container element
    if (container.current) {
      container.current.style.width = '200px'; // Set the width to your desired value
      container.current.style.height = '200px'; // Set the height to your desired value
      container.current.style.position = 'relative'; // Ensure position is relative or absolute for left property to work
      container.current.style.left = '-85px'; // Move 100px to the left
      container.current.style.top = '-70px'; // Move 100px up

    }
  }, [])

  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
         
          {/* animation */}
          <div ref={container} id="animation-container"></div>
          <div>
            <h1 className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              Hi, I'm{' '}
              <span className="sm:text-battleGray sm:text-[90px]  text-battleGray text-[50px] font-mova font-extrabold uppercase">
                Baagii Avirmed
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              Front-End Web Developer |<br className="sm:block hidden" />
              UI/UX Designer
            </p>
          </div>
          
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>
          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div className="hidden sm:hidden md:hidden lg:block xl:block"> {/* Hide on screens smaller than 400 pixels */}
          <img
            className="absolute bottom-0 ml-[50vw] 
            lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            sm:h-[90vh] md:h-[100vh] xl:h-[100vh]"
            src={Baagii_black}
            alt="Baagii photo"
          />
        </div>
      </section>
    </>
  );
};

export default Hero