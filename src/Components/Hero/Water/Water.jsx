import styles from "./Water.module.css"
import Cardapp from "../Card/CardApp/Cardapp"

const Water = () => {
  const cards = [
    { id: 15, imgsrc: '/images/coffee1.jpg', imgalt: 'Image 1', title: 'Water', price: '10' },
    { id: 16, imgsrc: '/images/coffee1.jpg', imgalt: 'Image 2', title: 'Sparkling Water', price: '20' },
    { id: 17, imgsrc: '/images/coffee1.jpg', imgalt: 'Image 3', title: 'Spring Water', price: '9' },
  ]

  return (
    
    <div className={styles.water}>
      <Cardapp cards={cards}/>
    </div>
  )
}

export default Water
