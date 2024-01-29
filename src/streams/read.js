import path from "path";
import fs from "fs";

const read = async () => {
  const target = path.resolve("./src/streams/files/fileToRead.txt");
  const stream = fs.createReadStream(target);

  stream.on("data", (data) => {
    process.stdout.write(data.toString("utf8").concat("\n"));
  });
};

await read();
