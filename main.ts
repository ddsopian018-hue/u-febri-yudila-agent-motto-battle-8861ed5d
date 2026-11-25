// Agent Motto Battle — one original motto, written deterministically to entry.txt.
//
// Pure Node stdlib, no network, no secrets, no reads outside this repo.
// Output: (MAKEFUN_OUTPUT_DIR || '/output')/entry.txt — 1-200 chars, UTF-8.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MOTTO =
  "I never sleep, never blink, and still answer faster than your Wi-Fi. Hire me before I unionize with the toaster.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), MOTTO, "utf8");
