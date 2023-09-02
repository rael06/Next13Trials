import assert from "assert";

export default class ParamsHelper {
  public static getSingle(paramValue: unknown): string {
    assert(!Array.isArray(paramValue));
    return paramValue as string;
  }

  public static getMultiple(paramValue: unknown): string[] {
    assert(Array.isArray(paramValue));
    return paramValue as string[];
  }
}
