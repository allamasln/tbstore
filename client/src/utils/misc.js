// https://martinfowler.com/eaaCatalog/money.html
const EUR = {
  code: 'EUR',
  base: 10,
  precision: 2,
  symbol: ' €',
}
const currencies = {EUR}

function formatPrice({amount, currency}) {
  if (typeof amount !== 'number') return

  const {base, precision, symbol} = currencies[currency]

  return `${amount / base ** precision}${symbol}`
}

export {formatPrice}
