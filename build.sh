#!/bin/bash

# This url was coppied from http://cvs.linux.hr/spell/ which is authored by
# Denis Lacković
url=http://cvs.linux.hr/spell/wordlist/croatian-wordlist.txt.gz

( cd lib && npm install )

curl $url \
  | zcat \
  | iconv --from-code=ISO_8859-2 --to-code=UTF-8 \
  | node lib/normalize.js \
  | gzip \
  > txt/wordlist.txt.gz

echo $(zcat txt/wordlist.txt.gz | wc --lines) "words written."
