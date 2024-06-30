'use client';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SlBookOpen,
  SlBriefcase,
  SlFeed,
  SlHome,
  SlMenu,
  SlSpeech,
  SlUser,
} from 'react-icons/sl';

const links = [
  { href: '/', label: 'Home', icon: <SlHome /> },
  { href: '/about', label: 'About', icon: <SlUser /> },
  { href: '/resume', label: 'Resume', icon: <SlBookOpen /> },
  { href: '/works', label: 'Works', icon: <SlBriefcase /> },
  { href: '/blogs', label: 'Blogs', icon: <SlFeed /> },
  { href: '/contact', label: 'Contact', icon: <SlSpeech /> },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="">
      <div className="grid grid-cols-2">
        {/* Logo Section */}
        <div>
          <p className="bg-gradient-to-r from-red-500 via-teal-500 to-pink-500 bg-clip-text text-5xl font-extrabold text-transparent">
            MK
          </p>
        </div>
        {/* PC Menu */}
        <nav className="hidden lg:block">
          <ul className="flex items-center justify-end gap-3 py-2">
            {links.map((link) => (
              <Link
                key={link.href}
                className="flex justify-center items-center gap-2 px-4 py-2 active:bg-gradient-to-r active:from-orange-600 active:to-pink-600 hover:bg-gradient-to-r hover:from-orange-600 hover:to-pink-600 bg-gray-800 text-gray-50 rounded"
                href={link.href}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </ul>
        </nav>
        {/* Mobile & Tab Menu */}
        <div className="lg:hidden justify-self-end m-2">
          <Menu>
            <MenuButton className="data-[active]:bg-blue-200">
              <div className="bg-gradient-to-t from-primary to-secondary p-3 rounded-full text-gray-50">
                <SlMenu />
              </div>
            </MenuButton>
            <MenuItems
              anchor="bottom"
              className="bg-gradient-to-t from-primary to-secondary p-3 text-gray-50 rounded-md w-1/3"
            >
              {links.map((link) => (
                <MenuItem key={link.href}>
                  <Link className="btn-gradient" href={link.href}>
                    {link.icon}
                    {link.label}
                  </Link>
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  );
}
