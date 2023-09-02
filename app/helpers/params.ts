import assert from "assert";

export default class ParamsHelper {
  public static getUnique(paramValue: unknown): string {
    assert(!Array.isArray(paramValue));
    return paramValue as string;
  }
}
