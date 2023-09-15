import { Shloka } from "./src/$types";
import { shlokas } from "./src/shlokas";

export function getShloka(n: number): Shloka | null {
  return n > 0 && n < 18 ? shlokas[n] : null;
}
