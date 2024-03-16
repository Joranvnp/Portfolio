import React from "react";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { opacity } from "../../anim";

export default function Image({ src, isActive }) {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate={isActive ? "open" : "closed"}
      className={styles.imageContainer}
    >
      <img src={`/images/${src}`} alt="image" style={{ objectFit: "none" }} />
    </motion.div>
  );
}
