import styles from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[
        {
          id: "c1",
          name: "Sushi",
          amount: 2,
          price: 12.09,
        },
      ].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.hiddeCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span> 35.62</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.hiddeCart} className={styles["button--alt"]}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
