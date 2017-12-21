export abstract class BaseModel {
  static resourceKey: string;

  public _id: string;
  public __v: number;

  fromObject(data: object) {
    for (let key in data) {
      this[key] = data[key];
    }
  }
}
