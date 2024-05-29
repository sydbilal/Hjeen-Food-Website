import styles from "./Iceddrinks.module.css"
import Cardapp from "../Card/CardApp/Cardapp"

const IcedDrinks = () => {
  const cards = [
    { id: 12, imgsrc: '/images/coffee1.jpg', imgalt: 'Image 1', title: 'Cold Brew ', price: '10' },
    { id: 13, imgsrc: '/images/coffee1.jpg', imgalt: 'Image 2', title: 'Iced Coffee ', price: '20' },
    { id: 14, imgsrc: '/images/coffee1.jpg', imgalt: 'Image 3', title: 'Ice Tea ', price: '9' },
  ];

  return (
    
    <div className={styles.iceddrinks}>
              <Cardapp cards={cards}/>

    </div>
  )
}

export default IcedDrinks
