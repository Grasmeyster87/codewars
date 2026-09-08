global.escHTML = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

global.escWS = (s) =>
  String(s)
    .replace(/\t/g, '\\t')
    .replace(/\n/g, '\\n<br>')
    .replace(/ /g, '&middot;');