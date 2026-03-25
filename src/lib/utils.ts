import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Merges conditional Tailwind class names into one conflict-free string.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
