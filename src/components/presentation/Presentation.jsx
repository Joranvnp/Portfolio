import React from "react";
import { FaLinkedin } from "react-icons/fa";

export const Presentation = () => {
  return (
    <section className="presentation">
      <h1>Full Stack Developer</h1>
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
        <li>Javascript</li>
      </ul>
    </section>
  );
};
