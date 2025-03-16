import { useEffect, useState } from "react";
import Logo from "../assets/TRAVELDOCLOGO.png";
import { motion, useScroll, useTransform } from "framer-motion";

const navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const headleClick = () => {
    setShow(!show);
  };

  let menuActive = show ? " left-0" : "-left-full";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setShow(false);
      } else setScroll(false);
    });
  });

  let scrollActivte = scroll
    ? "py-6 bg-white/20 backdrop-blur-lg drop-shadow-lg xl:rounded-b-[100px]  "
    : "py-4";

  return (
    <div className={`bg-navbar fixed w-full py-4 z-10 ${scrollActivte}`}>
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between navbar-box">
          <div className="logo">
            <img
              src={Logo}
              alt="Logo"
              className="md:w-20 w-[50px] mx-auto md:m-0 "
            />
          </div>
          <ul
            className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed z-0 ${menuActive}  top-50 -translate-y-2 flex-col px-8 py-6 shadow-sm shadow-slate-300 bg-sky-300 font-bold  text-white transition-all`}
          >
            <li className="flex items-center gap-3">
              <i className="block text-3xl md:hidden"></i>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#home"
                className="relative font-bold tracking-widest uppercase opacity-75 font-title text-black/80 group"
              >
                Home
                <div className="absolute w-full h-0.5 bg-black/80 scale-x-0 group-hover:scale-x-100 transition-transform" />
              </motion.a>
            </li>
            <li className="flex items-center gap-3">
              <i className="block text-3xl md:hidden"></i>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#about"
                className="relative font-bold tracking-widest uppercase opacity-75 font-title text-black/80 group"
              >
                About
                <div className="absolute w-full h-0.5 bg-black/80 scale-x-0 group-hover:scale-x-100 transition-transform" />
              </motion.a>
            </li>
            <li className="flex items-center gap-3">
              <i className="block text-3xl md:hidden"></i>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#photo"
                className="relative font-bold tracking-widest uppercase opacity-75 font-title text-black/80 group"
              >
                My PHOTO
                <div className="absolute w-full h-0.5 bg-black/80 scale-x-0 group-hover:scale-x-100 transition-transform" />
              </motion.a>
            </li>
            <li className="flex items-center gap-3">
              <i className="block text-3xl md:hidden"></i>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#contact"
                className="relative font-bold tracking-widest uppercase opacity-75 font-title text-black/80 group"
              >
                CONTACT ME
                <div className="absolute w-full h-0.5 bg-black/80 scale-x-0 group-hover:scale-x-100 transition-transform" />
              </motion.a>
            </li>
          </ul>
          <div className="flex items-center gap-2 sosial">
            <a
              href="#socialmedia"
              className="px-5 py-2 font-bold text-white transition-all rounded-full font-title bg-sky-400 hover:bg-white hover:text-black"
            >
              Social Media{" "}
            </a>
            <i
              className="block text-3xl ri-menu-3-line md:hidden"
              onClick={headleClick}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
