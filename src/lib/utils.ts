import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines Tailwind classes conditionally and resolves merge conflicts.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format currency to Euro (EUR) for Portugal.
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

/**
 * Format date to PT-PT string (DD/MM/YYYY).
 */
export function formatDate(dateStringOrDate: string | Date): string {
  const d = new Date(dateStringOrDate);
  return d.toLocaleDateString("pt-PT");
}

/**
 * Format time to HH:MM.
 */
export function formatTime(dateStringOrDate: string | Date): string {
  const d = new Date(dateStringOrDate);
  return d.toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit" });
}
