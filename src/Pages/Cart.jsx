import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import Header from "../Components/Header/Header";
import Checkboxapp from "../Components/Checkout/Checkbox/Checkboxapp";
import styles from "./Cart.module.css"
import BranchSelector from "../Components/Checkout/Branch/BranchSelector";
import PaymentSection from "../Components/Checkout/Payment/PaymentSection";
import Items from "../Components/Checkout/Items/Items";

const Cart = () => {
  return (
    <div className={styles.cart}>
      <Header />
      <div className={styles.main}>
        <NavLink to="/">
            <FontAwesomeIcon className={styles.backarrow} icon={faArrowLeft} />
        </NavLink>
        <h1 className={styles.checkoutheading}>Checkout</h1>
      </div>
      <h3 className={styles.selectbranch}>Select Branch</h3>
      <BranchSelector/>
      <Checkboxapp />
      <h3 className={styles.payment}>Payment</h3>
      <PaymentSection/>
      <h3 className={styles.item}>Items</h3>
      <Items/>
    </div>
  );
};

export default Cart;
