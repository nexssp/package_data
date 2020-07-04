module.exports = {
  tests: [
    {
      title: "Test Data/Replace",
      tests: [
        {
          title: "Test of without parameters / Error --_replaceFrom",
          params: [
            "nexss Data/Replace --nxsIn=x1 --nxsIn=x2",
            "You need to pass '--_replaceFrom' as string or regexp.",
          ],
        },
        {
          title: "Test wrong numbers of params / Error --_replaceFrom",
          params: [
            "nexss Data/Replace --nxsIn=x1 --nxsIn=x2 --_replaceFrom=x1 --_replaceTo=x2 --_replaceTo=x55",
            "'--_replaceTo' cannot be more then once if '--_replaceFrom' is only once.",
          ],
        },
        {
          title: "Test with only --_replaceFrom",
          params: [
            "nexss Data/Replace --nxsIn=x1 --nxsIn=x2 --_replaceFrom=x1",
            /"nxsOut":\["","x2"\]/,
          ],
        },
        {
          title: "Test with only --_replaceTo",
          params: [
            "nexss Data/Replace --nxsIn=x1 --nxsIn=x2 --_replaceFrom=x1 --_replaceTo=xyz",
            /"nxsOut":\["xyz","x2"\]/,
          ],
        },
        {
          title: "Test with only mulitple --_replaceTo",
          params: [
            "nexss Data/Replace --nxsIn=x1 --nxsIn=x2 --_replaceFrom=x1 --_replaceTo=xyz --_replaceFrom=x2 --_replaceTo=cvb",
            /"nxsOut":\["xyz","cvb"\]/,
          ],
        },
        {
          title: "nxsAs test",
          // shows nexss version like: 2.0.9
          params: ["nexss Id --nxsAs=myfield", /"myfield":".*"/],
        },
      ],
    },
  ],
};
