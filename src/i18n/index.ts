export type { Messages } from "./types";
export { en } from "./en";
export { es } from "./es";

export type Locale = "en" | "es";

export const locales: Locale[] = ["en", "es"];

export function interpolate(template: string, vars: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => vars[key] ?? "");
}
