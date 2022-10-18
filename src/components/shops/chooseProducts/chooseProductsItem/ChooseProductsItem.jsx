// import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { deleteProduct } from '../../../../redux/actions';

import like from '../../../../image/like.svg';

import styles from './ChooseProductsItem.module.scss';

function ChooseProductsItem({ id, name, price, image }) {
  const dispatch = useDispatch();

  return (
    <li className={styles.container}>
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.informationContainer}>
        <p className={styles.name}>{name}</p>
        <div className={styles.priceContainer}>
          <p className={styles.price}>{`$ ${price}`}</p>
          <div
            className={styles.likeContainer}
            onClick={() => dispatch(deleteProduct(id))}
          >
            <img className={styles.like} src={like} alt="like" />
            <div className={`${styles.black} ${styles.blackAll}`}></div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ChooseProductsItem;
