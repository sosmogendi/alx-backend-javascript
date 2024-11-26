// Display the initial message
console.log("Welcome to Holberton School, what is your name?");

// Listen for user input
process.stdin.on("data", (data) => {
  const name = data.toString().trim(); // Convert input to string and remove whitespace
  console.log(`Your name is: ${name}`);
  process.stdin.end(); // Close stdin gracefully
});

// Handle program exit and display the final message
process.stdin.on("end", () => {
  console.log("This important software is now closing");
});

