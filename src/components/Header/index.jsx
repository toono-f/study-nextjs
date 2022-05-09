import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <ul className="flex gap-[20px] justify-center py-20 border-b">
        <li>
          <Link href="/">
            <a href="">Index</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a href="">About</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};
