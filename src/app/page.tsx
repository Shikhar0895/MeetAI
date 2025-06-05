"use client"
import CustomButton from "@/components/custom/Button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { db } from "@/db";
import { user } from "@/db/schema";

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
 const { data: session  } = authClient.useSession()
   
 const handleSubmit = async(e: FormEvent) => {
    e.preventDefault()
   
   
    const {data, error} = await authClient.signUp.email({
      email,
      name,
      password
    }, {
        onRequest: (ctx) => {
            //show loading
        },
        onSuccess: (ctx) => {
            //redirect to the dashboard or sign in page
            alert("form submitted successfully")
        },
        onError: (ctx) => {
            // display the error message
            alert(ctx.error.message);
        },} )
  }
  if(session){return ( <div className="p-24 flex flex-col items-center gap-y-6">
    You are alreay logged {session.user.name}!!
    <Button onClick={() => authClient.signOut()}>Sign Out</Button>
  </div>)}
  return (
    <div className="p-24 flex flex-col items-center justify-center min-h-screen ">
      <form action="" className="w-[50%] flex flex-col gap-2 p-8  items-start bg-gray-700/40 rounded-2xl " onSubmit={handleSubmit} >
     <Input placeholder="name"  value={name} onChange={(e) => setName(e.target.value)} className="self-center w-[40%]"/>
     <Input placeholder="email"  value={email} onChange={(e) => setEmail(e.target.value)} className="self-center w-[40%]"/>
     <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="self-center w-[40%]"/>
     <Button type="submit" className="self-center">Submit</Button>
      </form>
      
      </div>
  );
}
