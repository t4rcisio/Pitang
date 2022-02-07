const url = require('url');

const address = 'https://www.gotamagica.com.br/promocao?product=sabonete+ervadoce'
const parseUrl = new url.URL(address)

console.log(parseUrl.href)
console.log(parseUrl.host)
console.log(parseUrl.pathname)
console.log(parseUrl.search)
console.log(parseUrl.searchParams)
console.log(parseUrl.searchParams.get('product'))