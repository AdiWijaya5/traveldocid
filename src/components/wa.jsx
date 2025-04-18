import { motion, useScroll, useTransform } from "framer-motion";

const whatsapp = () => {
  return (
    <div class="relative">
      <a href="https://api.whatsapp.com/send/?phone=6281225836061&text&type=phone_number&app_absent=0">
        <motion.button
          whileInView={{ y: 20, opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          class="z-20 text-white flex flex-col shrink-0 grow-0 justify-around 
                  fixed bottom-0 right-0 r-5 rounded-lg
                  mr-1 mb-5 lg:mr-5 lg:mb-5 xl:mr-10 xl:mb-10"
        >
          <div class="p-3 rounded-full bg-green-600">
            <svg
              class="w-12 h-12 lg:w-12 lg:h-12 xl:w-15 xl:h-15"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </motion.button>
      </a>
    </div>
  );
};

export default whatsapp;
