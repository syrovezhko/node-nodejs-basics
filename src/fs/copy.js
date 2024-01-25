import path from "path";
import fs from "fs";

const copy = async () => {
  const root = path.resolve("./src/fs");
  const src = root.concat("/files")
  const dest = root.concat("/files_copy")
  try {
    await fs.stat(dest, (exist) => {
      if(!exist) throw new Error("FS operation failed")
    })
    await fs.cp(src, dest, {recursive: true, overwrite: false}, (err) => {
      if(err){
        throw new Error("FS operation failed")
      }
    });
  } catch (e) {
    throw new Error("FS operation failed")
  }
};

await copy();
