# Data / Replace for Nexss Programmer

Replaces strings by regular expressions.

more about regular expressions:

- <https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/RegExp>

it takes one or multiple parameters

## Examples

```sh
# Replace file extensions
Nexss Data/Replace fileToReplace1.pdf fileToReplace2.pdf fileToReplaceX.pdf --replaceFrom=".pdf" --replaceTo=".txt"
# Also file extension using predefined for example: nexssFileExt as ".[^.]*$"
Nexss Data/Replace fileToReplace1.pdf fileToReplace2.pdf fileToReplaceX.pdf --replaceFrom=nexssFileExt --replaceTo=".txt"

# Also example as normal regular expression
Nexss Data/Replace fileToReplace1.pdf fileToReplace2.pdf fileToReplaceX.pdf --replaceFrom=".[^.]*$" --replaceTo=".txt"

```

## Predefined Regexp (replaceFrom)

| Name         | Regexp      | Regular Exp    |
| ------------ | ----------- | -------------- |
| nexssFileExt | `".[^.]*$"` | File Extension |

## TODO

To implement more predefined regular expressions.
