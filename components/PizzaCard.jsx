import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = ({ pizza }) => {
    return (
        <div className={styles.container}>
            <Image src="/img/pizza.png" alt="" width="100" height="100"/>
            <h1 className={styles.title}>Pizza</h1>
            <span className={styles.price}> Rs.2000/-</span>
            <p className="{styles.desc}" color="black">
                le lauda thoda kam bhi kiya kar din
            </p>



        </div>
    );
};

export default PizzaCard;
