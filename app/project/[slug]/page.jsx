"use client"
import { usePathname } from "next/navigation";
export default function Home() {
    const pathname = usePathname();
  return (
    <div className="">
      <h1 className=" text-white text-2xl">{pathname}</h1>
      
    </div>
  );
}
