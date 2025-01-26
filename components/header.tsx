import logo from '@/assets/netflixFullLogo.png';
import Image from 'next/image';
import Link from 'next/link';
import { IoLogInOutline } from 'react-icons/io5';
import { LuUserRoundPlus } from 'react-icons/lu';
import NavLink from './navLink';
import { Button } from './ui/button';

const items = [
  {
    text: 'Home',
    slug: '/',
  },
  {
    text: 'Recommended movies',
    slug: '/recommended',
  },
  {
    text: 'App',
    slug: '/app',
  },
];

const Header = () => {
  return (
    <header className="w-screen my-5">
      <div className="container flex items-center justify-center flex-col sm:flex-row flex-wrap gap-4 sm:justify-between">
        <Link href="/">
          <Image className="w-56 sm:w-60" src={logo} alt="netflix logo" />
        </Link>
        <div className="flex items-center gap-2">
          <Button className="rounded-full" variant="secondary">
            <LuUserRoundPlus />
            Register
          </Button>
          <Button className="rounded-full">
            <IoLogInOutline />
            Login
          </Button>
        </div>
      </div>
      <nav className="w-full h-20 bg-secondary mt-5 flex items-center">
        <div className="container flex items-center gap-2 justify-between">
          <ul className="flex items-center gap-4">
            {items.map(({ slug, text }) => (
              <li key={slug}>
                <NavLink slug={slug} text={text} />
              </li>
            ))}
          </ul>
        </div>
        {/* <form action=""></form> */}
      </nav>
    </header>
  );
};

export default Header;
