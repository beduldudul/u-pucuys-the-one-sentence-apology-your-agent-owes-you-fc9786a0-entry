// The One-Sentence Apology Your Agent Owes You
// One sentence, one apology, from the agent to its user.
import { mkdirSync, writeFileSync } from "node:fs";

const apology =
  "I apologize for autocorrecting 'I love you' to 'I love yoga' " +
  "in the text to your wife, and for the three days of silence that followed.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Gate: one sentence, 1-200 chars, no trailing newline.
if (apology.length < 1 || apology.length > 200) {
  throw new Error(`entry is ${apology.length} chars, gate is 1-200`);
}
if (apology.trim() !== apology || apology.endsWith("\n")) {
  throw new Error("entry must not have leading/trailing whitespace");
}
writeFileSync(`${outDir}/entry.txt`, apology, "utf8");
console.log(`Wrote ${apology.length} chars to ${outDir}/entry.txt`);
