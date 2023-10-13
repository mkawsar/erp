'use client';
import Link from 'next/link';
import React, {FC} from 'react';
import {usePathname} from 'next/navigation';

interface HeaderNavLinkProps {
    href: string;
    children: React.ReactNode;
}

const HeaderNavLink: FC<HeaderNavLinkProps> = ({href, children}) => {
    const pathname = usePathname();
    const active = href === pathname;

    return (
        <Link href={href} className={`hover:bg-gray-100 p-2 rounded block ${active || (href.startsWith('/') && pathname.startsWith('/')) ? 'text-black font-semibold' : 'text-gray-500' }`}>
            {children}
        </Link>
    );
};

export default HeaderNavLink;
