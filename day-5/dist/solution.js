let fs = require('fs');
let _input = fs.readFileSync('./input', 'utf8');
let input = _input.split("\n").map(c => c.length ? Number(c) : undefined);
let steps = 0;
let i = 0;
while (i < input.length) {
    input[i]++;
    i += input[i] - 1;
    steps++;
}
console.log(steps);
