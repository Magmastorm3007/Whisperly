"use client"

import React, { useState } from 'react'
import Avatar from './Avatar'
import { handleSubmit } from '@/lib/fetchers'
import { useRouter } from 'next/navigation'
const Form = () => {

  const router=useRouter();
    const [id,setId]=useState( (Math.random()*20).toFixed())
  return (
    <form onSubmit={(e)=>handleSubmit(e,router,id)} className='flex flex-col gap-5'>
       <Avatar avatarId={id} setAvatarId={setId}/> 
        <div className='flex flex-col xl:flex-row gap-5'>
            <div className='form-control w-full'>
                <label className='label'>
                    <span className='label-text text-lg'>What is your name?</span>
                    </label>
                    <input type="text" placeholder='Username' className='input input-bordered w-full' required/>
                    <label className='label'>
                    <span className='label-text text-lg'>Write your Email ID</span>
                    </label>
                    <input type="text" placeholder='Email' className='input input-bordered w-full' required/>
               
            </div>
        </div>
        <button className='btn'>Login</button>
    </form>
  )
}

export default Form