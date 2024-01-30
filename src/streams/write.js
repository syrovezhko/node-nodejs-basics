import path from "path";
import fs from "fs";

const write = async () => {
  const target = path.resolve("./src/streams/files/fileToWrite.txt");

  const stream = fs.createWriteStream(target);
  process.stdout.write(
    "Input text => press ENTER =>  to exit Ctrl+C combination\n\n",
  );

  process.stdin.on("data", (data) => {
    stream.write(data);
  });
};

await write();
