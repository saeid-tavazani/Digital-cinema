"use client";
import { useState, useEffect } from "react";
import { IoMenu, IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { text: "صفحه اصلی", slug: "/" },
  { text: "تئاتر و سینما", slug: "/theater-cinema" },
  { text: "موزیک", slug: "/music" },
  { text: "پخش انلاین", slug: "/watch-online" },
  { text: "سوالات متداول", slug: "/faqs" },
];

const liStyle =
  "text-base my-2 hover:text-red-700 transition-all ease-linear duration-200 whitespace-nowrap";

const NavHeader = () => {
  const [activeSlug, setActiveSlug] = useState<string>("/");
  return (
    <ul className="flex items-center gap-3 h-full">
      {navItems.map(({ text, slug }) => (
        <li
          key={slug}
          onClick={() => setActiveSlug(slug)}
          className={`${liStyle} ${activeSlug === slug ? "text-red-700" : ""}`}
        >
          <Link href={slug}>{text}</Link>
        </li>
      ))}
    </ul>
  );
};

const NavMobile = () => {
  const [activeSlug, setActiveSlug] = useState<string>("/");
  const [open, setOpen] = useState(false);
  return (
    <div>
      <IoMenu
        size={35}
        className="cursor-pointer"
        onClick={() => setOpen(!open)}
      />
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              backdropFilter: "blur(10px)",
            }}
            exit={{
              opacity: 0,
              backdropFilter: "blur(0px)",
            }}
            className="flex w-screen h-screen items-center gap-3 flex-col justify-center absolute bg-black bg-opacity-50 inset-0 z-50"
          >
            <IoCloseOutline
              size={35}
              onClick={() => setOpen(false)}
              className="absolute top-10 left-10 cursor-pointer"
            />
            {navItems.map(({ text, slug }, index) => (
              <motion.li
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index / 15 }}
                key={slug}
                onClick={() => setActiveSlug(slug)}
                className={`${liStyle} ${
                  activeSlug === slug ? "text-red-700" : ""
                }`}
              >
                <Link href={slug}>{text}</Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export const NavNavHeader = () => {
  const [sizeWindow, setSizeWindow] = useState<"small" | "large">(
    window.innerWidth < 760 ? "small" : "large"
  );
  const handleWindowSizeSet = () => {
    if (window.innerWidth < 760) {
      setSizeWindow("small");
    } else {
      setSizeWindow("large");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeSet);
    return () => {
      window.removeEventListener("resize", handleWindowSizeSet);
    };
  }, []);
  return sizeWindow === "small" ? <NavMobile /> : <NavHeader />;
};

export const NavFooter = () => {
  return (
    <ul>
      {navItems.map(({ text, slug }) => (
        <li key={slug} className={liStyle}>
          <Link href={slug}>{text}</Link>
        </li>
      ))}
    </ul>
  );
};
