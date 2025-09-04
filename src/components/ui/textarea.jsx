import React from "react";
import { cn } from "../lib/utility";

const Textarea = React.forwardRef(function Textarea({ className, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      className={cn(
        "w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-32",
        className
      )}
      {...props}
    />
  );
});

export { Textarea };
