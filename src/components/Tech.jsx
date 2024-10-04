import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { programs } from '../constants';
import { Interested } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadTextLight}>My skills</h2>
        <p className={styles.sectionSubText}>Living, learning, & leveling up one day at a time.</p>
        <p className={styles.sectionSubTextLight}>Developer Stack</p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology) => (
          <div key={technology.name} className="flex flex-col items-center">
            <div className="w-12 h-16">
              <img src={technology.icon} alt={technology.name} />
            </div>
            <div className="text-gray-300">{technology.name}</div>
          </div>
        ))}
      </div>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>Software and programs</p>
      </motion.div>

      <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
        {programs.map((program) => (
          <div key={program.name} className="flex flex-col items-center">
            <div className="w-12 h-16">
              <img src={program.icon} alt={program.name} />
            </div>
            <div className="text-gray-300">{program.name}</div>
          </div>
        ))}
      </div>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>learning next</p>
      </motion.div>

      <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
        {Interested.map((Interested) => (
          <div key={Interested.name} className="flex flex-col items-center ">
            <div className="w-12 h-16">
              <img src={Interested.icon} alt={Interested.name} />
            </div>
            <div className="text-gray-300">{Interested.name}</div>
          </div>
        ))}
      </div>

    </>
  );
};


export default SectionWrapper(Tech, '');
