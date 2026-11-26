// roast-gadget — next-round entry (round 3).
// The one-line roast lives in entry.txt; this script prints it.
// Hard reversal: the laptop itself is the defendant with a case number.
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const entryPath = join(here, "entry.txt");
readFile(entryPath, "utf8").then((raw) => {
  console.log(raw.trim());
});
