import React from "react";
import styles from "./style.module.scss";

import Profile from "../../assets/images/Joran_Vanpeene.jpg";

import { FaLinkedin } from "react-icons/fa";
import { Heading } from "@radix-ui/themes";

export const Presentation = () => {
  return (
    <div className={styles.presentation}>
      <Heading className={styles.title}>
        As a student in Full Stack Web Development, I&apos;m passionate about IT
        and constantly on the lookout for new challenges. I like to bring my
        ideas to life, innovate and push my limits to continually enrich my
        knowledge.
      </Heading>

      <div className={styles.content}>
        <p className={styles.info}>
          Full Stack <span>Developer</span>
        </p>
        <img className={styles.image} src={Profile} alt={Profile} />
      </div>

      <ul className={styles.contacts}>
        <li className={styles.item}>
          <FaLinkedin className={styles.icon} />
          LinkedIn
        </li>
        <li>
          {/* Import de l'icone  d'email */}
          Email
        </li>
        <li>GitHub</li>
      </ul>
    </div>
  );
};
