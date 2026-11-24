// One-Sentence Absurd Invention Pitch
// Writes a single-sentence pitch to /output/entry.txt.
// Deterministic: no network, no clock, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "A pen that, when it runs out of ink halfway through your signature, forges the rest of it in handwriting slightly worse than your own.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
