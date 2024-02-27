process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on('data', function(data) {
    const input = data.toString().trim();
    if (input) {
        process.stdout.write(`Your name is: ${input}\n`);
    }
    else {
        process.stdout.write("Your name is: \n");
    }
});

process.on('exit', function() {
    process.stdout.write("This important software is now closing\n");
});
