import { expect } from "chai"
import arrayDiff from "../practices/arrayDiff"

describe("Remove the numbers from the second parameter, in the first parameter", () => {
  it("Should return the whole array when there is not number to remove", () => {
    const numbers = [1, 2, 3]
    const toRemoved = [4, 5]
    const result = arrayDiff(numbers, toRemoved)
    expect(result).to.be.eq(numbers)
  })
  it("Should return the array with the right numbers removed", () => {
    const numbers = [3, 4]
    const toRemoved = [3]
    const result = arrayDiff(numbers, toRemoved)
    expect(result).to.be.eq([4])
  })
})
