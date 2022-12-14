import { expect } from "chai"
import isValidWalk from "../practices/isValidWalk"

describe("Testing is valid walk", () => {
  describe('When go to a walk and come back', () => {
    it("Should return true", () => {
      const directions = [
        ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'],
        ['n', 'n', 'n', 'n', 'n', 's', 's', 's', 's', 's'],
        ['n', 'n', 'n', 'w', 'w', 'w', 's', 's', 's', 'e', 'e', 'e']
      ]
      directions.forEach((direction: string[]) => {
        expect(isValidWalk(direction)).to.be.eq(true)
      })
  
    })
  })

  describe("When go to a walk and not come back", () => {
    it("Should return false", () => {
      const directions = [
        ['n'],
        ['s', 's', 's', 's', 's'],
        ['n', 'n', 'n', 'w', 'w', 'w', 's', 's', 's', 'e', 'e']
      ]
      directions.forEach((direction: string[]) => {
        expect(isValidWalk(direction)).to.be.eq(false)
      })
    })
  })
})
