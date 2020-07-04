const {
  nxsError,
} = require(`${process.env.NEXSS_PACKAGES_PATH}/Nexss/Lib/NexssLog.js`);

const NexssIn = require(`${process.env.NEXSS_PACKAGES_PATH}/Nexss/Lib/NexssIn.js`);
let NexssStdout = NexssIn();

if (!NexssStdout._replaceFrom) {
  nxsError("You need to pass '--_replaceFrom' as string or regexp.");
  process.exit(0);
}

if (!NexssStdout._replaceTo) {
  NexssStdout._replaceTo = "";
}

switch (NexssStdout._replaceFrom) {
  case "nexssFileExt":
    NexssStdout._replaceFrom = ".[^.]*$";
    break;
  default:
    break;
}

const result = NexssStdout.nxsIn.map((element) => {
  // const reg = new RegExp("/.[^.]*$/");
  if (Array.isArray(NexssStdout._replaceFrom)) {
    if (Array.isArray(NexssStdout._replaceTo)) {
      const rt_len = NexssStdout._replaceTo.length;
      if (rt_len !== NexssStdout._replaceFrom.length) {
        nxsError(
          "'--_replaceTo' if is mulitple/array then '--_replaceFrom' must have the same length."
        );
        process.exit(0);
      }

      for (var i = 0, len = NexssStdout._replaceFrom.length; i < len; i++) {
        const e = NexssStdout._replaceFrom[i];
        element = element.replace(
          new RegExp(e, "gi"),
          NexssStdout._replaceTo[i]
        );
      }

      return element;
    }
  } else {
    if (Array.isArray(NexssStdout._replaceTo)) {
      nxsError(
        "'--_replaceTo' cannot be more then once if '--_replaceFrom' is only once."
      );
      process.exit(0);
    }
  }
  const r = new RegExp(NexssStdout._replaceFrom, "gi");
  return element.replace(r, NexssStdout._replaceTo);
});

NexssStdout.nxsOut = result;
delete NexssStdout.nxsIn;
delete NexssStdout.resultField_1;
process.stdout.write(JSON.stringify(NexssStdout));
