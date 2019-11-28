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
  if (!NexssStdout.showFields) {
    throw "showFields parameter must be added for Data/Show";
  }

  let result = {};
  if (NexssStdout.showFields && NexssStdout.showFields.split) {
    NexssStdout.showFields.split(",").forEach(element => {
      result[element] = NexssStdout[element];
    });
  }
  // STDOUT
  process.stdout.write(JSON.stringify(result));
});

process.stdin.on("end", function() {
  //On Windows below is not needed.
  process.exit(0);
});
