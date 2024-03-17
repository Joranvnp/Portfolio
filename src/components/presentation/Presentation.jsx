import React from "react";
import styles from "./style.module.scss";
import { FaLinkedin } from "react-icons/fa";

import { Heading } from "@radix-ui/themes";

export const Presentation = () => {
  return (
    <section className={styles.presentation}>
      <Heading>Full Stack Developer</Heading>
      <p>
        As a student in Full Stack Web Development, I'm passionate about IT and
        constantly on the lookout for new challenges. I like to bring my ideas
        to life, innovate and push my limits to continually enrich my knowledge.
      </p>

      <ul>
        <li>
          <FaLinkedin />
          LinkedIn
        </li>
        <li>Email</li>
        <li>GitHub</li>
      </ul>
    </section>
  );
};
