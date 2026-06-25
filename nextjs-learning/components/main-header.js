import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/images/logo.png";

export default function MainHeader() {
  return (
    <>
      <style>{`
        .nav-link:hover,
        .nav-link:active {
          background: linear-gradient(90deg, #ff8a05, #f9b331);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 18px rgba(248, 190, 42, 0.8);
        }
      `}</style>
      <header className="flex items-center justify-between pt-1 pb-1 pl-2 pr-2">
        <Link
          className="flex items-center justify-center gap-2 font-bold text-[1.5rem] uppercase tracking-[0.15rem] text-[var(--color-primary)]"
          href="/"
        >
          <Image src={logoImg} alt="A plate with food on it" className="w-20 h-20 object-contain drop-shadow-lg"/>
          NextLevel Food
        </Link>

        <nav className="flex items-center justify-between">
          <ul className="list-none m-0 p-0 flex gap-6 text-[1.25rem]">
            <li>
              <Link href="/meals" className="nav-link no-underline text-[#ddd6cb] font-bold px-4 py-2 rounded-lg">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community" className="nav-link no-underline text-[#ddd6cb] font-bold px-4 py-2 rounded-lg">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
