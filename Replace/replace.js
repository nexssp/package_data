const {
  nxsError,
  nxsInfo,
} = require(`${process.env.NEXSS_PACKAGES_PATH}/Nexss/Lib/NexssLog.js`);

const NexssIn = require(`${process.env.NEXSS_PACKAGES_PATH}/Nexss/Lib/NexssIn.js`);
let NexssStdout = NexssIn();

if (!NexssStdout.replaceFrom) {
  nxsError("You need to pass '--replaceFrom' as string or regexp.");
  process.exit(0);
}

if (!NexssStdout.replaceTo) {
  NexssStdout.replaceTo = "";
}

switch (NexssStdout.replaceFrom) {
  case "nexssFileExt":
    NexssStdout.replaceFrom = ".[^.]*$";
    break;
  default:
    break;
}

const result = NexssStdout.nxsIn.map((element) => {
  // const reg = new RegExp("/.[^.]*$/");
  if (Array.isArray(NexssStdout.replaceFrom)) {
    if (Array.isArray(NexssStdout.replaceTo)) {
      const rt_len = NexssStdout.replaceTo.length;
      if (rt_len !== NexssStdout.replaceFrom.length) {
        nxsError(
          "'--replaceTo' if is mulitple/array then '--replaceFrom' must have the same length."
        );
        process.exit(0);
      }
      let i = 0;
      NexssStdout.replaceFrom.forEach((e) => {
        element.replace(new RegExp(e, "gi"), NexssStdout.replaceTo[i]);
        i++;
      });
    }
  } else {
    if (Array.isArray(NexssStdout.replaceTo)) {
      nxsError(
        "'--replaceTo' cannot be more then once if '--replaceFrom' is only once."
      );
      process.exit(0);
    }
  }
  const r = new RegExp(NexssStdout.replaceFrom, "gi");
  return element.replace(r, NexssStdout.replaceTo);
});

delete NexssStdout.nxsIn;
delete NexssStdout.resultField_1;
process.stdout.write(JSON.stringify(NexssStdout));
