import styles from "./ServicePage.module.css";

const ServicesPage = () => {
  return (
    <div className={styles["services-page"]}>
      <h2 className={styles["services-title"]}>Services</h2>
      <br /><br />
      <p className={styles["services-subtitle"]}>
        Below you will find some of our services. Feel free to explore! ;)
      </p>
      <div className={styles["services-container"]}>
        <div className={styles["card"]}>
          <h4>Social Media</h4>
          <p>Social Media Management.</p>
        </div>
        <div className={styles["card"]}>
          <h4>Software Development</h4>
          <p>Creation of Digital Applications.</p>
        </div>
        <div className={styles["card"]}>
          <h4>Web Design</h4>
          <p>Website Design.</p>
        </div>
        <div className={styles["card"]}>
          <h4>Product Design</h4>
          <p>Product Development.</p>
        </div>
        <div className={styles["card"]}>
          <h4>Systems Maintenance</h4>
          <p>Technical Support and Updates.</p>
        </div>
        <div className={styles["card"]}>
          <h4>Others</h4>
          <p>Description of other services.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
