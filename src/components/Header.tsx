import styles from './Header.module.css';

import logo from '../assets/logo.svg';

export function Header() {

  return (
    <article className={styles.headerContainer}>
      <strong className={styles.header}>
        <img src={logo} alt="Logotipo ToDo" />
        <p>to<span>do</span></p>
      </strong>

    </article>
  )
};

