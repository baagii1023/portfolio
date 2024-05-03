import React,{ useRef, useEffect }from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import lottie from "lottie-web";
import animation from "../utils/about-me.json";

const About = ({index}) => {
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
      container.current.style.width = '700px'; 
      container.current.style.height = '700px'; 
      container.current.style.position = 'absolute'; 
      container.current.style.left = '805px'; 
      container.current.style.top = '550px'; 
    }
  }, [])
  
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        Hey there, I'm Byambabayar Baagii Avirmed! A driven Front-End Web Developer & UI UX Designer, recently graduated from BCIT in Vancouver, BC. With a background as a chef, I bring a unique perspective to my work, stemming from my previous experience in the culinary world. In both fields, attention to detail, creativity, and adaptability are essential, and I seamlessly apply these qualities to web development and design. <br></br>
        <br></br>
        My culinary journey has honed my sense of aesthetics and sharpened my time management skills, which I now bring to the digital realm. Proficient in HTML, CSS, JavaScript, Tailwind, and various frameworks such as React and WordPress, I specialize in crafting visually captivating and user-friendly interfaces.<br></br>
        <br></br>
        What drives me? It's the satisfaction of knowing that I've created something that enhances the user experience and exceeds client expectations. Whether it's troubleshooting a tricky layout or brainstorming innovative design solutions, I'm committed to delivering results that not only look great but also meet client's expectations.
      </motion.p>
      <motion.div variants={fadeIn('', '', 1.5, 1)}>
        <div ref={container} id="animation-container" className="hidden 2xl:block"></div>
      </motion.div>
      <div className="mt-16 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(About, 'about');