import { SupportedLocale } from "./locale";

export enum LocalStorageKey {
  locale = "locale",
}

type LocalStorageItems = {
  [LocalStorageKey.locale]: SupportedLocale;
};

export default class LocalStorage {
  public static get<T extends LocalStorageItems[LocalStorageKey]>(
    key: LocalStorageKey
  ): T | null {
    const item = window.localStorage.getItem(key);
    if (!item) {
      return null;
    }

    const isArrayOrObject = item.match(/[{[]/);

    return (isArrayOrObject ? JSON.parse(item) : item) as T;
  }

  public static set<T extends LocalStorageItems[LocalStorageKey]>(
    key: LocalStorageKey,
    item: T
  ) {
    window.localStorage.setItem(
      key,
      typeof item === "string" ? item : JSON.stringify(item)
    );
  }

  private static delete(key: LocalStorageKey) {
    window.localStorage.removeItem(key);
  }
}
