import { expect, test } from 'vitest'
import { simpleArraySum } from  './simpleArraySum'

test('Example: [1, 2, 3] returns 6', () => {
  expect(simpleArraySum([1, 2, 3])).toBe(6)
})
