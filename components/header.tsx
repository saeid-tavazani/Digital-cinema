import logo from '@/assets/netflixFullLogo.png';
import Image from 'next/image';
import Link from 'next/link';
import { IoLogInOutline } from 'react-icons/io5';
import { LuUserRoundPlus } from 'react-icons/lu';
import { Button } from './ui/button';
const Header = () => {
  return (
    <header className="w-screen my-5">
      <nav className="container flex items-center justify-center flex-col sm:flex-row-reverse flex-wrap gap-4 sm:justify-between">
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
      </nav>
    </header>
  );
};

export default Header;
