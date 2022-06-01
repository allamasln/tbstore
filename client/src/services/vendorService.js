const vendors = [
  {
    _id: '1a',
    name: 'Consequat',
    address: 'Cl. Donec fermentum accumsan, 12',
    city: 'Scelerisque',
    taxId: 'W1644608J',
  },
  {
    _id: '2a',
    name: 'Hendrerit',
    address: 'Plza. Proin ex nulla porttitor, 232',
    city: 'Ligula',
    taxId: 'Z9489520R',
  },
  {
    _id: '3a',
    name: 'Dignissim Malesuada',
    address: 'Cl. Duis ultricies, 65',
    city: 'Pellentesque',
    taxId: '80244825X',
  },
]

export default function getVendors() {
  return [...vendors]
}
