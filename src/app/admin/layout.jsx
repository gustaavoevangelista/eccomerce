import React from 'react'
import { SideNav, SideNavLink } from '../components/SideNav/sidenav'

//dont cache this page because it has dynamic content
//and the internet connection usually is good
export const dynamic = "force-dynamic"

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
