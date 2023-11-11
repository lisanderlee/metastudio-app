import React from "react";
import { Chip } from "@nextui-org/react";

export default function ChipStatus({ status }) {
  return (
    <div className="flex gap-4">
      {/* default - primary - secondary - success - warning - danger */}
      <Chip size="sm" color={status}>
      {status}
      </Chip>
    </div>
  );
}
