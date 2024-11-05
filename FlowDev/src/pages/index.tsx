// import Clientes from "./clients/Clientes";
import About from "./about/About";
import Clientes from "./clients/Clientes";
import Contact from "./contact/Contact";
import FooterPage from "./footer/FooterPage";
import Header from "./header/Header";
import Inicio from "./inicio/Inicio";
import ServicesPage from "./servicos/ServicesPage";

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <section id="home">
        <Inicio />
      </section>
      <section id="services">
      <ServicesPage/>
      </section>
      <section id="about">
        <About />
      </section>
      <section id="clients">
        <Clientes />
      </section>
     { /*  <section id="portfolio"> 
      <Portfolio />
      </section>
      <section id="services">
        <Services />
      </section>
     
     
     */ }
       
      <section id="contact">
        <Contact />
      </section>  
      <FooterPage />
    </>
  );
};

export default LandingPage;
