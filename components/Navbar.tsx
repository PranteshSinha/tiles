// src/components/NavBar.tsx

import Link from 'next/link';
import styles from './NavBar.module.css';

const NavBar: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.logoContainer} bg-grey-300 h-17`} >
        <img src="/logo.png" alt="Logo" className={styles.logo} />
        <h1 className={styles.companyName}>Company Name</h1>
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link href="/search">Search</Link>
          </li>
          <li>
            <Link href="/product">Product</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/technology">Technology</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
