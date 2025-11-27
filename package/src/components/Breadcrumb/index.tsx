import React, { FC } from 'react';
import Link from 'next/link';

interface BreadcrumbProps {
    links: { href: string; text: string }[];    
}

const Breadcrumb: FC<BreadcrumbProps> = ({ links }) => {
    const lastIndex = links.length - 1;
    return (
        <nav className="flex items-center text-lg" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
                {links.map((link, index) => (
                    <li key={index} className="flex items-center">
                        {index !== lastIndex ? (
                            <>
                                <Link href={link.href} className="text-gray-500 dark:text-gray-400 hover:text-primary">
                                    {link.text}
                                </Link>
                                <span className="mx-2 text-gray-500 dark:text-gray-400">&gt;</span>
                            </>
                        ) : (
                            <span className="text-primary font-semibold">{link.text}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;