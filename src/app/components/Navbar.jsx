import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='flex  m-auto justify-between  bg-sky-500 text-white items-center h-15 fixed inset-x-0'>
      <ul className='flex py-3'>
        <Link href='/'>
          <li className= 'hover:text-slate-100 text-4xl font-bold font-sans rounded-3xl w-32 text-center bg-white text-orange-500'>
            JOFIT
          </li>
        </Link>
      </ul>
      <ul className='flex gap-7 px-5'>
        <Link href='/contactUs'>
          <li className='hover:text-slate-300 cursor-pointer '>Contact Us</li>
        </Link>
        <Link href='signUp'>
          <li>
            <button className='cursor-pointer  hover:text-slate-300'>Let's Start</button>
          </li>
        </Link>
      </ul>
    </nav>
  );
}
