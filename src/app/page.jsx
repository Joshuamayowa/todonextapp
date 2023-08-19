import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
   
<div >
      <h2 className='text-center text-5xl font-bold pt-40'>Simplify work and get more done.</h2>
      <p className='text-center font-bold text-2xl mt-10'>Plan, track, and manage any type of work with project management that flexes to your team's needs.</p>
   
      <Link href= 'signUp'>
            <p className='text-center mt-10'><button className='capitalize font-medium text-2xl w-40 h-[45px] rounded-2xl m-auto justify-evenly bg-blue-500 hover:bg-blue-800 content-center'>Let's Start</button></p>
            </Link>
        
    </div>
  )
}



