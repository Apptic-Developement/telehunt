import Link from 'next/link';
import { Logo } from '../logo';
import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <Logo />
        </Link>
        
      </nav>
    </header>
  );
};
