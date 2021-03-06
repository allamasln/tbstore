const data = [
  {
    name: 'Consequat',
    address: 'Cl. Donec fermentum accumsan, 12',
    city: 'Scelerisque',
    taxId: 'W1644608J',
    products: [
      {
        name: 'Dolor sit eu',
        priceInfo: {amount: 2351, currency: 'EUR'},
        rating: 3.45,
      },
      {
        name: 'Lorem proin',
        priceInfo: {amount: 31, currency: 'EUR'},
        rating: 4.99,
      },
      {
        name: 'Lorem metus',
        priceInfo: {amount: 1231, currency: 'EUR'},
        rating: 1.78,
      },
      {
        name: 'Praesent vitae diam',
        priceInfo: {amount: 999, currency: 'EUR'},
        rating: 4.23,
      },
      {
        name: 'Etiam porta',
        priceInfo: {amount: 300, currency: 'EUR'},
        rating: 4.23,
      },
      {
        name: 'Nullam gravida ante',
        priceInfo: {amount: 1250, currency: 'EUR'},
        rating: 3.5,
      },
    ],
  },
  {
    name: 'Hendrerit',
    address: 'Plza. Proin ex nulla porttitor, 232',
    city: 'Ligula',
    taxId: 'Z9489520R',
    products: [
      {
        name: 'Mauris ultrices',
        priceInfo: {amount: 14521, currency: 'EUR'},
        rating: 2,
      },
    ],
  },
  {
    name: 'Dignissim Malesuada',
    address: 'Cl. Duis ultricies, 65',
    city: 'Pellentesque',
    taxId: '80244825X',
    products: [
      {
        name: 'Lorem Ipsum',
        priceInfo: {amount: 324, currency: 'EUR'},
        rating: 1.25,
      },
      {
        name: 'Sed rutrum',
        priceInfo: {amount: 195299, currency: 'EUR'},
        rating: 5,
      },
      {
        name: 'Donec id lorem egestas',
        priceInfo: {amount: 6241, currency: 'EUR'},
        rating: 1,
      },
      {
        name: 'Integer aliquam',
        priceInfo: {amount: 3173, currency: 'EUR'},
        rating: 2.41,
      },
    ],
  },
]

module.exports = {
  async up(db) {
    for (let vendor of data) {
      const {insertedId} = await db.collection('vendors').insertOne({...vendor})

      const products = vendor.products.map(product => ({
        ...product,
        vendor: {
          _id: insertedId,
          ...vendor,
        },
      }))

      await db.collection('products').insertMany(products)
    }
  },

  async down(db) {
    const vendors = await db.collection('vendors').find({}).toArray()

    await db.collection('products').deleteMany({
      vendor: {
        $in: [...vendors],
      },
    })
    await db.collection('vendors').deleteMany()
  },
}
