import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import UserDetails from "../Login/UserDetails";
import styles from "./Header.module.css";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cartItems = useSelector((state) => state.cart);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/"><img src="/images/spot.hjeen.svg" alt="Logo" /></Link>
      </div>
      <div className={styles.icons}>
        <NavLink to="/cart">
          <div className={styles.cartIconContainer}>
            <FontAwesomeIcon icon={faShoppingCart} className={styles.icon} />
            <h4 className={styles.cartCount}>{cartItems.cart.length}</h4>
          </div>
        </NavLink>
        <FontAwesomeIcon
          icon={faUser}
          className={styles.icon}
          onClick={onOpen}
        />
      </div>
      <UserDetails isOpen={isOpen} onClose={onClose} />
    </header>
  );
};

const App = () => (
  <ChakraProvider>
    <Header />
  </ChakraProvider>
);

export default App;
