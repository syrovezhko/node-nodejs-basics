import path from "path";
import { writeFile } from "fs/promises";

const create = async () => {
  const target = path.resolve("./src/fs/files/fresh.txt");
  new Promise((resolve, reject) => {
    writeFile(target, "I am fresh and young", {
      flag: "wx",
    })
    .catch(() => {
      throw new Error("FS operation failed")
    });
  });
};

await create();