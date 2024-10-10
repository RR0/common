import { RR0AssertionError } from "./RR0AssertionError.js"

export abstract class Assert {

  abstract ok(something: any, message?: string): void

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

  ok(something: any, message = RR0AssertionError.defaultMessage) {
    console.assert(something, message)
  }
}

export class NodeAssert extends Assert {

  constructor(protected assert: any) {
    super()
  }

  ok(something: any, message = RR0AssertionError.defaultMessage): void {
    try {
      this.assert.ok(something, message)
    } catch (e) {
      throw new RR0AssertionError((e as Error).message)
    }
  }
}
