# Data/Concat

Concatenate data in the sequence (You can also not use this module and make it manually)

## Examples

```sh
nexss Data/Concat --concatFields=cwd,debug # this will return string
nexss Data/Concat --concatFields=cwd,debug --concatArray # this will return array in field concatResult
nexss Data/Concat --concatFields=cwd,debug --concatArray --concatResultField=myFieldName # custom result fieldname 'myFieldName'
```
