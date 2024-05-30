import Hero from "../Components/Hero/Hero";
import Header from "../Components/Header/Header";
import styles from "./Homepage.module.css"

const Homepage = () => {
  return (
    <div className={styles.Homepagecomponents}>
      <Header />
      <Hero />
    </div>
  );
};

export default Homepage;
