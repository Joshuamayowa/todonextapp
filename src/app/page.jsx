import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
   
<div >
      <h2 className='text-center text-5xl font-bold pt-40'>Simplify work and get more done.</h2>
      <p className='text-center font-bold text-2xl mt-10'>Plan, track, and manage any type of work with project management that flexes to your team's needs.</p>
   
      <Link href= 'signUp'>
            <p className=' m-auto rounded-2xl w-40 bg-blue-400 mt-20 font-medium h-[45px] hover:text-white items-center pb-5  text-2xl py-5 justify-evenly'><button className='m-auto items-center pb-3  '>Let's Start</button></p>
            </Link>
        
    </div>
  )
}



