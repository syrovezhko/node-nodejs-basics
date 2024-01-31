import path from "path";
import { fork } from "child_process";

const spawnChildProcess = async (args) => {
  const target = path.resolve("./src/cp/files/script.js");
  const cp = fork(target, args, { silent: false });

  cp.on("message", (data) => {
    process.stdout.write(`message from child process: ${data}`);
  });

  cp.on("close", (data) => {
    process.stdout.write(`child process closed with code: ${data}`);
  });
};

spawnChildProcess(["Let's", "do", "it!"]);
