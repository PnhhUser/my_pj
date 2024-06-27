import { TXT_SKILLS } from "../../common/constants/constant";
import { motion } from "framer-motion";

function Skills() {
  return (
    <div className="grid grid-cols-5 gap-3 md:grid-cols-12">
      <div className="col-span-5 pl-5">
        <h1 className="font-semibold text-4xl kanit mt-4 lg:ml-10 ml-2">
          {TXT_SKILLS}
        </h1>
      </div>
      <div className="md:col-start-1 md:col-end-5 col-span-5">
        <div className="pl-8 mb-2 lg:ml-10">
          <h3 className="font-semibold text-lg">English</h3>
          <p className="pl-4">Basic reading comprehension ability.</p>
        </div>
        <div className="pl-8 mb-2 lg:ml-10">
          <h3 className="font-semibold text-lg">Programming language</h3>
          <ul className="pl-4">
            <li className="uppercase">html, css javascript, c#</li>
            <li>
              <span className="font-semibold text-lg">Technolory</span>
              <ul>
                <li>ReactJS, Asp.net, NestJs, MySQL</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-lg">Suport</span>
              <ul>
                <li>TailwinCss, Charkra UI</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <motion.div
        animate={{ scale: [0, 0.8, 1] }}
        className="col-span-5 md:col-start-5 md:col-end-12 bg-gray-200 rounded h-96 mx-10"
      ></motion.div>
    </div>
  );
}

export default Skills;
