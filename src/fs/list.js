import path from "path";
import fs from "fs";

const list = async () => {
  const target = path.resolve("./src/fs/files");
  await fs.readdir(target, (err, files) => {
    if (files) console.log(files);
    else throw new Error("FS operation failed");
  });
};

await list();
