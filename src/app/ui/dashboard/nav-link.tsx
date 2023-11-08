'use client'
import Link, { LinkProps } from "next/link"
import { DocumentDuplicateIcon, HomeIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import { usePathname } from "next/navigation"
import clsx from "clsx"

type TLink = {
    key: number
    title?: string,
    icon: () => any
} & LinkProps

const routeLink: TLink[] = [
    {
        key: 1,
        href: '/dashboard',
        title: 'Home',
        icon: () => HomeIcon
    },
    {
        key: 2,
        href: '/dashboard/invoices',
        title: 'Invoices',
        icon: () => DocumentDuplicateIcon
    },
    {
        key: 3,
        href: '/dashboard/customers',
        title: 'Customers',
        icon: () => UserGroupIcon
    },
]

const NavLink: React.FC = () => {
    const pathName = usePathname();
    return (
        <>
            {routeLink.map(item => {
                const LinkIcon = item.icon()
                return (
                    <Link key={item.key} href={item.href} className={clsx("flex items-center gap-3 bg-gray-50 p-2 rounded-md",
                        pathName === item.href && 'bg-slate-500 text-gray-200'
                    )}>
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{item.title}</p>
                    </Link>
                )
            })}
        </>
    )
}

export default NavLink