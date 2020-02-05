# Data/Select

Select Data

## Examples

```sh
nexss Data/Select --select=cwd # THis will select data (put in to the select field)
nexss Data/Select --select=paths # it will produce selec1, select2.... fields... so you can use later easy field select1

```

```sh
nexss Data/Select --selectFields="cwd,debug,start"
```

Output:

```json
{
  "start": 1580934190.334,
  "cwd": "C:\\Users\\mapoart",
  "debug": true,
  "_": [],
  "selectFields": "cwd,debug,start",
  "select_1": "C:\\Users\\mapoart",
  "select_2": true,
  "select_3": 1580934190.334
}
```

```sh
nexss Data/Select --selectFields="cwd,debug,start" --selectOnly
```

Output:

```json
{
  "select_1": "C:\\Users\\mapoart",
  "select_2": true,
  "select_3": 1580934215.237
}
```
