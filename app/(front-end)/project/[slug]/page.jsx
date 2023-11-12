"use client";
import CardFile from "@/components/card-file";
import DataModel from "@/data.json";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { List, LayoutGrid, UserPlus2 } from "lucide-react";
import AvatarGroupComponent from "@/components/avatar-group";
import AddMemberModal from "@/components/modals/modal-add-member";
import ModalAddFile from "@/components/modals/modal-add-file";
import TableFiles from "@/components/table-files";
import { useState } from "react";

function findById(arr, id) {
  return arr.find((item) => item.id === id);
}

export default function Project({ params }) {
  const [viewList, setViewList] = useState(false);
  const project = findById(DataModel, params.slug);
  function handleClickGrid() {
    setViewList(false);
  }
  function handleClickList() {
    setViewList(true);
  }
  return (
    <div className="w-full h-full overflow-y-auto">
      {/*------------------------>Avatars - Share- Add File Subheader------------------------*/}
      <div className="flex  flex-row h-full justify-end gap-x-3 mb-4 ">
        <AvatarGroupComponent />
        <AddMemberModal />
        <ModalAddFile />
      </div>
      {/*------------------------>Layour Options------------------------*/}
      <div className="flex flex-row h-full  justify-end gap-x-2 mb-5 ">
        <Button
          isIconOnly
          size="sm"
          variant="light"
          color="default"
          aria-label="Like"
          onClick={handleClickList}
        >
          <List aria-hidden="true" strokeWidth={1} size={16} />
        </Button>

        <Button
          size="sm"
          isIconOnly
          variant="light"
          color="default"
          aria-label="Like"
          onClick={handleClickGrid}
        >
          <LayoutGrid aria-hidden="true" strokeWidth={1} size={16} />
        </Button>
        <div>
          <Dropdown>
            <DropdownTrigger>
              <Button size="sm" variant="light" color="default">
                Sort
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Action event example"
              onAction={(key) => alert(key)}
            >
              <DropdownItem key="new">Most Recent</DropdownItem>
              <DropdownItem key="copy">By Project</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      {/*------------------------>Toggle View------------------------*/}
      {viewList ? (
        /*------------------------>File List View------------------------*/
        <TableFiles  {...project.Models}/>
      ) : (
        /*------------------------>File Grid View------------------------*/
        <ul role="list" className="flex flex-row flex-wrap gap-x-4 gap-y-4">
          {project.Models.map((data) => (
            <li key={data.id}>
              <CardFile projectId={project.id} {...data} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
