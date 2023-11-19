
import StorefrontIcon from '@mui/icons-material/Storefront';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import Link from 'next/link';
import React from 'react'
import { usePathname } from 'next/navigation';

const Navigation = () => {
    const inactiveLink = 'flex gap-1 item-center p-2';
    const activeLink = inactiveLink + ' bg-white rounded text-blue-900 pr-0'
    const pathname = usePathname();
  return (
        <aside className='text-white p-4' >
        <a className="flex mb-5">
        <StorefrontIcon /> 
        <span>Ecommerce Admin</span>
        </a>
        <nav className='flex flex-col gap-5 '>
            <Link href={`/`} className={pathname === '/'? activeLink : inactiveLink}>
                <HomeOutlinedIcon />
                Dashboard
            </Link>
            <Link href={`/products`} className={pathname.includes('/products')? activeLink : inactiveLink}>
                <Inventory2OutlinedIcon />
                Products
            </Link>
            <Link href={`/orders`} className={pathname.includes('/orders')? activeLink : inactiveLink}>
                <ListAltIcon />
                Orders
            </Link>
            <Link href={`/settings`} className={pathname.includes('/settings')? activeLink : inactiveLink}>
                <SettingsOutlinedIcon />
                Settings
            </Link>
        </nav>
    </aside>
)
}

export default Navigation