import styles from "./Card.module.css";

const Card = ({ imgsrc, imgalt, title, price, onClick }) => {
  return (
    <div className={styles.Card} onClick={onClick}>
      {imgsrc && imgalt && (
        <img src={imgsrc} alt={imgalt} className={styles.cardimg} />
      )}
      {title && <h2 className={styles.cardtitle}>{title}</h2>}
      {price && <h1 className={styles.cardprice}>{price}</h1>}
    </div>
  );
};


export default Card;




