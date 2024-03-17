import styles from "./style.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import { height } from "../anim";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Image from "./Image/Image";

const links = [
  {
    title: "About",
    href: "/",
    src: "Joran_Vanpeene.jpg",
  },
  {
    title: "Skills",
    href: "/",
    src: "Joran_Vanpeene.jpg",
  },
  {
    title: "Projects",
    href: "/",
    src: "Joran_Vanpeene.jpg",
  },
  {
    title: "Contact",
    href: "/",
    src: "Joran_Vanpeene.jpg",
  },
];

export default function Nav() {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          <Footer />
        </div>
        <Image
          src={links[selectedLink.index].src}
          isActive={selectedLink.isActive}
        />
      </div>
    </motion.div>
  );
}
