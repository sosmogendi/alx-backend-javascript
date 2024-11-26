process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on("data", (data) => {
  const name = data.toString().trim(); // Remove any trailing newline or spaces
  process.stdout.write(`Your name is: ${name}\n`);
  process.stdin.end(); // End the input stream gracefully
});

process.stdin.on("end", () => {
  process.stdout.write("This important software is now closing\n");
});

