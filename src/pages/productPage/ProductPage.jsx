import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ReactImageMagnify from 'react-image-magnify';

import { getChoosesProducts, getOneProduct } from '../../redux/selectors';
import {
  chooseProduct,
  deleteProduct,
  deleteOneProduct,
} from '../../redux/actions';
import { productsAPI } from '../../axiosAPI';

import { ImageModal } from '../../components/shops';

import like from '../../image/like.svg';
import zoom from '../../image/zoom.png';
import back from '../../image/back.png';

import styles from './ProductPage.module.scss';

function ProductPage() {
  const { itemId } = useParams();
  const dispatch = useDispatch();
  const favorites = useSelector(getChoosesProducts);
  const { id, name, price, src } = useSelector(getOneProduct);
  const [picture, setPicture] = useState('');
  const [modalActive, setModalActive] = useState(false);

  const active = favorites.find(item => item.id === Number(itemId));

  const handleClickFavorites = () => {
    if (active) {
      dispatch(deleteProduct(id));
      return;
    }

    const data = {
      id,
      name,
      price,
      picture,
    };

    dispatch(chooseProduct(data));
  };

  useEffect(() => {
    (async () => {
      const img = await productsAPI.image(src);
      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onloadend = () => {
        const base64data = reader.result;
        setPicture(base64data);
      };
    })();
  }, [src]);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {/* <img className={styles.image} src={picture} alt={name} /> */}
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: name,
              // isFluidWidth: true,
              width: 428,
              height: 428,
              src: picture,
            },
            largeImage: {
              src: picture,
              width: 1000,
              height: 1000,
            },
          }}
        />
        <img
          className={styles.zoom}
          src={zoom}
          alt="zoom"
          onClick={() => setModalActive(true)}
        />
      </div>
      <div className={styles.containerInformation}>
        <h1 className={styles.name}>{name}</h1>
        <div className={styles.priceContainer}>
          <p className={styles.price}>{`$ ${price}`}</p>
          <div className={styles.likeContainer} onClick={handleClickFavorites}>
            <img className={styles.like} src={like} alt="like" />
            <div
              className={`${styles.black} ${active ? styles.blackAll : ''}`}
            ></div>
          </div>
        </div>
      </div>
      <ImageModal
        active={modalActive}
        setActive={setModalActive}
        picture={picture}
      />
      <button
        className={styles.buttonBack}
        onClick={() => dispatch(deleteOneProduct(null))}
      >
        <img className={styles.backImage} src={back} alt="back" />
      </button>
    </div>
  );
}

export default ProductPage;
