export class Redis {

  myMap: Map<string, string> = new Map();

  get(key: string): string {
    const x = this.myMap.get(key);
    return x || "";
  }

  set(key: string, value: string): void {
    this.myMap.set(key, value);
  }

}
