import React from "react";
import styles from "./style.module.scss";

import Profile from "../../assets/images/Joran_Vanpeene.jpg";

// import { FaLinkedin, FaMailBulk } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
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
          <div className={styles.container}>
            <GsapMagnetic>
              <svg
                className={styles.icon}
                viewBox="0 0 30 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.75 4C24.413 4 25.0489 4.28095 25.5178 4.78105C25.9866 5.28115 26.25 5.95942 26.25 6.66667V25.3333C26.25 26.0406 25.9866 26.7189 25.5178 27.219C25.0489 27.719 24.413 28 23.75 28H6.25C5.58696 28 4.95107 27.719 4.48223 27.219C4.01339 26.7189 3.75 26.0406 3.75 25.3333V6.66667C3.75 5.95942 4.01339 5.28115 4.48223 4.78105C4.95107 4.28095 5.58696 4 6.25 4H23.75ZM23.125 24.6667V17.6C23.125 16.4472 22.6957 15.3416 21.9315 14.5264C21.1672 13.7113 20.1308 13.2533 19.05 13.2533C17.9875 13.2533 16.75 13.9467 16.15 14.9867V13.5067H12.6625V24.6667H16.15V18.0933C16.15 17.0667 16.925 16.2267 17.8875 16.2267C18.3516 16.2267 18.7967 16.4233 19.1249 16.7734C19.4531 17.1235 19.6375 17.5983 19.6375 18.0933V24.6667H23.125ZM8.6 11.4133C9.15695 11.4133 9.6911 11.1773 10.0849 10.7573C10.4788 10.3372 10.7 9.76742 10.7 9.17333C10.7 7.93333 9.7625 6.92 8.6 6.92C8.03973 6.92 7.50241 7.1574 7.10624 7.57999C6.71007 8.00257 6.4875 8.57571 6.4875 9.17333C6.4875 10.4133 7.4375 11.4133 8.6 11.4133ZM10.3375 24.6667V13.5067H6.875V24.6667H10.3375Z"
                  fill="none"
                />
              </svg>
            </GsapMagnetic>
            <p className={styles.text}>LinkedIn</p>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.container}>
            <GsapMagnetic>
              <svg
                className={styles.icon}
                viewBox="0 0 30 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 5.3335H5C3.625 5.3335 2.5125 6.5335 2.5125 8.00016L2.5 24.0002C2.5 25.4668 3.625 26.6668 5 26.6668H25C26.375 26.6668 27.5 25.4668 27.5 24.0002V8.00016C27.5 6.5335 26.375 5.3335 25 5.3335ZM25 10.6668L15 17.3335L5 10.6668V8.00016L15 14.6668L25 8.00016V10.6668Z"
                  fill="none"
                />
              </svg>
            </GsapMagnetic>
            <p className={styles.text}>Email</p>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.container}>
            <GsapMagnetic>
              <svg
                className={styles.icon}
                viewBox="0 0 31 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5 2.5C13.8585 2.5 12.233 2.82332 10.7165 3.45151C9.19989 4.07969 7.8219 5.00043 6.66117 6.16117C4.31696 8.50537 3 11.6848 3 15C3 20.525 6.5875 25.2125 11.55 26.875C12.175 26.975 12.375 26.5875 12.375 26.25V24.1375C8.9125 24.8875 8.175 22.4625 8.175 22.4625C7.6 21.0125 6.7875 20.625 6.7875 20.625C5.65 19.85 6.875 19.875 6.875 19.875C8.125 19.9625 8.7875 21.1625 8.7875 21.1625C9.875 23.0625 11.7125 22.5 12.425 22.2C12.5375 21.3875 12.8625 20.8375 13.2125 20.525C10.4375 20.2125 7.525 19.1375 7.525 14.375C7.525 12.9875 8 11.875 8.8125 10.9875C8.6875 10.675 8.25 9.375 8.9375 7.6875C8.9375 7.6875 9.9875 7.35 12.375 8.9625C13.3625 8.6875 14.4375 8.55 15.5 8.55C16.5625 8.55 17.6375 8.6875 18.625 8.9625C21.0125 7.35 22.0625 7.6875 22.0625 7.6875C22.75 9.375 22.3125 10.675 22.1875 10.9875C23 11.875 23.475 12.9875 23.475 14.375C23.475 19.15 20.55 20.2 17.7625 20.5125C18.2125 20.9 18.625 21.6625 18.625 22.825V26.25C18.625 26.5875 18.825 26.9875 19.4625 26.875C24.425 25.2 28 20.525 28 15C28 13.3585 27.6767 11.733 27.0485 10.2165C26.4203 8.69989 25.4996 7.3219 24.3388 6.16117C23.1781 5.00043 21.8001 4.07969 20.2835 3.45151C18.767 2.82332 17.1415 2.5 15.5 2.5Z"
                  fill="none"
                />
              </svg>
            </GsapMagnetic>
            <p className={styles.text}>GitHub</p>
          </div>
        </li>
      </ul>
    </div>
  );
};
