function domainName(url){
  return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0];
}

module.exports = domainName;