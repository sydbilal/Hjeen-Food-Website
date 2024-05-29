// ITEMS.JSX
import { useDispatch, useSelector } from "react-redux";
import styles from "./Items.module.css"
import { increaseQuantity, decreaseQuantity, removeItemIfQuantityIsOne } from "../../../Redux/CartSlice";

const Items = () => {
    const dispatch = useDispatch();

    const handleIncreaseQuantity = (itemId) => {
        dispatch(increaseQuantity({ id: itemId }));
    };

    const handleDecreaseQuantity = (itemId, quantity) => {
        dispatch(decreaseQuantity({ id: itemId }));
        if (quantity === 1) {
            dispatch(removeItemIfQuantityIsOne({ id: itemId }));
        }
    };

    const { cart } = useSelector(state => state.cart);

    return (
        <div className={styles.wrapperitems}>
            {cart.map((item, index) => (
                <div key={index} className={styles.item}>
                    <div className={styles.cartimage}>
                        <img src={item.imgsrc} alt={item.imgalt} className={styles.itemImage} />
                    </div>
                    <div className={styles.itemDetails}>
                        <div className={styles.itemTitle}>
                            {item.title}
                        </div>
                        <div className={styles.itemPrice}>
                            SAR {item.price}
                        </div>
                        <div className={styles.quantityControls}>
                            <button className={styles.cartbutton1} onClick={() => handleDecreaseQuantity(item.id, item.qt)}>-</button>
                            <div className={styles.itemqt}>
                                {item.qt}
                            </div>
                            <button className={styles.cartbutton2} onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Items;
