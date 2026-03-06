class UriBuilder {
  constructor(url) {
    // розбираємо базову частину та параметри
    let [base, queryString] = url.split('?');
    this.base = base;
    this.params = {};

    if (queryString) {
      for (let pair of queryString.split('&')) {
        if (!pair) continue;
        let [key, value] = pair.split('=');
        this.params[decodeURIComponent(key)] = decodeURIComponent(value || '');
      }
    }
  }

  build() {
    let keys = Object.keys(this.params);
    if (keys.length === 0) return this.base;

    let query = keys
      .map(k => {
        let val = this.params[k];
        if (Array.isArray(val)) {
          return val.map(v => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&');
        }
        return `${encodeURIComponent(k)}=${encodeURIComponent(val)}`;
      })
      .join('&');

    return `${this.base}?${query}`;
  }
}

module.exports = UriBuilder;