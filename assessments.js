const fs = require('fs');

const token = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let i = 0;

const nextInt = () => parseInt(token[i++], 10);

const n = nextInt();

let out = [];
for (let j = 0; j < n; j++) {
  const inputA = nextInt();
  const inputB = nextInt();
  out.push(String(inputA + inputB));
}

console.log(out.join('\n'));
