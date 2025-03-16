import { section } from "framer-motion/client";
import { motion, useScroll, useTransform } from "framer-motion";
import CircularGallery from "./CircularGallery/CircularGallery";
// import ScrollVelocity from "../components/A-Components/ScrollVelocity/ScrollVelocity";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Intro = () => {
  return (
    <div className="container z-0 pt-12 mx-auto overflow-auto low-hidden">
      <motion.h1
        variants={container(0)}
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
        whileHover={{ y: 20 }}
        className="mb-2 text-5xl font-bold tracking-tight text-center text-transparent font-title bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text"
      >
        PHOTO TOUR
      </motion.h1>

      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery bend={0} textColor="#000000" borderRadius={0.05} />
      </div>
      {/* <button className="btn" onClick={hendlePlay}>
        <i class="fa-solid fa-circle-play"></i>
      </button>
      <button className="btn" onClick={hendlePause}>
        <i class="fa-solid fa-circle-pause"></i>
      </button> */}
    </div>
  );
};

export default Intro;
