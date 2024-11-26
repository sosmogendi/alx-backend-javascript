// Import the process module
process.stdout.write("Welcome to Holberton School, what is your name?\n");

// Listen for user input
process.stdin.on("data", (data) => {
  const name = data.toString().trim(); // Convert the input to a string. Trim whitespace
  process.stdout.write(`Your name is: ${name}\n`);
  process.exit(); // Exit after displaying the message
});

// Listen for the program's end and display message
process.on("exit", () => {
  console.log("This important software is now closing");
});
