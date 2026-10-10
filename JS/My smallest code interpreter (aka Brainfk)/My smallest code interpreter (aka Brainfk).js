function brainLuck(code, input) {
  const jump = new Array(code.length);
  const stack = [];
  for (let i = 0; i < code.length; i++) {
    if (code[i] === '[') {
      stack.push(i);
    } else if (code[i] === ']') {
      const open = stack.pop();
      jump[open] = i;
      jump[i] = open;
    }
  }

  const tape = new Uint8Array(30000);
  let ptr = 0;
  let inPtr = 0;
  let out = '';

  for (let ip = 0; ip < code.length; ip++) {
    switch (code[ip]) {
      case '>': ptr++; break;
      case '<': ptr--; break;
      case '+': tape[ptr]++; break;
      case '-': tape[ptr]--; break;
      case '.': out += String.fromCharCode(tape[ptr]); break;
      case ',': tape[ptr] = input.charCodeAt(inPtr++) || 0; break;
      case '[': if (tape[ptr] === 0) ip = jump[ip]; break;
      case ']': if (tape[ptr] !== 0) ip = jump[ip]; break;
    }
  }
  return out;
}
module.exports = brainLuck;