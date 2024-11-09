export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // get [Symbol.toStringTag]() {
  //   return `This is the Customized string repr`
  // }

  toString() {
    return `[object ${this._code}]`;
  }
}
