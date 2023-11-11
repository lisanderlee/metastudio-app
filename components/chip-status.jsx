import React from "react";
import {Chip} from "@nextui-org/react";

export default function ChipStatus() {
  return (
    <div className="flex gap-4">
      {/* <Chip color="default">Default</Chip>
      <Chip color="primary">Primary</Chip>
      <Chip color="secondary">Secondary</Chip> */}
      <Chip size="sm" color="success">Success</Chip>
      {/* <Chip color="warning">Warning</Chip>
      <Chip color="danger">Danger</Chip> */}
    </div> 
  );
}
