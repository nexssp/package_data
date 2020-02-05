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
  // Modify datarenameFrom and renameTo must have the same number of fields
  if (!NexssStdout.selectFields) {
    console.error("selectFields parameter must be added for Data/Select");
    process.exit(1);
  }

  let result = {};
  if (NexssStdout.selectFields) {
    if (NexssStdout.selectFields.split) {
      let cnt = 0;
      NexssStdout.selectFields.split(",").forEach(element => {
        if (Array.isArray(NexssStdout[element])) {
          NexssStdout[element].forEach(subElement => {
            cnt++;
            result[`select_${cnt}`] = subElement;
          });
        } else {
          cnt++;
          result[`select_${cnt}`] = NexssStdout[element];
        }

        delete NexssStdout[element];
      });
    }
    delete NexssStdout.selectFields;
  }
  if (NexssStdout.selectOnly) {
    process.stdout.write(JSON.stringify(result));
    delete NexssStdout.selectOnly;
  } else {
    process.stdout.write(JSON.stringify(Object.assign(NexssStdout, result)));
  }
});

process.stdin.on("end", function() {
  //On Windows below is not needed.
  process.exit(0);
});
