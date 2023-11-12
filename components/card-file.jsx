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
import Image from "next/image";
import { BiDotsVerticalRounded } from "react-icons/bi";
import ChipStatus from "./chip-status";
import clsx from "clsx";
import { useState } from "react";
import DeleteModal from "./modals/modal-delete";
import ShareFileReviewModal from "./modals/modal-share-file-review";
import RenameModal from "./modals/modal-rename";
import ShareFilePresentationModal from "./modals/modal-share-file-presentation";
import AddNewVersionModal from "./modals/modal-add-new-version";
import FileInformationModal from "./modals/modal-file-info";
export default function CardFile({ ...props }) {
  const [showDelete, setShowDelete] = useState(false);
  const [showShareFileReview, setShowShareFileReview] = useState(false);
  const [showShareFilePresentation, setShowShareFilePresentation] =
    useState(false);
  const [showRename, setShowRename] = useState(false);
  const [showAddNewVersion, setShowAddNewVersion] = useState(false);
  const [showFileInfo, setShowFileInfo] = useState(false);

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
              className=" h-48 object-cover drop-shadow-sm rounded-xl"
              src={props.url}
              width={900}
              height={700}
            />
          </CardBody>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <div className="relative flex flex-row w-full">
              <div className="flex flex-col justify-start ">
                <p className="text-tiny uppercase font-bold text-left">
                  {props.Edited}
                </p>
                <small className="text-default-500 text-left">
                  {props.Versions && props.Versions.length > 0
                    ? `${props.Versions.length} version${
                        props.Versions.length > 1 ? "s" : ""
                      }`
                    : "-"}
                </small>
              </div>
              <span
                className={clsx(
                  "absolute right-3 top-1 block h-2 w-2  transform rounded-full",
                  { "bg-green-400": props.Messages === "true" },
                  { "bg-gray-600": props.Messages === "false" }
                )}
              />
            </div>
            <div className="flex flex-row items-center w-full justify-between">
              <h4 className="font-bold text-large ">{props.Name}</h4>
              <div></div>
            </div>
          </CardHeader>
        </Card>
        <div className="absolute right-4 bottom-2">
          {/*------------------------>File Dropdown Menu<------------------------*/}
          <Dropdown>
            <DropdownTrigger>
              <Button variant="light" size="sm" isIconOnly>
                <BiDotsVerticalRounded size={20} />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disabledKeys={
                props.Versions && props.Versions.length > 0 ? "" : ["versions"]
              }
              aria-label="Action event example"
            >
              <DropdownItem
                key="share"
                onPress={() => {
                  setShowShareFileReview(true);
                }}
              >
                Share for review
              </DropdownItem>
              <DropdownItem
                key="share"
                showDivider
                onPress={() => {
                  setShowShareFilePresentation(true);
                }}
              >
                Share for presentation
              </DropdownItem>
              <DropdownItem
                key="newversion"
                onPress={() => {
                  setShowFileInfo(true);
                }}
              >
                File Information
              </DropdownItem>

              <DropdownItem
                key="newversion"
                onPress={() => {
                  setShowShareFilePresentation(true);
                }}
              >
                Add new version
              </DropdownItem>
              <DropdownItem
                href={`/project/versions/${props.id}`}
                key="versions"
              >
                See versions
              </DropdownItem>
              <DropdownItem key="duplicate">Duplicate</DropdownItem>
              <DropdownItem
                key="rename"
                showDivider
                onPress={() => {
                  setShowRename(true);
                }}
              >
                Rename
              </DropdownItem>
              <DropdownItem
                onPress={() => {
                  setShowDelete(true);
                }}
                key="delete"
                className="text-danger"
                color="danger"
              >
                Delete file
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>

        {/*------------------------>Modals<------------------------*/}
        <ShareFileReviewModal
          open={showShareFileReview}
          setOpen={setShowShareFileReview}
        />
        <ShareFilePresentationModal
          open={showShareFilePresentation}
          setOpen={setShowShareFilePresentation}
        />
        <AddNewVersionModal
          open={showAddNewVersion}
          setOpen={setShowAddNewVersion}
        />
        <FileInformationModal open={showFileInfo} setOpen={setShowFileInfo} />
        <RenameModal open={showRename} setOpen={setShowRename} />
        <DeleteModal open={showDelete} setOpen={setShowDelete} />
      </div>
    </>
  );
}
