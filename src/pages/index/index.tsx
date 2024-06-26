import { IMG_ALT } from "../../common/constants/constant";
import { BG_HOANG, HOANG } from "../../common/constants/imgs";
import "./index.css";
import { motion } from "framer-motion";

function Index() {
  return (
    <div>
      <div className="grid grid-cols-5 md:grid-cols-8 md:mt-20">
        <div className="md:col-start-1 md:col-end-5 col-span-5">
          <div className="uppercase mt-10 mb-16 text-center">
            <p className="kanit text-4xl font-medium">
              My name is
              <span className="tyingHoang relative bg-[#0F4C75] text-white py-[.1] px-2 rounded-sm ml-2">
                Hoang
              </span>
            </p>
            <p className="kanit text-2xl font-medium mt-4 text-[#222831]">
              I'm a{" "}
              <motion.span
                animate={{
                  opacity: [0, 0.3, 0.5, 1],
                  transition: {
                    delay: 1,
                  },
                }}
                className="text-[#0F4C75] py-[.1] px-2 underline"
              >
                developer web
              </motion.span>
            </p>
          </div>
        </div>
        <div className="col-span-5 md:col-start-5 md:col-end-9 relative">
          <motion.div
            animate={{
              x: [100, 0],
              opacity: [0, 1],
              transition: {
                delay: 0.5,
                duration: 0.2,
              },
            }}
          >
            <img
              src={HOANG}
              alt={IMG_ALT}
              className="ml-36 drop-Shadow md:w-[250px]"
            />
          </motion.div>
          <motion.div
            animate={{
              opacity: [0, 1],
              scale: [0, 0.5, 1],
              transition: {
                delay: 0.7,
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
            className="absolute -top-[30%] -z-[1]"
          >
            <img src={BG_HOANG} alt={IMG_ALT} className="w-full h-full" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Index;
