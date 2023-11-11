import Image from "next/image";
import CardFile from "@/components/card-file";
import { Button } from "@nextui-org/react";
import profilePic from "@/public/images/hero-card-complete.jpg";
const files = [
  {
    id: 1,
    name: "Heroicons",
    versions: "4",
    href: "#",
    src: "../public/images/hero-card-complete.jpg",
    edited: "2 days ago",
    current: false,
  },
  {
    id: 2,
    name: "Tailwind Labs",
    models: "8",
    href: "#",
    src: "../public/images/hero-card-complete.jpg",
    edited: "1 month ago",
    current: false,
  },
  {
    id: 3,
    name: "Workcation",
    models: "10",
    href: "#",
    src: "../public/images/hero-card-complete.jpg",
    edited: "12 days ago",
    current: false,
  },
  {
    id: 3,
    name: "Workcation",
    models: "10",
    href: "#",
    src: "../public/images/hero-card-complete.jpg",
    edited: "12 days ago",
    current: false,
  },
  {
    id: 3,
    name: "Workcation",
    models: "10",
    href: "#",
    src: "../public/images/hero-card-complete.jpg",
    edited: "12 days ago",
    current: false,
  },
];

export default function Home() {
  return (
    <div className="h-full w-full">
      <div className=" p-4 bg-neutral-800 w-full rounded-xl">
        <div className="flex flex-row items-center justify-between mb-5">
          <p className="ml-2 text-sm font-semibold text-white items-center">
            Recent Files
          </p>
          <Button size="sm">See all</Button>
        </div>

          <ul role="list" className="flex flex-row flex-wrap gap-x-4 gap-y-4">
            {files.map((file) => (
              <li key={file.id}>
              <CardFile {...file} />
              </li>
            ))}
          </ul>
    
      </div>
    </div>
  );
}
