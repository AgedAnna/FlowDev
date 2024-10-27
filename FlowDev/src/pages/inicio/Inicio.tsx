import React from "react";
import { Button } from "@mui/material";
import img from "../../assets/flowdev.svg";
import fundo from "../../assets/fundohome.png";
import styles from "./Inicio.module.css";

const Inicio: React.FC = () => {
  return (
    <div
      className={styles.inicioContainer}
      style={{ backgroundImage: `url(${fundo})` }}
    >
      <div className={styles.textSection}>
        <p className={styles.audiowide}>Hey, We are FlowDev!</p>
        <h1 className={styles.audiowidebig}>We create </h1>
        <div>
          <span className={styles.audiowidebigaD}>
            Digital <span className={styles.audiowidebigaE}>Experiences</span>{" "}
          </span>
        </div>
        <div>
          <span className={styles.audiowidebigaEV}>and Build Innovation</span>
        </div>

        <Button
          variant="contained"
          className={styles.button}
          sx={{ textTransform: "none" }}
        >
          Get Started
        </Button>
      </div>
      <div className={styles.imageSection}>
        <img src={img} alt="Flow Dev Logo" />
      </div>
    </div>
  );
};

export default Inicio;
