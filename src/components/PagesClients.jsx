import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const marqueeVariants = {
  animate: {
    x: [0, -1036],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      },
    },
  },
};

const Clients = () => {
  return (
    <div>
      {/* <div className="container pt-12 mx-auto overflow-auto low-hidden ">
        <motion.h1
          variants={container(0)}
          animate="visible"
          initial={{ opacity: 1, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1, x: 0.1 }}
          transition={{ duration: 1 }}
          whileHover={{ y: 20 }}
          className="z-0 m-4 text-5xl font-bold tracking-tight text-center text-transparent font-title bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text"
        >
          Our Clients
        </motion.h1>
      </div> */}

      <div className="relative w-[100vh] m-w-[100vh] h-[200px] hidden">
        <motion.div
          className="absolute flex-wrap"
          variants={marqueeVariants}
          animate="animate"
        >
          <h1 className="m-20-0 font-[0] text-transform: uppercase">
            Let's Work Together. Let's Work Together. Let's Work Together. Let's
            Work Together. Let's Work Together. Let's Work Together. Let's Work
            Together
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Clients;
