import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          www.devkeshav.com/skills
          <br />
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Relevant</motion.b> Skills
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>As per</motion.b> Industry.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <div className="circle"></div>
          <img className='img' src='/web_dev.png' alt="" />
          <div className="content">
            <h2>Machine Learning</h2>
            <p>
              Experienced ML engineer adept at developing models with <b>Python</b> and industry-standard libraries like <b>TensorFlow</b> and <b>Scikit-Learn</b>. Having experience working on <b>NLP</b> and <b>LLMs</b>.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Machine Learning</h2>
          <p>
            Experienced ML engineer adept at developing models with <b>Python</b> and industry-standard libraries like <b>TensorFlow</b> and <b>Scikit-Learn</b>. Having experience working on <b>NLP</b> and <b>LLMs</b>.
          </p>
          <button>More</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Linux</h2>
          <p>
            Familiar with <b>Linux system administration</b>, <b>shell scripting</b>, and open-source technologies. Comfortable working with Linux distributions like <b>Ubuntu</b> and <b>Debian</b>, with a growing interest in Red Hat for enhanced system operations
          </p>
          <button>More</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Computer Vision</h2>
          <p>
            Skilled computer vision engineer well-versed in <b>Python</b>, <b>OpenCV</b>, and <b>TensorFlow</b>. Experienced in developing robust vision-based applications and leveraging deep learning for innovative solutions
          </p>
          <button>More</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
