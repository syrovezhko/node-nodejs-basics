const parseArgs = () => {
  process.argv.forEach((key, index) => {
    if (key.startsWith("--")) {
      console.log(`${key} is ${process.argv[index + 1]};`);
    }
  });
};

parseArgs();
