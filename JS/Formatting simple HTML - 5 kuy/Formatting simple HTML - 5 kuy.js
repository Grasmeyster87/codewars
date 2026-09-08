function tokenize(source) {
  const tokens = [];
  const tagRe = /<[^>]*>/g;
  let lastIndex = 0;
  let match;

  while ((match = tagRe.exec(source)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: 'text', raw: source.slice(lastIndex, match.index) });
    }
    tokens.push(parseTag(match[0]));
    lastIndex = tagRe.lastIndex;
  }
  if (lastIndex < source.length) {
    tokens.push({ type: 'text', raw: source.slice(lastIndex) });
  }
  return tokens;
}

function parseTag(raw) {
  const inner = raw.slice(1, -1); // strip outer '<' and '>'
  let type;
  let nameSource;

  if (inner.startsWith('/')) {
    type = 'close';
    nameSource = inner.slice(1);
  } else if (inner.endsWith('/')) {
    type = 'selfclose';
    nameSource = inner.slice(0, -1);
  } else {
    type = 'open';
    nameSource = inner;
  }

  const name = nameSource.trim().split(/\s+/)[0] || '';
  return { type, raw, name };
}

function collapseText(raw) {
  return raw.replace(/\s+/g, ' ').trim();
}

function indent(source) {
  const tokens = tokenize(source);
  let result = '';
  let level = 0;
  let prevWasText = false; // was the previously *emitted* token text?

  const pad = (n) => '  '.repeat(n);

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (token.type === 'text') {
      const text = collapseText(token.raw);
      if (text === '') continue; // pure formatting whitespace, drop entirely

      const next = tokens[i + 1];
      const nextIsBr = next && next.type === 'selfclose' && next.name === 'br';

      result += pad(level) + text;
      result += nextIsBr ? '' : '\n';
      prevWasText = true;
      continue;
    }

    if (token.type === 'selfclose' && token.name === 'br' && prevWasText) {
      // <br /> glues to the preceding text, no newline before it
      result += token.raw + '\n';
      prevWasText = false;
      continue;
    }

    if (token.type === 'close') level -= 1;
    result += pad(level) + token.raw + '\n';
    if (token.type === 'open') level += 1;
    prevWasText = false;
  }

  return result;
}

module.exports = indent;