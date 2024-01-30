import { Transform } from "stream";

const transform = async () => {
  let stringNum = 1;
  process.stdout.write("Input text and press ENTER.\n\n");
  const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
      const reversedChunk = chunk.toString().split("").reverse().join("");
      callback(
        null,
        `\n\nThis is the ${stringNum++}-th line${"_".repeat(
          reversedChunk.length < 20 ? 0 : reversedChunk.length - 22,
        )}`.concat(
          reversedChunk.concat(
            `\n${"‾".repeat(
              reversedChunk.length < 21 ? 21 : reversedChunk.length - 1,
            )}\n\n`,
          ),
        ),
      );
    },
  });

  process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
