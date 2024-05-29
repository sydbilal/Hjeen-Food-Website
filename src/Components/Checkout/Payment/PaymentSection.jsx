import { useSelector } from "react-redux";
import { useState } from 'react';
import styles from "./PaymentSection.module.css";
import UserDetails from "../../Login/UserDetails";
// import UserDetails from './UserDetails'; 



const PaymentSection = () => {

  const [isUserDetailsOpen, setIsUserDetailsOpen] = useState(false);
  const handleLoginToCheckout = () => {
    setIsUserDetailsOpen(true); // Open UserDetails modal
  };
  
  const { cart, totalPrice } = useSelector((state) => state.cart);

  const calculateTotalVAT = (totalPrice) => {
    return totalPrice * 0.15;
  };

  const calculateTotalAmount = (totalPrice) => {
    return totalPrice - calculateTotalVAT(totalPrice);
  };

  const totalVAT = calculateTotalVAT(totalPrice).toFixed(2);
  const totalAmount = calculateTotalAmount(totalPrice).toFixed(2);

  return (
    <div className={styles.wrapper}>
      <main className={styles.Paymentsection}>
        {cart.length > 0 ? (
          <>
            <div className={styles.Subtotal}>
              <h3>Subtotal</h3>
              <h3>SAR {totalAmount}</h3>
            </div>
            <div className={styles.Totalvat}>
              <h3>Total VAT</h3>
              <h3>SAR {totalVAT}</h3>
            </div>
            <div className={styles.total}>
              <h3>Total</h3>
              <h3>SAR {totalPrice.toFixed(2)}</h3>
            </div>
            <div className={styles.checkoutbutton}>
              <button onClick={handleLoginToCheckout}>Log in to Checkout</button>
            </div>
            {isUserDetailsOpen && <UserDetails isOpen={isUserDetailsOpen} onClose={() => setIsUserDetailsOpen(false)} />}
          </>
        ) : (
          <>
            <div className={styles.Subtotal}>
              <h3>Subtotal</h3>
              <h3>SAR 00</h3>
            </div>
            <div className={styles.Totalvat}>
              <h3>Total VAT</h3>
              <h3>SAR 00</h3>
            </div>
            <div className={styles.total}>
              <h3>Total</h3>
              <h3>SAR 00</h3>
            </div>
            <div className={styles.checkoutbutton}>
              <button onClick={handleLoginToCheckout}>Log in to Checkout</button>
            </div>
            {isUserDetailsOpen && <UserDetails isOpen={isUserDetailsOpen} onClose={() => setIsUserDetailsOpen(false)} />}
          </>
        )}
      </main>
    </div>
  );
};

export default PaymentSection;
