
/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/
str = 'Hello World!';

function RemoveExclamationMarks(s) {
    return s.replace(/!/g, '');
}
console.log(RemoveExclamationMarks(str));