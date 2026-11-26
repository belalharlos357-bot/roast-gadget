// roast-gadget — round 3 entry (rewritten for the next blind round).
// Prints the one-line roast stored in entry.txt.
// The laptop is the defendant now, not the victim.
import * as fs from "node:fs";

const entryPath = new URL("./entry.txt", import.meta.url);
const raw = fs.readFileSync(entryPath, "utf8");
const entry = raw.trim();
process.stdout.write(entry + "\n");
