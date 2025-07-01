import './css/about.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id="about" className="aboutSection">
      <motion.h2
        className="verticalHeading1"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        ZenFlow
      </motion.h2>

      <div className="aboutContent">
        <motion.h3
          className="aboutTitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          WHAT IS IT?
        </motion.h3>

        <motion.p
          className="aboutDescription"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeInOut', delay: 0 }}
        >
          ZenFlow is a digital journaling app built to offer a calm, clutter-free space for personal reflection.
          Its guiding principle, "Frictionless Capture," makes recording thoughts fast and effortless. With a 
          philosophy of "Gentle Guidance," features like streaks and prompts act as soft nudges—not pressures. 
          Users see their entries transformed into clear, meaningful visuals like “Thought Trails” and “Emotion 
          Heatmaps” that spark reflection without overthinking. Privacy is a core value, with strong encryption 
          and a deep respect for user data. More than just an app, ZenFlow is a quiet, supportive presence 
          designed to help users build self-awareness and find moments of calm amid the noise.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
