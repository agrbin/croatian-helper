var helper = require("./croatian-helper.js"),
    byline = require('byline'),
    fs = require('fs');

var infile = process.argv[2];

if (!infile || infile == '-') {
  infile = "/dev/stdin";
}

var stream = byline(fs.createReadStream(infile, { encoding: 'utf8' })),
    words = [];

stream.on('data', function (line) {
  if (helper.isWord(line)) {
    words.push(helper.toLower(line));
  }
});

stream.on('end', function () {
  words.sort();
  console.log(words.join("\n"));
});

