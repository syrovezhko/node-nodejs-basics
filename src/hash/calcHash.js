import path from "path";
import crypto from "crypto";
import fs from "fs";

const calculateHash = async () => {
  const target = path.resolve("./src/hash/files/fileToCalculateHashFor.txt");
  const hash = crypto.createHash("sha256");
  const stream = fs.createReadStream(target);

  stream.on("data", (data) => {
    hash.update(data);
  });

  stream.on("end", () => {
    const result = hash.digest("hex");
    console.log(result);
  });
};

await calculateHash();
