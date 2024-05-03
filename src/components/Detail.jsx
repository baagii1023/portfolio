import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../constants/index.js';
import Navbar from './Navbar.jsx';
import { motion } from "framer-motion"
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';
import { styles } from '../styles';

const Detail = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState(null);

    // Find the project matching the projectId
    useEffect(() => {
        const foundProject = projects.find(proj => proj.id === projectId);
        console.log(projectId)
        setProject(foundProject);
    }, [projectId]);

    return (
        <div>
            <div className='relative'>
                <Navbar />
            </div>

            <div className='mt-36 flex justify-center'>
                
                {project && (
                    <div className='mt-10 flex flex-col max-w-4xl mx-auto px-4'>
                        <motion.div variants={textVariant()} className="mt-10 mb-10">
                            <h2 className={`${styles.sectionHeadTextLightDetail}`}>{project.name}</h2>
                        </motion.div>

                        <img src={project.image} alt={project.name} />
                        <p className={styles.sectionSubText}>Technology used</p>
                        {/* Iterate over project.code and render each technology */}
                        <div className="flex gap-10">
                            {project.code.map(tech => (
                                <div key={tech.name} className="technology flex flex-col items-center">
                                    <img src={tech.icon} alt={tech.name} style={{ width: '40px', height: '40px' }} />
                                    <p>{tech.name}</p>
                                </div>
                            ))}
                        </div>
                        <p>Description: {project.description}</p>
                        <div className="flex justify-center gap-4"> 
                            <button className="live-demo flex justify-center 
                                sm:text-[16px] text-[14px] text-timberWolf 
                                font-bold font-beckman items-center py-5 pl-2 pr-3 
                                whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] 
                                w-[125px] h-[46px] rounded-[10px] glassmorphism 
                                sm:mt-[22px] mt-[16px] hover:bg-[rgba(162,107,53,0.96)]
                                transition duration-[0.2s] 
                                ease-in-out"
                                onClick={() => window.open(project.demo, '_blank')}>LIVE DEMO
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Detail;
