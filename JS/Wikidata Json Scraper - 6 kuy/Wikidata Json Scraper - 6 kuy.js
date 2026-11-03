const axios = require('axios')
// Please use these headers along with your request.
const headers = { 'Accept-Encoding': 'gzip,deflate', 'User-Agent': "Codewars-Kata/643869cb0e7a563b722d50ad (https://www.codewars.com/kata/wikidata-json-scraper, language: JavaScript)" }

const wikidataScraper = async (url) => {
  const { data } = await axios.get(url, { headers });

  // Беремо першу сутність, бо ключ в entities може відрізнятися від запитаного Q-id (редиректи)
  const entity = Object.values(data.entities)[0];

  return {
    id: entity.id,
    label: entity.labels?.en?.value ?? 'No Label',
    description: entity.descriptions?.en?.value ?? 'No Description'
  };
}
module.exports = wikidataScraper;