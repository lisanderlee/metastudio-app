import React from "react";
import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center mx-auto my-auto">
      <Spinner size="lg" />
    </div>
  );
}
