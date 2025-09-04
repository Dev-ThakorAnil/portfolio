import React from "react";
import { cn } from "../lib/utility";

const Card = React.forwardRef(function Card({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-slate-800 bg-slate-900/60 shadow-lg backdrop-blur-md",
        className
      )}
      {...props}
    />
  );
});

const CardContent = React.forwardRef(function CardContent(
  { className, ...props },
  ref
) {
  return <div ref={ref} className={cn("p-4", className)} {...props} />;
});

export { Card, CardContent };
