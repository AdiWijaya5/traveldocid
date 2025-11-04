import { motion, useScroll, useTransform } from 'framer-motion';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Galery = () => {
  return (
    <div>
      <motion.h1
        variants={container(0)}
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.8 }}
        whileHover={{ y: 20 }}
        className="z-0 mb-4 pt-12 text-5xl font-bold tracking-tight text-center text-transparent font-title bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text"
      >
        MY GALERY PHOTO
      </motion.h1>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 z-0">
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg transition duration-500 transform hover:scale-105 "
              src="https://images2.imgbox.com/b9/28/LsXAeQEx_o.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg transition duration-500 transform hover:scale-105 "
              src="https://images2.imgbox.com/03/fd/pwFjsXvd_o.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg transition duration-500 transform hover:scale-105 "
              src="https://images2.imgbox.com/5f/1b/oMyy1H7u_o.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg transition duration-500 transform hover:scale-105 "
              src="https://images2.imgbox.com/27/5d/bx3KE6mj_o.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg transition duration-500 transform hover:scale-105 "
              src="https://images2.imgbox.com/09/94/kSpBBBmM_o.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg transition duration-500 transform hover:scale-105 "
              src="https://images2.imgbox.com/86/66/ZuI2oMEp_o.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg transition duration-500 transform hover:scale-105 "
              src="https://images2.imgbox.com/f8/e2/CA3l2oYQ_o.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg transition duration-500 transform hover:scale-105 "
              src="https://images2.imgbox.com/43/72/ySwzwq4Y_o.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg transition duration-500 transform hover:scale-105 "
              src="https://images2.imgbox.com/69/79/R4W04A20_o.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg transition duration-500 transform hover:scale-105 "
              src="https://images2.imgbox.com/eb/58/XEP0Hj0F_o.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg transition duration-500 transform hover:scale-105 "
              src="https://images2.imgbox.com/d7/3b/RYLqkMBl_o.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg transition duration-500 transform hover:scale-105 "
              src="https://images2.imgbox.com/44/4a/IJsHnd8O_o.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galery;
