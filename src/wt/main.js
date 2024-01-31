import path from "path";
import { Worker } from "worker_threads";
import { availableParallelism } from "os";

const performCalculations = async () => {
  const dir = path.resolve("./src/wt");
  const target = dir.concat("/worker.js");
  const cors = availableParallelism();
  const workers = [];

  const newWorker = (data) => {
    return new Promise((res, rej) => {
      const worker = new Worker(target, { workerData: data });
      worker.on("message", (data) => res({ status: "resolved", data }));
      worker.on("error", () => res({ status: "error", data: null }));
    });
  };

  for (let i = 0; i < cors; i++) workers.push(newWorker(i + 10));

  const results = await Promise.all(workers);

  console.log(results);
};

await performCalculations();
