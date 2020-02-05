module.exports = {
  tests: [
    {
      title: "Test Data/Select",
      tests: [
        {
          title: "Shows selected Id as select_1 field",
          params: [
            "nexss Id | nexss Data/Select --selectFields=cuid",
            `"select_1":"(.*)"`
          ]
        },
        {
          title: "Shows Only select_1 field",
          params: [
            "nexss Id | nexss Data/Select --selectFields=cuid --selectOnly",
            `"select_1":"(.*)"`
          ]
        },
        {
          type: "shouldNotContain",
          title: "Not shows eg. 'cwd' Field",
          params: [null, `"cwd":"(.*)"`]
        },
        {
          title: "Select few from array",

          params: [
            `echo {"array":["x","y","z"]} | nexss Data/Select --selectFields=array`,
            `"select_1":"x","select_2":"y","select_3":"z"`
          ]
        }
      ]
    }
  ]
};
