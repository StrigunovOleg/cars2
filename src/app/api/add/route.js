'use server'


import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import getData from '../dbGet';


const fs = require('fs');
const path = require('path');

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: 'You are not logged in.', status: 401 });
  }

  const data = await req.json();
  data.details = data.details.split(";")

  data.images = data.images.split(";")



  let oldData = await getData();
  
  fs.writeFileSync('./src/app/api/data.json', JSON.stringify([...oldData, data]));
  return NextResponse.json({ status: 200 });
}
