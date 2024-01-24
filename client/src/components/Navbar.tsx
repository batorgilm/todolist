import Link from 'next/link';
import { menus } from '@/constants';

export const Navbar = () => {
  return (
    <header className="flex gap-4">
      {menus.map((menu, index) => (
        <Link key={menu.link + index} href={menu.link}>
          {menu.title}
        </Link>
      ))}
    </header>
  );
};
