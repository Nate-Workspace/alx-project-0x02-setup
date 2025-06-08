import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/home">/home</Link>
        <Link href="/about">/about</Link>
      </nav>
    </header>
  );
};

export default Header;
