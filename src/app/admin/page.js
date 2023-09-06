'use client'


import AdminManageCars from '../components/AdminManageCars'

import { redirect } from 'next/navigation'
import { useSession, signIn, signOut } from "next-auth/react"
import FileSubmit from '../components/FileSubmit'
import AdminAddCar from '../components/AdminAddCar'
export default function Component() {
    

  const { data: session } = useSession({
    required: true,
  })
  if (session) {
    return (
      <>
        <div className="h-20 border-b-2 border-black w-full justify-center flex items-center">
        Signed in as {session.user.email} <br />
        <button className='  ml-20 py-2 px-4 border-2 border-black' onClick={() => signOut()}>Sign out</button>
        </div>
        <div className="text-4xl my-4 text-center w-full font-bold">Список машин</div>
        <AdminManageCars />
        <div className="text-4xl my-4 py-2 border-black text-center border-t-2 w-full font-bold">Загрузить фото</div>
        <FileSubmit />
        <AdminAddCar />
        
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button className='p-4 border-2 border-black' onClick={() => signIn()}>Sign in</button>
    </>
  )
}

