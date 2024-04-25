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
      container.current.style.width = '700px'; // Set the width to your desired value
      container.current.style.height = '700px'; // Set the height to your desired value
      container.current.style.position = 'absolute'; // Ensure position is relative or absolute for left property to work
      container.current.style.left = '805px'; // Move 100px to the left
      container.current.style.top = '300px'; // Move 100px up

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
        I'm Byambabayar Baagii Avirmed, a driven Junior Front-End Web Developer currently pursuing my education at BCIT in Vancouver, BC, with graduation anticipated in May. Proficient in HTML, CSS, JavaScript, and various frameworks such as React and WordPress, I specialize in crafting visually captivating and user-friendly interfaces. My portfolio showcases projects that demonstrate my commitment to delivering high-quality web experiences, alongside problem-solving skills and a collaborative approach.
      </motion.p>
      <motion.div variants={fadeIn('', '', 1.5, 1)}>
        <div ref={container} id="animation-container"></div>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-10">
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