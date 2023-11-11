"use client";
import CardFile from "@/components/card-file";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Avatar,
  AvatarGroup,
} from "@nextui-org/react";
import { List, LayoutGrid } from "lucide-react";
export default function FilesViewer({ ...props }) {
  return (
    <div className="">
      {/* <h1 className=" text-white text-2xl">{props.Name}</h1> */}
      <div className="flex flex-row h-full  justify-end gap-x-3 mb-5 ">
        <AvatarGroup size="sm" >
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
        </AvatarGroup>
        <Button size="sm" color="primary">Invite User</Button>
        <Button size="sm" color="primary">Add File</Button>
      </div>
      <div className="flex flex-row h-full  justify-end gap-x-2 mb-5 ">
        <Button
          isIconOnly
          size="sm"
          variant="light"
          color="default"
          aria-label="Like"
        >
          <List aria-hidden="true" strokeWidth={1} size={16} />
        </Button>

        <Button
          size="sm"
          isIconOnly
          variant="light"
          color="default"
          aria-label="Like"
        >
          <LayoutGrid aria-hidden="true" strokeWidth={1} size={16} />
        </Button>
        <div>
          <Dropdown>
            <DropdownTrigger>
              <Button size="sm" variant="light" color="default">
                Order
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
        </div>
      </div>
      <ul role="list" className="flex flex-row flex-wrap gap-x-4 gap-y-4">
        {props.Models.map((data) => (
          <li key={data.id}>
            <CardFile {...data} />
          </li>
        ))}
      </ul>
    </div>
  );
}
