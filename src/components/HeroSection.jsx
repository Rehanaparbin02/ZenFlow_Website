import { motion } from 'framer-motion';
import iphoneImage from '../assets/hero.png';
import './css/herosection.css';

const HeroSection = () => {
  return (
    <>
      <div id="hero" className="hero">
        <motion.h1
          className="mainTitle"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          ZenFlow
        </motion.h1>

        <motion.p
          className="subtitle"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Your Moment, Captured.
        </motion.p>

        <motion.p
          className="heroContent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          By keeping track of your feelings and ideas on a timeline, 
          you may see how your trip develops and include daily self-reflection into your routine.
        </motion.p>
      </div>

      <motion.div
        className="heroImageContainer customOffset"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <img className="heroImage firstImage" src={iphoneImage} alt="iPhone View" />
      </motion.div>

      <motion.button
        className="heroButton"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        Get Started
      </motion.button>
    </>
  );
};

export default HeroSection;
