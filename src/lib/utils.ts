import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function delay(ms: number = 3000) {
  await new Promise((resolve) => setTimeout(resolve, ms))
}
