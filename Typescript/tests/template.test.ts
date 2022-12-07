import { expect } from "chai"
import practiceFile from "../practices/template"

describe("File to create typescript test from the practices", () => {
  it("Testes", () => {
    const phrase = practiceFile("testing")
    expect(phrase).to.be.eq("testing")
  })
})
