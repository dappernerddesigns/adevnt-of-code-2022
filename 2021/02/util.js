const fs = require("fs");
const fsPromise = require("fs").promises;
const path = require("path");

fsPromise
    .readFile(path.resolve((__dirname += "/input.txt")))
    .then((result) => {
        const string = "" + result;
        return string;
    })
    .catch(function (error) {
        console.log(error);
    });

console.log(string);
module.exports = finalDirectionList;
