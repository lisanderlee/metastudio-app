"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import profilePic from "@/public/images/hero-card-complete.jpg";
import Image from "next/image";
import { BiDotsVerticalRounded } from "react-icons/bi";
import ChipStatus from "./chip-status";

export default function CardFile({ ...props }) {
  return (
    <>
      <div className="relative isolate">
        <Card isPressable isHoverable className="py-1 pb-2 w-64">
          <CardBody className="overflow-visible py-2">
            <div className="absolute  z-30 top-5 left-5">
              <ChipStatus status="primary" />
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
              <div className="flex flex-col justify-start ">
                <p className="text-tiny uppercase font-bold text-left">
                  {props.edited}
                </p>
                <small className="text-default-500 text-left">
                  {props.versions + " " + "version"}
                </small>
              </div>
              <span className="absolute right-3 top-1 block h-2 w-2  transform rounded-full bg-green-400  " />
            </div>
            <div className="flex flex-row items-center w-full justify-between">
              <h4 className="font-bold text-large ">{props.name}</h4>
              <div></div>
            </div>
          </CardHeader>
        </Card>
        <div className="absolute right-4 top-52">
          {/*------------------------>Components in file<------------------------*/}
          <CardFileDropdown />
        </div>
      </div>
    </>
  );
}

function CardFileDropdown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="light" size="sm" isIconOnly>
          <BiDotsVerticalRounded size={20} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Action event example"
        onAction={(key) => alert(key)}
      >
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
