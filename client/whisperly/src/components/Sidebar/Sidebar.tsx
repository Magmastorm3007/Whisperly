'use client'
import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { shallow } from 'zustand/shallow'
import { fetchUser } from '@/lib/fetchers'
import { useUser } from '@/store/userstore'
import SearchBar from './SearchBar'
import ChatList from './ChatList'
const Sidebar = () => {
    const [cookie,setCookie]=useCookies<string>(["user"]);
    const {myUser,setUser}=useUser((state)=>({myUser:state.myUser,setUser:state.setUser}),shallow)
 useEffect(()=>{
fetchUser(cookie,setUser);

 },[cookie.user])

  return (
<div className='w-full md:!block sidebar z-10 border-r-2 border-slate-400 md:w-1/2 lg:w-1/3 p-3 bg-white h-screen'>
{/* SEARCH BAR*/}
<SearchBar user={myUser}/>
{myUser&&<ChatList mySelf={myUser} />}
</div>
  )
}

export default Sidebar