import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='flex flex-col md:flex-row justify-between bg-blue-500 text-white items-center p-3 md:p-0'>
      <ul className='flex py-3'>
        <Link href='/'>
          <li className='hover:text-slate-100 text-2xl md:text-4xl font-bold rounded-2xl font-serif cursor-pointer w-36 md:w-40 text-center bg-white text-orange-500'>
            JOFIT
          </li>
        </Link>
      </ul>
      <ul className='flex gap-4 md:gap-7 py-3 md:py-0'>
        <Link href='/contactUs'>
          <li className='hover:text-slate-100 cursor-pointer'>Contact Us</li>
        </Link>
        <Link href='signUp'>
          <li>
            <button className='cursor-pointer'>Let's Start</button>
          </li>
        </Link>
      </ul>
    </nav>
  );
}
