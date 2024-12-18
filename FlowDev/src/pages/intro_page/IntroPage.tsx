import { useEffect } from "react";
import astronot from "../../assets/flowdev.svg";
import style from "./IntroPage.module.css";
import { useNavigate } from "react-router-dom";

const IntroPage: React.FC = () => {
  const navigate = useNavigate();

  //   // Redirect to the landing page after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/landing");
    }, 3000); // Redirects after 5 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={style.intropage}>
      <img src={astronot} alt="Astronaut" className={style.astronot} />
    </div>
  );
};

export default IntroPage;
