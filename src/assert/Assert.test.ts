import { describe, test } from "@javarome/testscript"
import { assertInit } from "./Assert.js"

describe("Assert",async () => {

  const assert = await assertInit()

  test("ok", () => {
    assert.ok(true)
  })
})
