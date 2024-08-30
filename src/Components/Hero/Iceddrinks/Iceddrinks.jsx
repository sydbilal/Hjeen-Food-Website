import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Iceddrinks.module.css"
import Cardapp from "../Card/CardApp/Cardapp"

const IcedDrinks = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/");
        const allProducts = response.data;
        const limitedProducts = allProducts.slice(4, ); 
        const formattedCards = limitedProducts.map(product => ({
          id: product.id,
          imgsrc: product.image,
          imgalt: product.title,
          title: product.title,
          description: product.description,
          price: product.price.toString(),
        }));
        setCards(formattedCards);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.iceddrinks}>
      {cards.length > 0 ? <Cardapp cards={cards} /> : <p>Loading...</p>}
    </div>
  );
};

export default IcedDrinks
