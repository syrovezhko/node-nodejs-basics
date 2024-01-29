import path from "path";
import fs from "fs";

const read = async () => {
  const target = path.resolve("./src/fs/files/fileToRead.txt");
  fs.readFile(target, (err, data) => {
    if (data) console.log(data.toString("utf8"));
    else throw new Error("FS operation failed");
  });
};

await read();
