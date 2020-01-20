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
  if (!NexssStdout.deleteFields) {
    console.error("deleteFields parameter must be added for Data/Delete");
    process.exit(1);
  }
  if (NexssStdout.deleteFields && NexssStdout.deleteFields.split) {
    NexssStdout.deleteFields.split(",").forEach(element => {
      delete NexssStdout[element];
    });
  }

  delete NexssStdout.deleteFields;

  // STDOUT
  process.stdout.write(JSON.stringify(NexssStdout));
});

process.stdin.on("end", function() {
  //On Windows below is not needed.
  process.exit(0);
});
