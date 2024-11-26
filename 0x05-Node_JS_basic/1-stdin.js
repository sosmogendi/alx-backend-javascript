// Display the initial message
console.log("Welcome to Holberton School, what is your name?");

// Listen for user input
process.stdin.on("data", (data) => {
  const name = data.toString().trim(); // Convert input to string and remove any trailing whitespace
  console.log(`Your name is: ${name}`);
  process.exit(0); // Gracefully exit after processing the input
});

// Handle program exit and display the final message
process.on("exit", () => {
  console.log("This important software is now closing");
});
