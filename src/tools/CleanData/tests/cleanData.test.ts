import { cleanData } from "../cleanData"
import { before, after } from "./testData"
import { before as before2, after as after2 } from "./testData2"

describe("regression test", () => {
  it("regression 2021/6", () => {
    expect(cleanData(before)).toBe(after)
  })

  it("regression 2021/4", () => {
    expect(cleanData(before2)).toBe(after2)
  })
})
