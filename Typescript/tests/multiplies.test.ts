import { expect } from "chai"
import Multiplies from "../practices/Multiplies"

describe("Sum of adjacentes numbers multiplies of 5 and 3", () => {
  it("Should be equal '23' when passing 10", () => {
    const result = Multiplies.solution(10)
    expect(result).to.be.eq(23)
  })
  it("Should be equal '50' when passing 15", () => {
    const result = Multiplies.solution(15)
    expect(result).to.be.eq(50)
  })
  it("Should return 0 if the number is negative", () => {
    const result = Multiplies.solution(-10)
    expect(result).to.be.eq(0)
  })
})
