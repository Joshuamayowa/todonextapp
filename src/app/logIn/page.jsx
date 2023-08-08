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
        <div className='mt-5 font-bold items-center texl-2xl'>
          <label htmlFor="email">Email:</label>
          <input className='text-xl rounded-xl pl-7 items-center m-auto'
            type="email"
            id="email"
            name="email"
            placeholder='example@gmail.com'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='mt-5 text-xl font-bold items-center '>
          <label htmlFor="password">Password:</label>
          <input className='text-xl rounded-xl pl-5 font-bold items-center'
            type="password"
            id="password"
            name="password"
            placeholder='********'
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <Link href="Home"><button type="submit" className='capitalize font-medium text-2xl w-40 h-[45px] rounded-xl m-auto justify-evenly bg-blue-600 hover:bg-blue-800  mt-5'>
          Log In
        </button></Link>
      </form>
      <p className='mt-5 text-xl'>
        Don't have an account yet?{' '}
        <Link href="signUp" className='hover:text-blue-700'>
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
