import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();
  
  const chatId = 751782339;
  const botToken = '6043607490:AAGRIhCqegVAhBr016X_yryvQ1U_MJQ_VPs';

  let toSend = ""

  for (let key in data) {
    toSend += key + ": " + data[key] + "\n"
  }

  
  
  
  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(toSend)}`, {
        method: "POST",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
          },
        body: JSON.stringify(data)
        
    })
  
    if (response.ok) {
      console.log('Message sent successfully');
    } else {
      console.error('Failed to send message');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }

  return NextResponse.json({
    status: 200,
    
  });
}
