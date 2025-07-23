"use client";

import { Code, Laptop, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall,
} from "../../utils/animations";

const About = () => {
  return (
    <div className="container max-w-7xl mx-auto py-30">
      <motion.h1
        className="text-4xl font-bold mb-10 text-center dark:text-white"
        {...fadeInDown}
      >
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.section className="mb-16" {...fadeInUp}>
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center dark:text-white">
          I&apos;m Junior Fullstack Developer with a background in
          Environmental Education. I have experience in web development (React,
          Node.js, TypeScript) . I enjoy building practical solutions that connect
          technology with social impact. I'm always looking to learn,
          collaborate, and grow professionally.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.2 }}>
        <motion.h2 className="section-title dark:text-white" {...fadeInUp}>
          Skills
        </motion.h2>
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <Code className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>

          <motion.div
            className="p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <Laptop className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
          </motion.div>

          <motion.div
            className="p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <GraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.4 }}>
        <motion.h2 className="section-title dark:text-white" {...fadeInUp}>
          Experience
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl dark:text-white font-semibold mb-2">
              Junior Full Stack Developer
            </h3>
            <p className="text-primary mb-2">Bytes4Future - 2025</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Developed web applications using React and Node.js</li>
              <li>
                Collaborated with designers to implement responsive UI/UX
                designs
              </li>
              <li> Assisted in database management and API integration</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
        <motion.h2 className="section-title dark:text-white" {...fadeInUp}>
          Education
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl dark:text-white font-semibold mb-2">
              Bachelor’s Degree in Environmental Education
            </h3>
            <p className="text-primary  mb-2">
              Universidade Eduardo Mondlane 2019-2023
            </p>
            <h4 className="text-xl dark:text-white font-semibold mb-2">
              junior Full Stack Developer
            </h4>
            <h1 className="text-primary mb-2">
              {" "}
              BytesForFuture-Mocambique- 2025
            </h1>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};
export default About;
