import { expect } from "chai"
import isValidWalk from "../practices/isValidWalk"

describe("Testing is valid walk", () => {
  describe('When go to a walk and come back', () => {
    it("Should return true", () => {
      const directions = [
        ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'],
        ['n', 'n', 'n', 'n', 'n', 's', 's', 's', 's', 's'],
        ['w', 'w', 'w', 'w', 'w', 'e', 'e', 'e', 'e', 'e'],
        ['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'],
      ]
      directions.forEach((direction: string[]) => {
        expect(isValidWalk(direction)).to.be.eq(true)
      })

    })
  })

  describe("When go to a walk and not come back", () => {
    it("Should return false", () => {
      const directions = [
        ['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'],
        ['s', 's', 's', 's', 's', 's', 'n', 's', 'n', 's'],
        ['n', 'n', 'n', 'w', 'w', 'w', 's', 's', 's', 'e'],
        ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 'n'],
        ['n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w'],
      ]
      directions.forEach((direction: string[]) => {
        expect(isValidWalk(direction)).to.be.eq(false)
      })
    })
  })

  describe("When the walk is less than 10 steps", () => {
    it("Should return False", () => {
      const directions = [
        ['n', 's'],
        ['w', 'e', 'w', 'e'],
        ['n', 'n', 'n', 's', 's', 's'],
      ]
      directions.forEach((direction: string[]) => {
        expect(isValidWalk(direction)).to.be.eq(false)
      })
    })
  })

  describe("When the walk is bigger than 10 steps", () => {
    it("Should return False", () => {
      const directions = [
        ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'],
        ['n', 'n', 'n', 'n', 'n', 'n', 's', 's', 's', 's', 's', 's'],
        ['w', 'w', 'w', 'w', 'w', 'w', 'e', 'e', 'e', 'e', 'e'],
        ['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'],
      ]
      directions.forEach((direction: string[]) => {
        expect(isValidWalk(direction)).to.be.eq(false)
      })
    })
  })

})
