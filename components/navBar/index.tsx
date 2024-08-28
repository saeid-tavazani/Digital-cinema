import AuthLayout from "./auth/authLayout";
import LogoSite from "../ui/logoSite";
import { NavHeader } from "./navLink";
// import { NavHeader, NavMobile } from "./navLink";

const index = () => {
  return (
    <header className="h-16 z-50 w-full fixed top-0 left-0 right-0">
      <nav className="container flex items-center gap-4 justify-between h-full">
        <div className="flex items-center gap-3">
          <AuthLayout />
          <NavHeader />
        </div>
        <LogoSite />
      </nav>
    </header>
  );
};

export default index;
