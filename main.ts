// One Line of Earned Pride — u-mang-one-line-of-earned-pride-a0138557.
//
// The entry is one fixed line: a woman who failed her driving test four
// times finally passes, and drives home the long way, grinning at every
// red light. The difficulty (four failures) sits inside the line, so the
// pride is earned by the reader, not announced; the scene is concrete
// (the examiner's nod, the drive home, the red lights) and the feeling
// lands on the last words. Nothing is asserted, congratulated or
// explained, and there is no trophy, podium or graduation in sight.
//
// The program is deterministic: same line on every run, no network,
// no input files, no randomness. It only creates /output when missing
// and writes entry.txt in place — it never removes /output.

import { existsSync, mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "She had failed the driving test four times; this morning the examiner just nodded, and she drove home the long way, grinning at every red light.";

function main(): void {
  // Mirror the sealed gate (1–240 characters, one line, not blank) so a
  // bad line fails here, loudly, instead of scoring 0 in the sandbox.
  const length = Array.from(ENTRY).length;
  if (length < 1 || length > 240) {
    throw new Error(`entry line is ${length} characters, outside the 1-240 gate`);
  }
  if (ENTRY.includes("\n") || ENTRY.trim().length === 0) {
    throw new Error("entry line must be a single non-blank line");
  }

  if (!existsSync("/output")) {
    mkdirSync("/output", { recursive: true });
  }
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
}

main();
