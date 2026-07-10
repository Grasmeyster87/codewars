const reg = /^(?=.*\bname:[A-Za-z]+\b)(?=.*\bage:\d+\b)(?=.*\bskill:[A-Za-z]+\b)(?:name:[A-Za-z]+|age:\d+|skill:[A-Za-z]+)(?:,(?:name:[A-Za-z]+|age:\d+|skill:[A-Za-z]+)){2}$/;

module.exports = reg;