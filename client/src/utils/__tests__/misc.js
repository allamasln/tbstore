import {formatPrice} from '../misc'

test('formatPrice formats the price in the current local and currency', () => {
  expect(formatPrice({amount: 10341, currency: 'EUR'})).toBe('103.41 €')
})
