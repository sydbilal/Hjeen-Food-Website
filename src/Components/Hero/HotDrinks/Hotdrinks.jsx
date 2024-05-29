import styles from "./Hotdrinks.module.css"
import Cardapp from "../Card/CardApp/Cardapp"


const HotDrinks = () => {
  const cards = [
    { id: 1, imgsrc: '/images/coffee1.jpg', imgalt: 'Image 1', title: 'Mocha ', price: '10' },
    { id: 232, imgsrc: '/images/coffee1.jpg', imgalt: 'Image 2', title: 'Hot Chocolate ', price: '20' },
    { id: 244, imgsrc: '/images/coffee1.jpg', imgalt: 'Image 2', title: 'Espresso ', price: '20' },
    { id: 277, imgsrc: '/images/coffee1.jpg', imgalt: 'Image 2', title: 'Americano ', price: '20' },
  ];

  return (
    
    <div className={styles.Hotdrinks}>
        <Cardapp cards={cards}/>
      
    </div>
  )
}

export default HotDrinks
