'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type PropsType = {
  slug: string;
  text: string;
};

const NavLink = ({ slug, text }: PropsType) => {
  const path = usePathname();

  const isActive = path === slug;

  return (
    <Link className={clsx(isActive ? 'text-primary' : '')} href={slug}>
      {text}
    </Link>
  );
};

export default NavLink;
