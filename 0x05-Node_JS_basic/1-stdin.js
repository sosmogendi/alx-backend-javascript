process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const userInput = process.stdin.read();

  if (userInput) {
    process.stdout.write(`Your name is: ${userInput.toString().trim()}\n`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

