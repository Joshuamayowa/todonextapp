"use client"
import { useState } from 'react';
import Link from 'next/link';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
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
      const response = await fetch('/api/signup', {
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
    <section className='h-[37rem] bg-[url(/office.avif)] bg-cover pt-40 justify-center text-center  border-r-4 bg-slate-800'>
    <div className=''>
      <form onSubmit={handleSubmit}>
        <div className='font-bold'>
          <label htmlFor="username">Username:</label>
          <input className='text-xl rounded-xl pl-5 font-bold items-center'
            type="text"
            id="username"
            name="username"
            placeholder='Jack1234'
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className='mt-5 font-bold'>
          <label htmlFor="email">Email:</label>
          <input className='text-xl rounded-xl pl-5 font-bold items-center'
            type="email"
            id="email"
            name="email"
            placeholder='example@gmail.com'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='mt-5 font-bold'>
          <label htmlFor="password">Password:</label>
          <input className='text-xl rounded-xl pl-5 font-bold items-center'
            type="password"
            id="password"
            name="password"
            placeholder='*******'
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
        <Link href="Home">
        <button type="submit" className='capitalize font-medium text-2xl w-40 h-[45px] rounded-2xl m-auto justify-evenly bg-blue-500 hover:bg-blue-800 content-center mt-5'>Sign Up</button>
        </Link>
        </div>
      </form>
      <p className='mt-5'>
        Already have an account?{' '}
        <Link href="/logIn" className='hover:text-blue-700'>
          Login
        </Link>
      </p>
       
    </div>
    </section>
  );
};
export default Signup;
