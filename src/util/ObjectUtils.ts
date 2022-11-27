export class AssertionError extends Error {
  constructor(message: string) {
    super(message)
  }
}

export class ObjectUtils {

  static isUndefined(obj: any) {
    return obj === void 0
  }

  static isDefined(obj?: any): boolean {
    return !ObjectUtils.isUndefined(obj)
  }

  static isNotSet(obj?: any): boolean {
    return ObjectUtils.isUndefined(obj) || obj === null
  }

  static isSet(obj?: any): boolean {
    return !this.isNotSet(obj)
  }

  static asSet<T>(obj?: T | null, msg?: string): T {
    if (this.isNotSet(obj)) {
      throw new AssertionError(msg ?? "value is not set")
    }
    return obj!
  }
}
