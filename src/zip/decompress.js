import path from "path";
import { createGunzip } from "zlib";
import fs from "fs";

const decompress = async () => {
  const dir = path.resolve("./src/zip/files");
  const gunzip = createGunzip();
  const src = fs.createReadStream(dir.concat("/archive.gz"));
  const result = fs.createWriteStream(dir.concat(`/fileToCompress.txt`));
  src.pipe(gunzip).pipe(result);
};

await decompress();
