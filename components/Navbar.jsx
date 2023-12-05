import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
    const quantity = useSelector ((state)=> state.cart.quantity);
    return (
        <div className={styles.container}>
            <div className={styles.item}>
            <div className={styles.callButton}>
                <Image src="/img/phone.png" alt="" width="32" height="32"/>
            </div>
            <div className={styles.texts}>
            <div className={styles.text}>Order now</div>
            <div className={styles.text}>123 123 123 1</div>

            </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <Link href="/" passHref>
                    <li className={styles.listItem}>Homepage</li>
                    </Link>                    
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <Image src= "/img/logo.png" alt ="" width="160" height="160"></Image>
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <Link href="/cart" passHref>
             <div className={styles.item}>
                <div>
                {/* <Image src="/img/cart_logo.png" alt ="" width="160" height="160"></Image> */}
                <div>cart({quantity})</div>
                </div>
             </div>    
            </Link>
            
            
        </div>
    );
};

export default Navbar