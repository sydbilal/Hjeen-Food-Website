import Coffeeofday from "./CoffeeOfDay/Coffeeofday";
import Desert from "./Desert/Desert";
import styles from "./Hero.module.css"
import HotDrinks from "./HotDrinks/Hotdrinks";
import IcedDrinks from "./Iceddrinks/Iceddrinks";
import Water from "./Water/Water";

const Hero = () => {
  return (
    <main className={`${styles.Hero} container`}>
      <h2 className={styles.welcometext}>Welcome to Hjeen 👋</h2>
      <div className={styles.Headings}>
        <h1>Coffee of the Day</h1>
        <Coffeeofday/>
        <h1>Hot Drinks</h1>
        <HotDrinks/>
        <h1>Iced Drinks</h1>
        <IcedDrinks/>
        <h1>Deserts</h1>
        <Desert/>
        <h1>Water</h1>
        <Water/>
      </div>

    </main>
  );
};

export default Hero;
