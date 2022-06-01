import currencies from '../constants/currencies'

const products = [
  {
    _id: '1b',
    name: 'Lorem Ipsum',
    priceInfo: {amount: 324, currency: 'EUR'},
    rating: 1.25,
    vendor: {
      _id: '3a',
      name: 'Dignissim Malesuada',
      address: 'Cl. Duis ultricies, 65',
      city: 'Pellentesque',
      taxId: '80244825X',
    },
  },
  {
    _id: '2b',
    name: 'Dolor sit eu',
    priceInfo: {amount: 2351, currency: 'EUR'},
    rating: 3.45,
    vendor: {
      _id: '1a',
      name: 'Consequat',
      address: 'Cl. Donec fermentum accumsan, 12',
      city: 'Scelerisque',
      taxId: 'W1644608J',
    },
  },
  {
    _id: '3b',
    name: 'Lorem proin',
    priceInfo: {amount: 31, currency: 'EUR'},
    rating: 4.99,
    vendor: {
      _id: '1a',
      name: 'Consequat',
      address: 'Cl. Donec fermentum accumsan, 12',
      city: 'Scelerisque',
      taxId: 'W1644608J',
    },
  },
  {
    _id: '4b',
    name: 'Mauris ultrices',
    priceInfo: {amount: 14521, currency: 'EUR'},
    rating: 2,
    vendor: {
      _id: '2a',
      name: 'Hendrerit',
      address: 'Plza. Proin ex nulla porttitor, 232',
      city: 'Ligula',
      taxId: 'Z9489520R',
    },
  },
  {
    _id: '5b',
    name: 'Lorem metus',
    priceInfo: {amount: 1231, currency: 'EUR'},
    rating: 1.78,
    vendor: {
      _id: '1a',
      name: 'Consequat',
      address: 'Cl. Donec fermentum accumsan, 12',
      city: 'Scelerisque',
      taxId: 'W1644608J',
    },
  },
  {
    _id: '6b',
    name: 'Praesent vitae diam',
    priceInfo: {amount: 999, currency: 'EUR'},
    rating: 4.23,
    vendor: {
      _id: '1a',
      name: 'Consequat',
      address: 'Cl. Donec fermentum accumsan, 12',
      city: 'Scelerisque',
      taxId: 'W1644608J',
    },
  },
  {
    _id: '7b',
    name: 'Sed rutrum',
    priceInfo: {amount: 195299, currency: 'EUR'},
    rating: 5,
    vendor: {
      _id: '3a',
      name: 'Dignissim Malesuada',
      address: 'Cl. Duis ultricies, 65',
      city: 'Pellentesque',
      taxId: '80244825X',
    },
  },
  {
    _id: '8b',
    name: 'Etiam porta',
    priceInfo: {amount: 300, currency: 'EUR'},
    rating: 4.23,
    vendor: {
      _id: '1a',
      name: 'Consequat',
      address: 'Cl. Donec fermentum accumsan, 12',
      city: 'Scelerisque',
      taxId: 'W1644608J',
    },
  },
  {
    _id: '9b',
    name: 'Donec id lorem egestas',
    priceInfo: {amount: 6241, currency: 'EUR'},
    rating: 1,
    vendor: {
      _id: '3a',
      name: 'Dignissim Malesuada',
      address: 'Cl. Duis ultricies, 65',
      city: 'Pellentesque',
      taxId: '80244825X',
    },
  },
  {
    _id: '10b',
    name: 'Nullam gravida ante',
    priceInfo: {amount: 1250, currency: 'EUR'},
    rating: 3.5,
    vendor: {
      _id: '1a',
      name: 'Consequat',
      address: 'Cl. Donec fermentum accumsan, 12',
      city: 'Scelerisque',
      taxId: 'W1644608J',
    },
  },
  {
    _id: '11b',
    name: 'Integer aliquam',
    priceInfo: {amount: 3173, currency: 'EUR'},
    rating: 2.41,
    vendor: {
      _id: '3a',
      name: 'Dignissim Malesuada',
      address: 'Cl. Duis ultricies, 65',
      city: 'Pellentesque',
      taxId: '80244825X',
    },
  },
]

// https://martinfowler.com/eaaCatalog/money.html
function calculatePrice({currency, amount}) {
  const {base, precision, symbol} = currencies[currency]

  return `${amount / base ** precision} ${symbol}`
}

export default function getProducts() {
  return products.map(product => {
    const {name, priceInfo, rating, vendor} = product
    const price = calculatePrice(priceInfo)

    return {name, price, rating, vendor}
  })
}
