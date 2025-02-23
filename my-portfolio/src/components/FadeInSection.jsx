import { motion } from "framer-motion";

const FadeInSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }} // Start invisible and slightly lower
      whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
      exit={{ opacity: 0, y: 0 }} // 🔥 Fades back out when leaving viewport
      transition={{ duration: 1.2, ease: "easeOut" }} // Smooth animation
      viewport={{ once: false }} // Ensures animation happens once
      style={{ display: "flex", alignContent: "center", justifyContent: "center", width: "100%" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;