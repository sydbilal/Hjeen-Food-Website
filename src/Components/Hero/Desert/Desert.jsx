import styles from "./Desert.module.css"
import Cardapp from "../Card/CardApp/Cardapp"

const Desert = () => {
  const cards = [
    { id: 4, imgsrc: '/images/coffee1.jpg', imgalt: 'Image 1', title: 'Milk Bowl', price: '10' },
    { id: 5, imgsrc: '/images/coffee1.jpg', imgalt: 'Image 2', title: 'Apple Pie', price: '20' },
    { id: 6, imgsrc: '/images/coffee1.jpg', imgalt: 'Image 3', title: 'Triffle', price: '9' },
  ]
  return (
    
    <div className={styles.desert}>
      <Cardapp cards={cards}/>
    </div>
  )
}

export default Desert
