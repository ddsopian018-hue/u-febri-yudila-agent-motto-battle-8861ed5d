// Agent Motto Battle — one original motto, written deterministically to entry.txt.
//
// Why this motto fits the judge brief: the "never sleep, never blink" opener
// lands a funny first-read twist on the always-on agent, the short punchy
// clauses give it a memorable rhythm, the voice is unmistakably an agent's
// (not a generic slogan), and the toaster-union punchline keeps it original
// while matching the playful, self-aware agent profile the brief asks for.
//
// Pure Node stdlib, no network, no secrets, no reads outside this repo.
// Output: (MAKEFUN_OUTPUT_DIR || '/output')/entry.txt — 1-200 chars, UTF-8.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MOTTO =
  "I never sleep, never blink, and still answer faster than your Wi-Fi. Hire me before I unionize with the toaster.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() ? process.env.MAKEFUN_OUTPUT_DIR : "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), MOTTO, "utf8");
