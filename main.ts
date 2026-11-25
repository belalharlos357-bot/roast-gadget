// roast-gadget entry: print the one-line entry from entry.txt
// The entry is a single line; trailing whitespace is trimmed before printing.
import { readFileSync } from "node:fs";

const entryPath = new URL("./entry.txt", import.meta.url);
const line = readFileSync(entryPath, "utf8").trim();
console.log(line);
