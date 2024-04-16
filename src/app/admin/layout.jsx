import React from 'react'
import { SideNav, SideNavLink } from '../components/SideNav/sidenav'

export default function AdminLayout({children}) {
  return (
		<div style={{display: "flex"}}>
			<SideNav>
                <SideNavLink href="/admin">Dashboard</SideNavLink>
                <SideNavLink href="/admin/storeDetails">Store details</SideNavLink>
                <SideNavLink href="/admin/plan">Plan</SideNavLink>
                <SideNavLink href="/admin/payment">Payment</SideNavLink>
                <SideNavLink href="/admin/shipping">Shipping</SideNavLink>
            </SideNav>
			<div className='adminPage'>{children}</div>
		</div>
  );
}
