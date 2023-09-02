type LocalStorageItems = {
  lang: string;
};

export default class LocalStorage {
  public static get<T extends LocalStorageItems[keyof LocalStorageItems]>(
    key: keyof LocalStorageItems
  ): T | null {
    const item = window.localStorage.getItem(key);
    if (!item) {
      return null;
    }

    const isArrayOrObject = item.match(/[{[]/);

    return (isArrayOrObject ? JSON.parse(item) : item) as T;
  }

  public static set<T extends LocalStorageItems[keyof LocalStorageItems]>(
    key: keyof LocalStorageItems,
    item: T
  ) {
    window.localStorage.setItem(
      key,
      typeof item === "string" ? item : JSON.stringify(item)
    );
  }

  private static delete(key: keyof LocalStorageItems) {
    window.localStorage.removeItem(key);
  }
}
