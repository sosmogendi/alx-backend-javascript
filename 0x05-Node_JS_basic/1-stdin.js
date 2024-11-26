/**
 * Prompts the user to enter their name, reads the input from STDIN,
 * and displays a message containing the user's name.
 *
 * When the user ends the program, a closing message is displayed.
 */

process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on("data", (name) => {
  const trimmedName = name.toString().trim();
  process.stdout.write(`Your name is: ${trimmedName}\n`);
  process.stdin.end();
});

process.stdin.on("end", () => {
  process.stdout.write("This important software is now closing\n");
});
