'use client'

import { useState } from 'react'

export default function UploadForm() {
  const [file, setFile] = useState()

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!file) return

    try {
      const data = new FormData()
      data.set('file', file)

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: data
      })
      // handle the error
      if (!res.ok) throw new Error(await res.text())
    } catch (e) {
      // Handle errors here
      console.error(e)
    }
  }

  return (
    <form className='py-4 border-t-2 border-b-2 border-black' onSubmit={onSubmit}>
      <input
        type="file"
        name="file"
        onChange={(e) => setFile(e.target.files?.[0])}
      />
      <input className='border-2 border-black p-2 hover:cursor-pointer' type="submit" value="Upload" />
    </form>
  )
}