import { TXT_ABOUT } from "../../common/constants/constant";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <div className="grid grid-cols-5 gap-3">
      <div className="col-span-5 pl-5">
        <div className="md:flex md:items-center md:flex-col mt-10">
          <motion.h1
            animate={{
              x: [-100, 0],
              transition: {
                type: "spring",
                damping: 10,
                mass: 2,
              },
            }}
            className="font-semibold text-4xl kanit text-[#1B262C] mb-5"
          >
            {TXT_ABOUT}
          </motion.h1>
          <motion.p
            animate={{
              opacity: [0, 0.3, 0.5, 0.8, 1],
              transition: {
                delay: 1.2,
                duration: 1,
              },
            }}
            className="mt-2 leading-[1.8]"
          >
            I'm
            <span className="bg-[#3282B8] text-white p-1 mx-1">
              Phung Ngoc Huy Hoang
            </span>
            24 years old, a guy passionate about information technology.
          </motion.p>
          <motion.p
            animate={{
              opacity: [0, 0.3, 0.5, 0.8, 1],
              transition: {
                delay: 1.25,
                duration: 1,
              },
            }}
            className="mt-2 leading-[1.8]"
          >
            Attended and graduated from Viet Han Information Technology School.
          </motion.p>
          <motion.p
            animate={{
              opacity: [0, 0.3, 0.5, 0.8, 1],
              transition: {
                delay: 1.3,
                duration: 1,
              },
            }}
            className="mt-2 leading-[1.8]"
          >
            Have 1 year of experience working with some technologies such as
            <span className="bg-[#3282B8] text-white p-1 mx-1">
              C#, ReactJs.
            </span>
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
