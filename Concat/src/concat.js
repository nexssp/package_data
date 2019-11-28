// Nexss PROGRAMMER 2.0 - NodeJS
// Data/Concat Package for data concatenation
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
  if (!NexssStdout.concatFields) {
    throw "concatFields parameter must be added for Data/Concat";
  }

  let concatSeparator = "";
  if (NexssStdout.concatSeparator) {
    concatSeparator = NexssStdout.concatSeparator;
  }

  if (NexssStdout.concatFields && NexssStdout.concatFields.split) {
    NexssStdout.concatResult = NexssStdout.concatFields
      .split(",")
      .map(element => {
        if (!NexssStdout[element]) {
          throw `There is no ${element} field in the data.`;
        }
        return NexssStdout[element];
      });
    if (!NexssStdout.concatArray) {
      NexssStdout.concatResult = NexssStdout.concatResult.join(concatSeparator);
    }
    if (NexssStdout.concatResultField) {
      NexssStdout[NexssStdout.concatResultField] = NexssStdout.concatResult;
      delete NexssStdout.concatResult;
    }
    delete NexssStdout.concatArray;
    delete NexssStdout.concatFields;
    delete NexssStdout.concatResultField;
  }

  // STDOUT
  process.stdout.write(JSON.stringify(NexssStdout));
});

process.stdin.on("end", function() {
  //On Windows below is not needed.
  process.exit(0);
});
