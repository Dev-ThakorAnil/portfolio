import React from "react";
import { cn } from "../lib/utility";

function Label({ className, ...props }) {
  return (
    <label
      className={cn("text-sm font-medium text-gray-300", className)}
      {...props}
    />
  );
}

export { Label };
