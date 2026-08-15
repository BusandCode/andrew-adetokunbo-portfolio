import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-primary/20 bg-primary/5 px-2.5 py-1 text-[11px] font-semibold text-primary",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
