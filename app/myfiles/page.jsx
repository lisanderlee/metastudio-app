import Image from "next/image";
import CardFile from "@/components/card-file";
import { Button } from "@nextui-org/react";
export default function Home() {
  return (
    <div className=" pt-14 h-full w-full">
   
        <div className="flex overflow-y-auto  flex-wrap gap-x-5 gap-y-5">
        <CardFile />
          <CardFile />
          <CardFile />
          <CardFile />
          <CardFile /><CardFile />
          <CardFile />
          <CardFile />
          <CardFile />
          <CardFile />
          <CardFile />
          <CardFile />
          <CardFile />
          <CardFile />
          <CardFile /><CardFile />
          <CardFile />
          <CardFile />
          <CardFile />
          <CardFile />
        </div>
      
    </div>
  );
}
