import styles from "../styles/Featured.module.css";
import Image from "next/image";
const Featured = () => {
    const image = [
        "/img/featured.png",
        "/img/featured2.png",
        "/img/featured3.png",
    ];
    return (
        <div className={styles.container}>
            <Image src="/img/temporary/p1.png" alt="" layout="fill"/>
            <div className={styles.wrapper}>
                <div className={styles.imgContainer}>
                    {image.map((img, i) => (<Image src="/img/temporary/p1.png" alt="" layout="fill" />))}
                </div>

            </div>
            <Image src="/img/temporary/p1.png" alt="" layout="fill" />
        </div>
    );
};

export default Featured;