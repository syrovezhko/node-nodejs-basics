import path from "path";
import { unlink } from "node:fs/promises";

const remove = async () => {
  const target = path.resolve("./src/fs/files/fileToRemove.txt");
  try {
    await unlink(target);
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await remove();
