"use client"
import {TextInput } from "@repo/ui/input"
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  return (
<div style={{
  height:"100vw",
}}>
  <TextInput placeholder="join room" size="big"></TextInput>
  <button style={{
    padding:"10px",

  }} onClick={()=>{
    router.push("/roomid/xyz");
  }}>Join room</button>
</div>
  );
}
