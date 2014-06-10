/*
 * implementation of these functions are not as fast as they could be.
 */
module.exports = new (function () {
  var map = {
    "toLower" :  {"a" : "a","b" : "b","c" : "c","\u010d" : "\u010d","\u0107" :
      "\u0107","d" : "d","\u0111" : "\u0111","e" : "e","f" : "f","g" : "g","h"
  : "h","i" : "i","j" : "j","k" : "k","l" : "l","m" : "m","n" : "n","o" :
  "o","p" : "p","r" : "r","s" : "s","\u0161" : "\u0161","t" : "t","u" : "u","v"
  : "v","z" : "z","\u017e" : "\u017e","A" : "a","B" : "b","C" : "c","\u010c" :
  "\u010d","\u0106" : "\u0107","D" : "d","\u0110" : "\u0111","E" : "e","F" :
  "f","G" : "g","H" : "h","I" : "i","J" : "j","K" : "k","L" : "l","M" : "m","N"
  : "n","O" : "o","P" : "p","R" : "r","S" : "s","\u0160" : "\u0161","T" :
  "t","U" : "u","V" : "v","Z" : "z","\u017d" : "\u017e"},
    "toAscii" :  {"a" : "a","b" : "b","c" : "c","\u010d" : "c","\u0107" :
      "c","d" : "d","\u0111" : "d","e" : "e","f" : "f","g" : "g","h" : "h","i"
  : "i","j" : "j","k" : "k","l" : "l","m" : "m","n" : "n","o" : "o","p" :
  "p","r" : "r","s" : "s","\u0161" : "s","t" : "t","u" : "u","v" : "v","z" :
  "z","\u017e" : "z","A" : "A","B" : "B","C" : "C","\u010c" : "C","\u0106" :
  "C","D" : "D","\u0110" : "D","E" : "E","F" : "F","G" : "G","H" : "H","I" :
  "I","J" : "J","K" : "K","L" : "L","M" : "M","N" : "N","O" : "O","P" : "P","R"
  : "R","S" : "S","\u0160" : "S","T" : "T","U" : "U","V" : "V","Z" :
  "Z","\u017d" : "Z"}
  };

  function transform(str, how) {
    return str.split("").map(function (x) {
      return map[how][x];
    }).join("");
  }

  this.isLetter = function (letter) {
    return map.toLower.hasOwnProperty(letter);
  };

  this.isWord = function (str) {
    return transform(str, "toLower").length === str.length;
  };

  this.toLower = function (str) {
    return transform(str, "toLower");
  };

  this.toAscii = function (str) {
    return transform(str, "toAscii");
  };
})();

