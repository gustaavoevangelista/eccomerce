'use client';

import Link from 'next/link';
import styles from './sidenav.module.css';
import { usePathname } from 'next/navigation';

export function SideNav({ children }) {
	return <aside className={styles.sideNav}>{children}</aside>;
}

export function SideNavLink({ ...props }) {
	const pathName = usePathname();

	return <Link {...props} className={(styles.sideNavLink , pathName === props.href && styles.sideNavLinkActive)} ></Link>;
}
