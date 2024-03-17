import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, background } from "./anim";
import Nav from "./nav/Nav";
import styles from "./style.module.scss";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.bar}>
        <Link to="/">Joran Vanpeene</Link>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.el}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
          <div className={styles.label}>
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Menu
            </motion.p>
            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
              Close
            </motion.p>
          </div>
        </div>
        <motion.div
          variants={opacity}
          animate={!isActive ? "open" : "closed"}
          className={styles.shopContainer}
        >
          <div className={styles.el}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0001 14.706C7.40478 14.706 5.29419 12.5954 5.29419 10.0001C5.29419 7.40478 7.40478 5.29419 10.0001 5.29419C12.5954 5.29419 14.706 7.40478 14.706 10.0001C14.706 12.5954 12.5954 14.706 10.0001 14.706Z"
                stroke="#1A211E"
              />
              <path
                d="M10 0V2.35294M20 10H17.6471M2.35294 10H0M10 17.6471V20M15.2941 4.70588L17.0588 2.94118M2.94118 17.0588L4.70588 15.2941M2.94118 2.94118L4.70588 4.70588M15.2941 15.2941L17.0588 17.0588"
                stroke="#1A211E"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className={styles.background}
      ></motion.div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
};

export default Header;
