import React from "react";
import styles from "./style.module.scss";

import Profile from "../../assets/images/Joran_Vanpeene.jpg";

// import { FaLinkedin, FaMailBulk } from "react-icons/fa";
import IconLinkedin from "/public/images/icons/links_linkedin.svg";
import IconEmail from "/public/images/icons/icons_mail.svg";
import IconGithub from "/public/images/icons/icons_git.svg";

import { Heading } from "@radix-ui/themes";
import { GsapMagnetic } from "../magnetic/GsapMagnetic";

export const Presentation = () => {
  return (
    <div className={styles.presentation}>
      <h1 className={styles.title}>
        As a student in <span>Full Stack</span> Web Development, I&apos;m
        passionate about IT and constantly on the lookout for
        <span> new challenges</span>. I like to bring my ideas to life, innovate
        and push my limits to <span>continually enrich my knowledge</span>.
      </h1>

      <div className={styles.content}>
        <p className={styles.info}>
          Full Stack <span>Developer</span>
        </p>
        <img className={styles.image} src={Profile} alt={Profile} />
      </div>

      <ul className={styles.contacts}>
        <li className={styles.item}>
          <GsapMagnetic>
            <img
              className={styles.icon}
              src={IconLinkedin}
              alt="icon_linkedin"
            />
          </GsapMagnetic>
          <p>LinkedIn</p>
        </li>
        <li>
          {/* className={styles.icon} /> Email */}
          <img src={IconEmail} alt="icon_email" />
          <p>Email</p>
        </li>
        <li>
          <img className={styles.icon} src={IconGithub} alt="icon_github" />
          <p>GitHub</p>
        </li>
      </ul>
    </div>
  );
};
