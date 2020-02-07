# Data/Concat

Concatenate data in the sequence (You can also not use this module and make it manually)

## Examples

```sh
nexss Data/Concat --concatFields="cwd,debug" # this will return string
nexss Data/Concat --concatFields="cwd,debug" --concatArray # this will return array in field concatResult
nexss Data/Concat --concatFields="cwd,debug" --concatArray --concatResultField=myFieldName # custom result fieldname 'myFieldName'
nexss System/Env/Get NEXSS_APPS_PATH | nexss Data/Concat --folder="myprogram" --concatFields="NEXSS_APPS_PATH,folder" --concatResultField=destination --concatSeparator=PATH
```

## Predefined Separators

- EOL - Next line - on windows \n\r on Linux, MacOS /
- PATH or PTH - Path separator on windows \ on Linux, MacOS /
- SPACE or SPC - Just Space
