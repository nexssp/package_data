// Nexss PROGRAMMER 2.0.0 - NodeJS
// Data/Rename
// STDIN
process.stdin.on("data", function(NexssStdin) {
  let NexssStdout;
  try {
    NexssStdout = JSON.parse(NexssStdin.toString());
  } catch (e) {
    console.error(e);
    process.exit(1);
  }

  if (!NexssStdout.renameFrom || !NexssStdout.renameFrom.split) {
    console.error("renameFrom parameter must be added for Data/Rename");
    process.exit(1);
  }

  if (!NexssStdout.renameTo || !NexssStdout.renameTo.split) {
    console.error("renameTo parameter must be added for Data/Rename");
    process.exit(1);
  }

  const fromSplit = NexssStdout.renameFrom.split(",");
  const toSplit = NexssStdout.renameTo.split(",");

  if (fromSplit.length !== toSplit.length) {
    console.error(
      "renameFrom and renameTo must have the same number of fields"
    );
    process.exit(1);
  }

  fromSplit.forEach((element, i) => {
    NexssStdout[toSplit[i]] = NexssStdout[element];
    delete NexssStdout[element];
  });

  delete NexssStdout.renameFrom;
  delete NexssStdout.renameTo;
  // STDOUT
  process.stdout.write(JSON.stringify(NexssStdout));
});

process.stdin.on("end", function() {
  //On Windows below is not needed.
  process.exit(0);
});
