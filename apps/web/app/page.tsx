import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import {TextInput } from "@repo/ui/input"


export default function Home() {
  return (
<div style={{
  height:"100vw",
}}>
  <TextInput placeholder="join room" size="big"></TextInput>
</div>
  );
}
