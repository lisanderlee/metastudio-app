"use client";
import CardFile from "@/components/card-file";
import DataModel from "@/data.json";
import TableFiles from "@/components/table-files";

import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { List, LayoutGrid } from "lucide-react";
import { useState } from "react";

export default function MyFiles({ params }) {
  const [viewList, setViewList] = useState(false);

  function handleClickGrid() {
    setViewList(false);
  }
  function handleClickList() {
    setViewList(true);
  }
  return (
    <div className="w-full h-full overflow-y-auto">
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
        <TableFiles {...DataModel} />
      ) : (
        /*------------------------>File Grid View------------------------*/
        <ul role="list" className="flex flex-row flex-wrap gap-x-4 gap-y-4">
          {DataModel.map((projects) =>
            projects.Models.map((model) => (
              <li key={model.id}>
                <CardFile key={model.id} {...model} />
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
