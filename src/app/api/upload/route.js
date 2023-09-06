import { writeFile } from 'fs/promises'
import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/[...nextauth]/route';

export async function POST(request) {

    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ message: 'You are not logged in.', status: 401 })
    }



  const data = await request.formData()
  const file = data.get('file');

  if (!file) {
    return NextResponse.json({ success: false })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  // With the file data in the buffer, you can do whatever you want with it.
  // For this, we'll just write it to the filesystem in a new location
  const path = `C:/Users/Kirill/Desktop/projectCopy/upgrade-auto/public/${file.name}`
  await writeFile(path, buffer)
  console.log(`open ${path} to see the uploaded file`)

  return NextResponse.json({ success: true })
}