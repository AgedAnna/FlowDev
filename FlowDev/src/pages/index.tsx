// import Clientes from "./clients/Clientes";
import FooterPage from "./footer/FooterPage";
import Header from "./header/Header";
import Inicio from "./inicio/Inicio";

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <section id="home">
        <Inicio />
      </section>
      {/* <section id="about">
        <About />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="contact">
        <Contact />
      </section> */}
      <FooterPage />
    </>
  );
};

export default LandingPage;
