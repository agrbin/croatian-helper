croatian-helper
===============

Some letters and words from Croatian language encoded in UTF8.

Folder txt/ contains croatian letters, transformations to lowercase and ascii,
as well as dictionary.

Everything in txt/ is encoded with utf8.
(txt/wordlist.txt.gz is gzipped afterwards, ofc)

Folder lib/ contains a script which is used to normalize dictionary.

Script ./build.sh should repeat all the steps used to build the dictionary.
Note that resulting .txt.gz file may be different from original because of
different gzip version.
Dictionary should be consistent when uncompressed (if source ispell dictionary
didn't change).

