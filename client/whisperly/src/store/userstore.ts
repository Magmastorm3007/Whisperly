import {create} from "zustand"
import { userState } from "@/utils/types"
export const useUser=create<userState>((set)=>({
myUser:undefined,
setUser:(user)=>set({myUser:user}),

}))
export const useAllUser=create((set)=>({
    users:undefined,
    setUsers:(users:any)=>set({users:users}),
    
    }))