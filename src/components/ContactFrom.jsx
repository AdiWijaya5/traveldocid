import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const sendEmail = (e) => {
  e.preventDefault();
  Swal.fire({
    title: "Are you sure",
    text: "Send an Email?",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Send Email",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Success Send Email",
        showConfirmButton: false,
        timer: 1500,
      });
      emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLET_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      );
    }
  });
};

const ContactFrom = () => {
  return (
    <div
      className="flex items-center justify-start h-screen bg-white"
      id="contact"
    >
      <div className="w-full max-w-lg mx-auto">
        <motion.h1
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
          className="text-4xl font-medium"
        >
          Contact us
        </motion.h1>
        <motion.p
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="mt-3"
        >
          Email us at traveldocid@gmail.com or message us here:
        </motion.p>

        <form onSubmit={sendEmail} class="mt-10">
          <input />
          <motion.div
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1.5 }}
            className="grid gap-6 sm:grid-cols-2"
          >
            <div className="relative z-0">
              <input
                type="text"
                name="name"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Your name
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="email"
                name="email"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Your email
              </label>
            </div>
            <div className="relative z-0 col-span-2">
              <textarea
                name="message"
                rows="5"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
              ></textarea>
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Your message
              </label>
            </div>
          </motion.div>
          <motion.button
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1.5 }}
            type="submit"
            className="px-10 py-2 mt-5 text-white transition duration-500 transform rounded-md bg-sky-400 hover:scale-105"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default ContactFrom;
