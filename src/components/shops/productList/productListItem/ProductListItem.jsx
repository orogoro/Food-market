import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { productsAPI } from '../../../../axiosAPI';
import { fechOneProduct } from '../../../../redux/operations';

import like from '../../../../image/like.svg';

import styles from './ProductListItem.module.scss';

function ProductListItem({
  id,
  name,
  price,
  image,
  addToFavorites,
  favorites,
}) {
  const [picture, setPicture] = useState('');
  const dispatch = useDispatch();

  const active = favorites.find(item => item.id === id);

  useEffect(() => {
    (async () => {
      const img = await productsAPI.image(image);
      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onloadend = () => {
        const base64data = reader.result;
        setPicture(base64data);
      };
    })();
  }, [image]);

  return (
    <li className={styles.container}>
      <Link to={`${id}`} onClick={() => dispatch(fechOneProduct(id))}>
        <img className={styles.image} src={picture} alt={name} />
      </Link>
      <p className={styles.name}>{name}</p>
      <div className={styles.priceContainer}>
        <p className={styles.price}>{`$ ${price}`}</p>
        <div
          className={styles.likeContainer}
          onClick={() => addToFavorites(id, { name, price, picture })}
        >
          <img className={styles.like} src={like} alt="like" />
          <div
            className={`${styles.black} ${active ? styles.blackAll : ''}`}
          ></div>
        </div>
      </div>
    </li>
  );
}

export default ProductListItem;
