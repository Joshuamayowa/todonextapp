"use client"
import { useState } from 'react';
import Link from 'next/link';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className='h-[37rem] bg-[url(/office.avif)] bg-cover pt-40 justify-center text-center  border-r-4'>
    <div className=''>
      <form onSubmit={handleSubmit}>
        <div className='mt-5'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='example@gmail.com'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='mt-5'>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder='.......'
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <Link href="Home"><button type="submit" className='bg-sky-500 text-1xl mt-5 rounded-xl'>
          Log In
        </button></Link>
      </form>
      <p className='mt-5 text-xl'>
        Don't have an account yet?{' '}
        <Link href="signUp" className='hover:text-sky-400'>
          Sign up 
        </Link>
      </p>
      <div>
        
        
      </div>
    </div>
    </section>
  );
};

export default Login;
