const fs = require("fs");

const input = (day) =>
    fs.readFileSync("inputs/" + day, "utf8");

module.exports = {
    input
}