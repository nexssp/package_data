// Nexss PROGRAMMER 2.0.2 - NodeJS
// Data/Delete Package
// STDIN
process.stdin.on("data", function(NexssStdin) {
  let NexssStdout;
  try {
    NexssStdout = JSON.parse(NexssStdin.toString());
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
  // Modify data
  if (NexssStdout.prettyFields && NexssStdout.prettyFields.split) {
    let result;
    NexssStdout.prettyFields.split(",").forEach(element => {
      // result[element] = NexssStdout[element];
      if (NexssStdout.hasOwnProperty(element)) {
        console.log(`\x1b[1m${element}\x1b[0m:`, NexssStdout[element]);
      } else {
        if (NexssStdout.debug) {
          console.error(
            `Field '${element}' does not exist in the data. Please check your command or _nexss.yml config file. --prettyFields`
          );
          process.exit(1);
        }
      }
    });
  } else {
    Object.keys(NexssStdout).forEach(element => {
      console.log(`\x1b[1m${element}\x1b[0m:`, NexssStdout[element]);
    });
  }

  // STDOUT
  // process.stdout.write(JSON.stringify(result));
});

process.stdin.on("end", function() {
  //On Windows below is not needed.
  process.exit(0);
});
