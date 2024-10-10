export class RR0Error extends Error {

  constructor(message: string, readonly cause?: Error) {
    super(message)
  }
}
