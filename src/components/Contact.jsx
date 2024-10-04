import React,{ useRef, useEffect }from 'react';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { motion } from "framer-motion"
import { fadeIn, textVariant } from '../utils/motion';
import lottie from "lottie-web";
import animation from "../utils/contact.json";
import { social } from '../constants';


const Contact = () => {
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
        container.current.style.width = '80px'; 
        container.current.style.height = '80px'; 
        container.current.style.position = 'absolute';
        container.current.style.left = '640px'; 
        container.current.style.top = '-55px'; 
      }
  }, [])

  return (
    <div className="-mt-[6rem] mx-auto text-center">
        <motion.div variants={textVariant()} animate="visible" className="mx-auto">
            <p className={styles.sectionSubText}>Get in touch</p>
            <div id="animation-container" className="relative hidden md:block">
                <div ref={container} className="absolute"></div>
            </div>
            <h2 className={styles.sectionHeadText}>Contact</h2>
        </motion.div>
        <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className={`${styles.contactSubText} mt-20 sm:mx-2 md:mx-36 leading-18`}>Interested in working together? Let's connect! Whether you have a project in mind, want to discuss potential opportunities, or simply want to say hello. Your ideas, feedback, and questions are always welcome. Let's connect and explore how we can work together to bring your vision to life. <br></br>
            <br></br>
            Drop me a message below, and let's schedule a time to chat.
        </motion.p>
        <motion.div variants={fadeIn('', '', 0.3, 1)}>
            <div className="flex flex-wrap justify-center gap-10 mt-36">
                {social.map((socialItem) => (
                    <div key={socialItem.icon} className="flex flex-col items-center">
                        <a href={socialItem.demo} target="_blank" rel="noopener noreferrer">
                            <div className="w-12 h-16">
                                <img src={socialItem.icon} alt={socialItem.name} />
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </motion.div>
        <div>
            <h4 className= "text-black mt-8">2024 Baagii Avirmed</h4>
        </div>
        
        
    </div>

    

  )
}

export default SectionWrapper(Contact, 'contact');
