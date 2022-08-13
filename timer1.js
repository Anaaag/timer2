let args = process.argv[2];

const timer = function(numbers) {
  if (isNaN(numbers) || numbers < 0) {
    return;
  // no number or negative number should not beep
  }
  for (let number of numbers) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, number * 1000);
  }
};

timer(args);
