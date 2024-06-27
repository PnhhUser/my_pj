import { TXT_PROJECT } from "../../common/constants/constant";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="grid grid-cols-5 md:grid-cols-12 gap-3 mx-5 mb-5">
      <div className="col-span-5 mb-5">
        <h1 className="font-semibold text-4xl kanit mt-4 lg:ml-10">
          {TXT_PROJECT}
        </h1>
      </div>
      <motion.div
        animate={{ opacity: [0, 0.5, 0.8, 1], x: [-100, 0] }}
        className="col-span-5 h-56 bg-gray-200 rounded md:col-start-1 md:col-end-7 lg:col-start-1 lg:col-end-5"
      ></motion.div>
      <motion.div
        animate={{ opacity: [0, 0.5, 0.8, 1], x: [100, 0] }}
        className="col-span-5 h-56 bg-gray-200 rounded md:col-start-7 md:col-end-13 lg:col-start-5 lg:col-end-9"
      ></motion.div>
      <motion.div
        animate={{ opacity: [0, 0.5, 0.8, 1], x: [-100, 0] }}
        className="col-span-5 h-56 bg-gray-200 rounded md:col-start-1 md:col-end-7 lg:col-start-9 lg:col-end-13"
      ></motion.div>
      <motion.div
        animate={{ opacity: [0, 0.5, 0.8, 1], x: [100, 0] }}
        className="col-span-5 h-56 bg-gray-200 rounded md:col-start-7 md:col-end-13 lg:col-start-1 lg:col-end-5"
      ></motion.div>
    </div>
  );
}

export default Projects;
