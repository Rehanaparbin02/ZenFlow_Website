// import React from 'react';
// import './css/bento.css';
// import Card from './Card';

// const features = [
//   { title: 'One-Tap Journaling with Emotion Bubbles', feature: 'Instead of a blank page, begin by selecting from interactive "emotion bubbles" to instantly capture your current feeling visually and playfully. ' },
//   { title: '"Thought Trails" Visual Timeline', feature: 'View your emotional journey over time not as a simple list, but as a beautiful, branching network of your entries, creating a visual map of your progress. ' },
//   { title: 'Reflect & Respond" Weekly Summaries', feature: 'Once a week, the app presents a collage of your recent emotions, prompting you with a simple question to notice patterns and shifts in your well-being. ' },
//   { title: 'Seamless Cloud Sync', feature: 'Your personal and important journal entries are securely backed up and made accessible across your devices. ' },
//   { title: 'Insightful Emotion Heatmaps & Word Clouds', feature: 'Visualize your most frequent emotions on a calendar-style heatmap or see your most-used words in a dynamic word cloud, offering insights without analysis. ' },
//   { title: 'Privacy by Design', feature: ' With robust data encryption and clear security policies, ZenFlow is designed to be a private, trusted sanctuary for your personal thoughts.' },
// ];

// const Features = () => {
//   return (
//     <div className="bento-wrapper">
//       <div className="vertical-heading">Features</div>
//       <div className="bento-grid">
//         {features.map((item, index) => (
//           <Card key={index} title={item.title} feature={item.feature} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Features;
import React from 'react';
import './css/bento.css';
import Card from './Card';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'One-Tap Journaling with Emotion Bubbles',
    feature:
      'Instead of a blank page, begin by selecting from interactive "emotion bubbles" to instantly capture your current feeling visually and playfully.',
  },
  {
    title: '"Thought Trails" Visual Timeline',
    feature:
      'View your emotional journey over time not as a simple list, but as a beautiful, branching network of your entries, creating a visual map of your progress.',
  },
  {
    title: 'Reflect & Respond" Weekly Summaries',
    feature:
      'Once a week, the app presents a collage of your recent emotions, prompting you with a simple question to notice patterns and shifts in your well-being.',
  },
  {
    title: 'Seamless Cloud Sync',
    feature:
      'Your personal and important journal entries are securely backed up and made accessible across your devices.',
  },
  {
    title: 'Insightful Emotion Heatmaps & Word Clouds',
    feature:
      'Visualize your most frequent emotions on a calendar-style heatmap or see your most-used words in a dynamic word cloud, offering insights without analysis.',
  },
  {
    title: 'Privacy by Design',
    feature:
      'With robust data encryption and clear security policies, ZenFlow is designed to be a private, trusted sanctuary for your personal thoughts.',
  },
];

// Animation variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Features = () => {
  return (
    <div id="features" className="bento-wrapper">
      <motion.div
        className="vertical-heading"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Features
      </motion.div>

      <motion.div
        className="bento-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {features.map((itemData, index) => (
          <motion.div key={index} variants={item}>
            <Card title={itemData.title} feature={itemData.feature} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Features;
