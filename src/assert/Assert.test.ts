import { describe, test } from "@javarome/testscript"
import { Assert } from "./Assert.js"
import { RR0AssertionError } from "./RR0AssertionError.js"

describe("Assert", async () => {

  const assert = await Assert.getInstance()

  test("ok", () => {
    assert.ok(true, "true is not true")
    try {
      assert.ok(false, "false is not true")
      throw new Error("Should not succeed")
    } catch (e) {
      if (!(e instanceof RR0AssertionError)) {
        throw e
      }
    }
  })
})
