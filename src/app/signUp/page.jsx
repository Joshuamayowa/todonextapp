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
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder='Jack1234'
            value={formData.username}
            onChange={handleChange}
          />
        </div>
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
            placeholder='0000000000'
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
        <Link href="Home">
        <button type="submit" className='bg-sky-500 text-1xl mt-5 rounded-full'>Sign Up</button>
        </Link>
        </div>
      </form>
      <p className='mt-5'>
        Already have an account?{' '}
        <Link href="/logIn" className='hover:text-sky-400'>
          Login
        </Link>
      </p>
       
    </div>
    </section>
  );
};
export default Signup;
