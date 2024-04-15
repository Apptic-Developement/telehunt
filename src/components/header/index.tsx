'use client';
import Link from 'next/link';
import { Logo } from '../logo';
import styles from './header.module.css';
import { useRoutes } from '@/hooks/useRoutes';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [offset, setOffset] = useState<number>(0);
  const routes = useRoutes({ bottomRoutes: false });

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setOffset(window.scrollY);
    });

    return () => window.removeEventListener('scroll', () => setOffset(0));
  }, []);
  return (
    <header className={cn(styles.header, {
      'border border-border/45  bg-background/95 supports-[backdrop-filter]:bg-background/60 backdrop-blur': offset >= 50
    })}>
      <nav className={styles.nav}>
        <Link href="/">
          <Logo />
        </Link>

        <ul className={styles.navLinks}>
          {routes &&
            routes.map(({ name, active, href }) => {
              return (
                <li
                  key={href || name}
                  className={cn({
                    '!text-foreground !font-medium': active,
                  })}
                >
                  <Link href={href || '/404'}>{name}</Link>
                </li>
              );
            })}
        </ul>
        
        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};
