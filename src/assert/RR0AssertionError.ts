import { RR0Error } from "../error"


export class RR0AssertionError extends RR0Error {

  static readonly defaultMessage = "Assertion failed"

  constructor(message = RR0AssertionError.defaultMessage, cause?: Error) {
    super(message, cause)
  }
}
