import styles from '../../styles/Product.module.css';
import Image from "next/image";
import { useState } from 'react';


const Product = () => {
  const [size, setSize] = useState(0);

  const pizza = {
  
    id: 1,
    img: "/img/pizza.png",
    name: "CAMPAGNOLA",
    price: [12.3, 123.12, 123.2],
    desc: " priyash is my friend take discount from him"
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setsize(0)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setsize(1)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setsize(2)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.ingrediants}>
            < div className={styles.option}>
              <input
                type="checkbox"
                id='double'
                name='double'
                className={styles.checkbox}
              />
              <label htmlfor="double">Double Ingrediants</label><br></br>
            </div>
            <input
                type="checkbox"
                id='double'
                name='double'
                className={styles.checkbox}
              />
              <label htmlfor="double">masala</label><br></br>
              <input
                type="checkbox"
                id='double'
                name='double'
                className={styles.checkbox}
              />
              <label htmlfor="double">cheeze</label><br></br>
              <input
                type="checkbox"
                id='double'
                name='double'
                className={styles.checkbox}
              />
              <label htmlfor="double">kuchbhi</label><br></br>
            

          </div>
        </div>
        <div className={styles.add}>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            defaultValue={1}
            className={styles.quantity}
          />
          Add to Cart
        </div>
      </div>
    </div>
  );
};

export default Product;