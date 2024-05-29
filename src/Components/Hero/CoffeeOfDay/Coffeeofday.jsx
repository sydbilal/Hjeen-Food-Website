import styles from "./Coffeeofday.module.css"
import Cardapp from "../Card/CardApp/Cardapp"



const Coffeeofday = () => {
  const cards = [
    { id: 1, imgsrc: '/images/coffee22.jpeg', imgalt: 'Image 1', title: 'Mocha ', price: '10' },
    { id: 2, imgsrc: '/images/coffee1.jpg', imgalt: 'Image 2', title: 'Latte', price: '20' },
    { id: 3, imgsrc: '/images/coffee1.jpg', imgalt: 'Image 3', title: 'Cappachino', price: '9' },
  ]; 

  return (
    <div className={styles.hellocoffef}>
      <Cardapp cards={cards}/>
    </div>
  )
}

export default Coffeeofday

