"use client"
import React, { useState } from 'react';
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
    <section className='h-[37rem] bg-[url(/office.avif)] bg-cover pt-40 flex justify-center items-center border-r-4'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-[400px]'>
        <form onSubmit={handleSubmit} className='space-y-5'>
          <div className='space-y-2'>
            <label htmlFor='email' className='text-xl font-bold'>
              Email:
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='example@gmail.com'
              value={formData.email}
              onChange={handleChange}
              className='w-full text-xl rounded-xl pl-7 py-2 focus:outline-none focus:ring focus:border-blue-300'
            />
          </div>
          <div className='space-y-2'>
            <label htmlFor='password' className='text-xl font-bold'>
              Password:
            </label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='********'
              value={formData.password}
              onChange={handleChange}
              className='w-full text-xl rounded-xl pl-5 py-2 focus:outline-none focus:ring focus:border-blue-300'
            />
          </div>
          <Link href='Home'>
            <button
              type='submit'
              className='w-full h-[45px] text-2xl font-medium rounded-xl bg-blue-600 hover:bg-blue-800 text-white transition-colors duration-300'
            >
              Log In
            </button>
          </Link>
        </form>
        <p className='mt-5 text-xl'>
          Don't have an account yet?{' '}
          <Link href='signUp' className='hover:text-blue-700'>
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
