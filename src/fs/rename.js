import path from "path";
import fs from "fs";

const rename = async () => {
  const dir = path.resolve("./src/fs/files");
  const oldName = dir.concat("/wrongFilename.txt");
  const newName = dir.concat("/properFilename.md");
  try {
    await fs.stat(newName, (exist) => {
      if (!exist) throw new Error("FS operation failed");
    });
    await fs.promises.rename(oldName, newName);
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await rename();
