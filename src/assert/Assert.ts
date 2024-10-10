import { RR0AssertionError } from "./RR0AssertionError.js"

export abstract class Assert {

  abstract ok(something: any): void

  static instance: Assert

  /**
   * Provide an Assert instance suited to the environment (browser or NodeJS)
   */
  static async getInstance(): Promise<Assert> {
    if (!Assert.instance) {
      Assert.instance = typeof process === "undefined" ? new BrowserAssert() : new NodeAssert(
        await import("node:assert"))
    }
    return Assert.instance
  }
}

export class BrowserAssert extends Assert {

  ok(something: any) {
    console.assert(something)
  }
}

export class NodeAssert extends Assert {

  constructor(protected assert: any) {
    super()
  }

  ok(something: any): void {
    try {
      this.assert.ok(something)
    } catch (e) {
      throw new RR0AssertionError((e as Error).message)
    }
  }
}
