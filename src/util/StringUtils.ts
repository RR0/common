import {ObjectUtils} from "./ObjectUtils.js";

export class StringUtils {

  static toString(x: any): string {
    return ObjectUtils.isDefined(x) ? typeof x === 'string' ? `"${x}"` : x.toString() : x
  }
}
