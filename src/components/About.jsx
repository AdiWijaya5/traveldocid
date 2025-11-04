import { motion } from 'framer-motion';
import Mouse from './images/Mouse.png';
import prade from './images/prade.png';

const About = () => {
  return (
    <section
      className="relative min-h-screen py-34"
      id="about"
    >
      <div className="w-full px-4 mx-auto max-w-7xl md:px-5 lg:px-5">
        <div className="grid items-center justify-start w-full grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="grid items-start justify-center order-last w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:order-first">
            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
              {/* <motion.img
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: 'backInOut', duration: 1 }}
                className="object-cover rounded-xl"
                src={prade}
                alt="about Us image"
              /> */}
            </div>
            <motion.img
              initial={{ y: 48, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: 'backInOut', duration: 0.9 }}
              className="object-cover ml-auto sm:ml-0 rounded-xl"
              src={prade}
              alt="about Us image"
            />
            <motion.img
              whileInView={{ y: 10, opacity: 0 }}
              transition={{ duration: 1, repeat: Infinity }}
              src={Mouse}
              className="text-xs "
            />
          </div>
          <div className="inline-flex flex-col items-center justify-center w-full gap-10 lg:items-start">
            <div className="flex flex-col items-start justify-center w-full gap-8">
              <motion.div
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 0.8 }}
                className="flex flex-col items-center justify-start w-full gap-3 lg:items-start"
              >
                <h2 className="text-4xl font-bold leading-normal text-center text-gray-900 font-title lg:text-start">Hi, Ade Setiyawan Saya Photographer Profesional</h2>
                <p className="text-base leading-relaxed text-center text-gray-500 font-title lg:text-start">
                  Growing up, I always had a passion for photography. I loved the way that seemingly mundane moments could be captured and transformed into true beauty. This notion still captivates me, and pushes my creativity every day. If
                  you’d like to learn more about me and my work, please do not hesitate to get in touch.
                </p>
              </motion.div>
              <div class="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                <motion.div
                  initial={{ y: 48, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ ease: 'easeInOut', duration: 1 }}
                  className="inline-flex flex-col items-start justify-start"
                >
                  <h3 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">8+</h3>
                  <h6 class="text-gray-500 text-base font-normal leading-relaxed">Years of Experience</h6>
                </motion.div>
                <motion.div
                  initial={{ y: 48, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ ease: 'easeInOut', duration: 1.2 }}
                  className="inline-flex flex-col items-start justify-start"
                >
                  <h4 className="text-4xl font-bold leading-normal text-gray-900 font-manrope">125+</h4>
                  <h6 className="text-base font-normal leading-relaxed text-gray-500">Successful Projects</h6>
                </motion.div>
                <motion.div
                  initial={{ y: 48, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ ease: 'easeInOut', duration: 1.3 }}
                  className="inline-flex flex-col items-start justify-start"
                >
                  <h4 className="text-4xl font-bold leading-normal text-gray-900 font-manrope">52+</h4>
                  <h6 className="text-base font-normal leading-relaxed text-gray-500">Happy Clients</h6>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
