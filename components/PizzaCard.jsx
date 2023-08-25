import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="100" height="100" />
      <h1 className={styles.title}>Best Pizza</h1>
      <span className={styles.price}>Rs. 190</span>
      <p className={styles.desc}>
      "A Slice of Heaven, Delivered On Demand."      </p>
    </div>
  );
};

export default PizzaCard;
