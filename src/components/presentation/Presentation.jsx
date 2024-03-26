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

      <div>
        <GsapMagnetic>
          <svg
            width="30"
            height="32"
            viewBox="0 0 30 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.75 4C24.413 4 25.0489 4.28095 25.5178 4.78105C25.9866 5.28115 26.25 5.95942 26.25 6.66667V25.3333C26.25 26.0406 25.9866 26.7189 25.5178 27.219C25.0489 27.719 24.413 28 23.75 28H6.25C5.58696 28 4.95107 27.719 4.48223 27.219C4.01339 26.7189 3.75 26.0406 3.75 25.3333V6.66667C3.75 5.95942 4.01339 5.28115 4.48223 4.78105C4.95107 4.28095 5.58696 4 6.25 4H23.75ZM23.125 24.6667V17.6C23.125 16.4472 22.6957 15.3416 21.9315 14.5264C21.1672 13.7113 20.1308 13.2533 19.05 13.2533C17.9875 13.2533 16.75 13.9467 16.15 14.9867V13.5067H12.6625V24.6667H16.15V18.0933C16.15 17.0667 16.925 16.2267 17.8875 16.2267C18.3516 16.2267 18.7967 16.4233 19.1249 16.7734C19.4531 17.1235 19.6375 17.5983 19.6375 18.0933V24.6667H23.125ZM8.6 11.4133C9.15695 11.4133 9.6911 11.1773 10.0849 10.7573C10.4788 10.3372 10.7 9.76742 10.7 9.17333C10.7 7.93333 9.7625 6.92 8.6 6.92C8.03973 6.92 7.50241 7.1574 7.10624 7.57999C6.71007 8.00257 6.4875 8.57571 6.4875 9.17333C6.4875 10.4133 7.4375 11.4133 8.6 11.4133ZM10.3375 24.6667V13.5067H6.875V24.6667H10.3375Z"
              fill="#008573"
            />
          </svg>
        </GsapMagnetic>

        <GsapMagnetic>
          <svg
            width="30"
            height="32"
            viewBox="0 0 30 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.75 4C24.413 4 25.0489 4.28095 25.5178 4.78105C25.9866 5.28115 26.25 5.95942 26.25 6.66667V25.3333C26.25 26.0406 25.9866 26.7189 25.5178 27.219C25.0489 27.719 24.413 28 23.75 28H6.25C5.58696 28 4.95107 27.719 4.48223 27.219C4.01339 26.7189 3.75 26.0406 3.75 25.3333V6.66667C3.75 5.95942 4.01339 5.28115 4.48223 4.78105C4.95107 4.28095 5.58696 4 6.25 4H23.75ZM23.125 24.6667V17.6C23.125 16.4472 22.6957 15.3416 21.9315 14.5264C21.1672 13.7113 20.1308 13.2533 19.05 13.2533C17.9875 13.2533 16.75 13.9467 16.15 14.9867V13.5067H12.6625V24.6667H16.15V18.0933C16.15 17.0667 16.925 16.2267 17.8875 16.2267C18.3516 16.2267 18.7967 16.4233 19.1249 16.7734C19.4531 17.1235 19.6375 17.5983 19.6375 18.0933V24.6667H23.125ZM8.6 11.4133C9.15695 11.4133 9.6911 11.1773 10.0849 10.7573C10.4788 10.3372 10.7 9.76742 10.7 9.17333C10.7 7.93333 9.7625 6.92 8.6 6.92C8.03973 6.92 7.50241 7.1574 7.10624 7.57999C6.71007 8.00257 6.4875 8.57571 6.4875 9.17333C6.4875 10.4133 7.4375 11.4133 8.6 11.4133ZM10.3375 24.6667V13.5067H6.875V24.6667H10.3375Z"
              fill="#008573"
            />
          </svg>
        </GsapMagnetic>

        <GsapMagnetic>
          <svg
            width="30"
            height="32"
            viewBox="0 0 30 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.75 4C24.413 4 25.0489 4.28095 25.5178 4.78105C25.9866 5.28115 26.25 5.95942 26.25 6.66667V25.3333C26.25 26.0406 25.9866 26.7189 25.5178 27.219C25.0489 27.719 24.413 28 23.75 28H6.25C5.58696 28 4.95107 27.719 4.48223 27.219C4.01339 26.7189 3.75 26.0406 3.75 25.3333V6.66667C3.75 5.95942 4.01339 5.28115 4.48223 4.78105C4.95107 4.28095 5.58696 4 6.25 4H23.75ZM23.125 24.6667V17.6C23.125 16.4472 22.6957 15.3416 21.9315 14.5264C21.1672 13.7113 20.1308 13.2533 19.05 13.2533C17.9875 13.2533 16.75 13.9467 16.15 14.9867V13.5067H12.6625V24.6667H16.15V18.0933C16.15 17.0667 16.925 16.2267 17.8875 16.2267C18.3516 16.2267 18.7967 16.4233 19.1249 16.7734C19.4531 17.1235 19.6375 17.5983 19.6375 18.0933V24.6667H23.125ZM8.6 11.4133C9.15695 11.4133 9.6911 11.1773 10.0849 10.7573C10.4788 10.3372 10.7 9.76742 10.7 9.17333C10.7 7.93333 9.7625 6.92 8.6 6.92C8.03973 6.92 7.50241 7.1574 7.10624 7.57999C6.71007 8.00257 6.4875 8.57571 6.4875 9.17333C6.4875 10.4133 7.4375 11.4133 8.6 11.4133ZM10.3375 24.6667V13.5067H6.875V24.6667H10.3375Z"
              fill="#008573"
            />
          </svg>
        </GsapMagnetic>
      </div>

      {/* <ul className={styles.contacts}>
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
          className={styles.icon} /> Email
          <img src={IconEmail} alt="icon_email" />
          <p>Email</p>
        </li>
        <li>
          <img className={styles.icon} src={IconGithub} alt="icon_github" />
          <p>GitHub</p>
        </li>
      </ul> */}
    </div>
  );
};
