import React from "react";
import img from "../../assets/group.png";
import styles from "./About.module.css";

const About: React.FC = () => {
  return (
    <div className={styles.inicioContainer}>
      <div className={styles.imageSection}>
        <img src={img} alt="Flow Dev Logo" className={styles.group} />
      </div>
      <div className={styles.textSection}>
        <h1 className={styles.audiowidebig}>About Us</h1>
        <p className={styles.audiowide}>
          Join us on this digital journey and discover how we can turn your
          vision into reality!
        </p>
        <br />
        <div>
          <span className={styles.audiowidebigaD}>
            Welcome to <span className={styles.flowDev}>FlowDev</span>, where
            technology meets creativity! We are a company dedicated to software
            development and the creation of innovative digital experiences.
          </span>
        </div>
        <br />
        <div>
          <span className={styles.audiowidebigaEV}>
            Our mission is to transform ideas into digital solutions that not
            only meet our clients' needs but also delight their users.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
