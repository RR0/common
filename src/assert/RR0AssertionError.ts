import { RR0Error } from "../error"

export class RR0AssertionError extends RR0Error {

  constructor(message = "Assertion failed", cause?: Error) {
    super(message, cause)
  }
}
