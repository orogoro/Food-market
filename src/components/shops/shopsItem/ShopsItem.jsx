import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './ShopsItem.module.scss';

function ShopsItem({ link, name }) {
  return (
    <li className={styles.item}>
      <NavLink
        to={link}
        className={({ isActive }) =>
          [styles.link, isActive ? styles.active : null]
            .filter(Boolean)
            .join(' ')
        }
      >
        {name}
      </NavLink>
    </li>
  );
}

export default ShopsItem;

ShopsItem.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
