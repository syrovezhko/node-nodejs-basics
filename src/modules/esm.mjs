import path from "path";
import { fileURLToPath } from 'url';
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import "./files/c.js";
import a from "./files/a.json" with { type: "json" }
import b from "./files/b.json" with { type: "json" }

const PORT = 3000;
const random = Math.random();

export let unknownObject;
export const myServer = createServerHttp((_, res) => {
    res.end("Request accepted");
});
myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

if (random > 0.5) unknownObject = a;
else unknownObject = b;
console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
console.log(`Path to current file is ${fileURLToPath(import.meta.url)}`);
console.log(`Path to current directory is ${path.dirname(fileURLToPath(import.meta.url))}`);
console.log(unknownObject);

