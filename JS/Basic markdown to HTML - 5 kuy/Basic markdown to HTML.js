function format(string) {
    let tag = 'p';
    let content = string;

    const headerMatch = string.match(/^(#+)\s(.*)$/);
    const listMatch = string.match(/^\*\s(.*)$/);

    if (headerMatch) {
        const level = Math.min(headerMatch[1].length, 6);
        tag = 'h' + level;
        content = headerMatch[2];
    } else if (listMatch) {
        tag = 'li';
        content = listMatch[1];
    }

    content = content.replace(/\*\*(.+?)\*\*/g, '< strong>$1< /strong>');

    return `< ${tag}>${content}< /${tag}>`;
}

module.exports = format;