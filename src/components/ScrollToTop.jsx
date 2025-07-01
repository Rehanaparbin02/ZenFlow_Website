import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import './css/scrollToTop.css';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => {
      setVisible(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', toggle);
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 600, smooth: true });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          whileHover={{ scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <FaArrowUp />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
