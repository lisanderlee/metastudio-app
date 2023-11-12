import Image from "next/image";
import CardFile from "@/components/card-file";
import { Button } from "@nextui-org/react";
export default function Home() {
  return (
    <div className="h-full w-full  ">
      <div className=" p-4 bg-neutral-800 w-full rounded-xl">
        <div className="flex flex-row items-center justify-between mb-5">
          <p className="ml-2 text-sm font-semibold text-white items-center">
            Recent Files
          </p>
          <Button size="sm">See all</Button>
        </div>
        <div className="flex flex-row gap-x-4">
    
        </div>
      </div>
    </div>
  );
}
