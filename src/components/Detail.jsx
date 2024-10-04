import React, { useEffect, useState } from 'react';
import { SectionWrapper } from '../hoc';
import { useParams } from 'react-router-dom';
import { projects } from '../constants/index.js';
import Navbar from './Navbar.jsx';
import { motion } from "framer-motion"
import { fadeIn, textVariant, } from '../utils/motion';
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
        <div className= 'flex justify-center'>
            <Navbar />
            {project && (
                <div className='flex flex-col max-w-4xl mx-0 auto'>
                    <motion.div variants={textVariant()} className=" mb-10 flex justify-between">
                        <h2 className={`${styles.sectionHeadTextLightDetail}`}>{project.name}</h2>
                        <div className="flex justify-center gap-4"> 
                        <button className="live-demo flex justify-center 
                            sm:text-[16px] text-[14px] text-timberWolf 
                            font-bold font-beckman items-center py-5 pl-2 pr-3 
                            whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] 
                            w-[125px] h-[46px] rounded-[10px] glassmorphism 
                            sm:mt-[5px] mt-[16px] hover:bg-[rgba(162,107,53,0.96)]
                            transition duration-[0.2s] 
                            ease-in-out"
                            onClick={() => window.open(project.demo, '_blank')}>LIVE DEMO
                        </button>
                    </div>
                    </motion.div>
                    <div className='mb-6'>
                        <div className='relative mb-6'>
                            <img src={project.image} alt={project.name} className="rounded-md" />
                            <div className="absolute inset-0 bg-jetLight opacity-[0.3] rounded-md"></div>
                        </div>
                    </div>

                    <motion.div variants={textVariant()}  className="mt-2 mb-1">
                        <p className={styles.sectionSubText}>Description:</p>
                    </motion.div>

                    <motion.p
                    variants={fadeIn('', '', 0.1, 1)}
                    className="mt-4 mb-7 text-taupe text-[18px] max-w-3xl leading-[30px]"> 
                    {project.fulldescription}
                    </motion.p>

                    <motion.div variants={textVariant()}  className="mb-8">
                        <p className={styles.sectionSubText}>Technology used</p>
                    </motion.div>
                    
                    {/* Iterate over project.code and render each technology */}
                    <div className="flex gap-10 mb-10">
                        {project.code.map(tech => (
                            <div key={tech.name} className="technology flex flex-col items-center">
                                <img src={tech.icon} alt={tech.name} style={{ width: '30px', height: '30px' }} />
                                <p className={styles.sectionSubTextDetail}>{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SectionWrapper(Detail, 'projects');