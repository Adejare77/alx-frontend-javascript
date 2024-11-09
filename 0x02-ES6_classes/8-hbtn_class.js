export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  toString() { // cast into a String. e.g String(..)
    return this._location;
  }

  valueOf() { // cast into a Number e.g Number(..)
    return this._size;
  }
}
