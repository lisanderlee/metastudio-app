"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import profilePic from "@/public/images/hero-card-complete.jpg";
import Image from "next/image";
import { BiDotsVerticalRounded } from "react-icons/bi";
import ChipStatus from "./chip-status";

export default function CardFile() {
  return (
    <Card isPressable isHoverable className="py-1 pb-2 w-64">
      <CardBody className="overflow-visible py-2">
        <div className="absolute  z-30 top-5 left-5">
          <ChipStatus status="primary"/>
        </div>
        <Image
          alt="Card background"
          className="object-cover drop-shadow-sm rounded-xl"
          src={profilePic}
          width={270}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <div className="relative flex flex-row w-full">
          <div className="flex flex-col">
            <p className="text-tiny uppercase font-bold">Daily Mix</p>
            <small className="text-default-500">12 Tracks</small>
          </div>
          <span className="absolute right-3 top-1 block h-2 w-2  transform rounded-full bg-green-400  " />
        </div>
        <div className="flex flex-row items-center w-full justify-between">
          <h4 className="font-bold text-large ">Frontend Radio</h4>
          <div>
            <Popover placement="right-start">
              <PopoverTrigger>
                <Button variant="light" size="sm" isIconOnly>
                  <BiDotsVerticalRounded size={20} />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="text-small font-bold">Popover Content</div>
                  <div className="text-tiny">This is the popover content</div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
