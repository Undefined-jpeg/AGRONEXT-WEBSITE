import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="h-5 w-5"
        >
          <path
            d="M12 3C12 3 6 9 6 13.5C6 17.0899 8.91015 20 12 20C15.0899 20 18 17.0899 18 13.5C18 9 12 3 12 3Z"
            fill="currentColor"
          />
          <path
            d="M12 20V13M12 13L9 16M12 13L15 16"
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <span className="font-semibold tracking-tight text-lg">AgroNext</span>
    </div>
  )
}
