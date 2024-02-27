process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const inputChunk = process.stdin.read();
  if (inputChunk !== null) {
    const input = inputChunk.trim();
    if (input) {
      process.stdout.write(`Your name is: ${input}\n`);
    } else {
      process.stdout.write('Your name is: \n');
    }
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
