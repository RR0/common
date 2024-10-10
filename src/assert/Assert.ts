import { RR0AssertionError } from "./AssertionError.js"

export abstract class Assert {

  protected abstract ok(something: any): void
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

export const assertInit = async () => {
  return typeof process === "undefined" ?
    new BrowserAssert()
    : new NodeAssert(await import("node:assert"))
}
