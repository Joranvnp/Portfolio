import React from "react";
import { FaReact, FaVuejs, FaJs } from "react-icons/fa";

export const Skill = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div>
        <h3>Font-end</h3>
        <ul>
          <li>
            <FaReact />
            React
          </li>
          <li>
            <FaVuejs />
            Vue
          </li>
          <li>
            <FaJs />
            Javascript
          </li>
        </ul>
      </div>
    </section>
  );
};
