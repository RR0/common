export class RR0Error extends Error {

  constructor(message: string, protected cause?: Error) {
    super(message)
  }
}
