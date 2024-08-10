"use client"
import { fetchUsers} from '@/lib/fetchers'
import { useAllUser } from '@/store/userstore'
import { userProps } from '@/utils/types'
import { shallow } from 'zustand/shallow'
import React, { useEffect } from 'react'

const ChatList = ({mySelf}:{mySelf:userProps}) => {
    const { users, setUsers } = useAllUser((state: any) => ({
        users: state.users,
        setUsers: state.setUsers,
      }), shallow);
      
    useEffect(()=>{
        fetchUsers(mySelf,setUsers);

    },[])
  return (
    <div>
        <ul className='my-5 flex flex-col '>

        </ul>

        </div>
  )
}

export default ChatList