import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const people = [
  {
    name: 'Ade Setiyawan',
    role: 'Co-Founder / Photographer',
    imageUrl: 'https://images2.imgbox.com/34/60/wH9yXNqg_o.jpg',
  },
  {
    name: 'Adi Wijaya',
    role: 'Builder / Fullstack Developer',
    imageUrl: 'https://images2.imgbox.com/b7/6e/OAHfgJ46_o.jpg',
  },
];

const TeamSections = () => {
  return (
    <div className="bg-white py-14 sm:py-22">
      <div className="grid gap-20 px-6 mx-auto max-w-7xl lg:px-8 xl:grid-cols-3">
        <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.8 }}
          className="max-w-xl"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 text-pretty sm:text-4xl">Meet our leadership</h2>
          <p className="mt-6 text-gray-600 text-lg/8">We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
        </motion.div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <motion.div
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 1 }}
                className="flex items-center gap-x-6"
              >
                <img
                  alt=""
                  src={person.imageUrl}
                  className="rounded-full size-20"
                />
                <div>
                  <h3 className="font-semibold tracking-tight text-gray-900 text-base/7">{person.name}</h3>
                  <p className="font-semibold text-indigo-600 text-sm/6">{person.role}</p>
                </div>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamSections;
