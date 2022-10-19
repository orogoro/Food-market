import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { deleteProduct } from '../../../../redux/actions';
import { fechOneProduct } from '../../../../redux/operations';

import like from '../../../../image/like.svg';

import styles from './ChooseProductsItem.module.scss';

function ChooseProductsItem({ id, name, price, image }) {
  const dispatch = useDispatch();

  return (
    <li className={styles.container}>
      <Link to={`${id}`} onClick={() => dispatch(fechOneProduct(id))}>
        <img className={styles.image} src={image} alt={name} />
      </Link>
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

ChooseProductsItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};
