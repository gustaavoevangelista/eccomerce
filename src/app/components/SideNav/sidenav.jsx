'use client';

import Link from 'next/link';
import styles from './sidenav.module.css';
import { usePathname } from 'next/navigation';

export function SideNav({ children }) {
	return <aside className={styles.sideNav}>{children}</aside>;
}

export function SideNavLink({ ...props }) {
	const pathName = usePathname();

	return <Link {...props} className={(pathName === props.href ? styles.sideNavLinkActive : styles.sideNavLink )}></Link>;
}
