import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines Tailwind classes conditionally and resolves merge conflicts.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format currency to Brazilian Real (BRL).
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

/**
 * Format date to PT-BR string (DD/MM/YYYY).
 */
export function formatDate(dateStringOrDate: string | Date): string {
  const d = new Date(dateStringOrDate);
  return d.toLocaleDateString("pt-BR");
}

/**
 * Format time to HH:MM.
 */
export function formatTime(dateStringOrDate: string | Date): string {
  const d = new Date(dateStringOrDate);
  return d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
}
