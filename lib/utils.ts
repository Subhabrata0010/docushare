// lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getUserColor(userId: string) {
  let sum = 0;
  for (let i = 0; i < userId.length; i++) {
    sum += userId.charCodeAt(i);
  }
  const brightColors = [
    '#2E8B57', '#FF6EB4', '#00CDCD', '#FF00FF', '#FF007F',
    '#FFD700', '#00CED1', '#FF1493', '#00CED1', '#FF7F50',
    '#9ACD32', '#FFA500', '#32CD32', '#ADFF2F', '#DB7093',
    '#00FF7F', '#FFD700', '#FF007F', '#FF6347',
  ];
  const colorIndex = sum % brightColors.length;
  return brightColors[colorIndex];
}