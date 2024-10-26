import React from "react";
import img from "../../assets/softwareengineer.svg";
import style from "./Inicio.module.css";

const Inicio: React.FC = () => {
  return (
    <div className={style.inicioContainer}>
      <div className={style.textSection}>
        <h1>Missão</h1>
        <p>
          Proporcionar soluções digitais inovadoras que elevem a experiência do usuário e agreguem valor aos negócios de nossos clientes, com um compromisso inabalável de qualidade, eficiência e empatia.
        </p>
      </div>
      <div className={style.imageSection}>
        <img src={img} alt="Software Engineer" />
      </div>
    </div>
  );
};

export default Inicio;
