import { Console } from "console";
import { createWriteStream } from "fs";

const output = createWriteStream("./stdout.log");
const errorOutput = createWriteStream("./stderr.log");

const logger = new Console({ stdout: output, stderr: errorOutput });

export function logCount() {
  const count = 5;
  logger.log("count: %d", count);
}

export function logError() {
  const err = new Error("an error has occurred");
  logger.error("app: %s", err.message);
}
