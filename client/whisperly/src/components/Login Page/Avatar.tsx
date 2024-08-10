'use client'

import React from 'react'
import Image from 'next/image'
import { AvatarProps } from '@/utils/types'
const Avatar = ({avatarId,setAvatarId}:AvatarProps) => {
  return (

    
    <div onClick={()=>{setAvatarId((Math.random()*20).toFixed())}} className='avatar cursor-pointer mx-auto mb-5 tooltip' data-tip="Click to regenerate the avatar"> 
<div className='w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset'>
    <Image src={`https://robohash.org/${avatarId}.png`} width={256} height={256} alt="avatar"/>
</div>

    </div>
  )
}

export default Avatar