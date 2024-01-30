import path from "path";
import { createGzip } from "zlib";
import fs from "fs";

const compress = async () => {
  const dir = path.resolve("./src/zip/files");
  const gzip = createGzip();
  const src = fs.createReadStream(dir.concat("/fileToCompress.txt"));
  const result = fs.createWriteStream(dir.concat("/archive.gz"));

  src.pipe(gzip).pipe(result);
};

await compress();
