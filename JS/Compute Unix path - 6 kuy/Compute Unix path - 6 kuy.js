function combinePathsUri(...fragments) {
  let parts = fragments
    .map(el =>
      el
        .replace(/\\/g, "/")     // заменяем все \ на /
        .trim()                  // убираем пробелы по краям
        .replace(/\s+/g, "")     // убираем все пробелы внутри
    )
    .filter(el => el.length > 0); // удаляем пустые части

  let path = "/" + parts.join("/");

  path = path.replace(/\/+/g, "/"); // убираем подряд идущие слэши

  if (path.length > 1) {
    path = path.replace(/\/$/, ""); // убираем слэш в конце
  }

  return path;
}

let res = combinePathsUri('google', 'search', 'test'); // '/google/search/test',
console.log(res);

let res1 = combinePathsUri(
                ' .. ',
                '/complex/path/with/slashes/inside/',
                ' . ',
                '\\complex\\path\\with\\back\\slashes\\inside\\',
            ); //   '/../complex/path/with/slashes/inside/./complex/path/with/back/slashes/inside'

console.log(res1);

module.exports = combinePathsUri;