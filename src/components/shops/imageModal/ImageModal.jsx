import styles from './ImageModal.module.scss';
import PropTypes from 'prop-types';

function ImageModal({ active, setActive, picture }) {
  return (
    <div
      className={`${styles.container} ${active ? styles.active : ''}`}
      onClick={() => setActive(false)}
    >
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <img className={styles.image} src={picture} alt="foto" />
        {/* <button className={styles.button} onClick={() => setActive(false)}>
          <img className={styles.imgB} src={corseMobile} alt="corseMobile" />
        </button> */}
      </div>
    </div>
  );
}

export default ImageModal;

ImageModal.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  picture: PropTypes.string.isRequired,
};
