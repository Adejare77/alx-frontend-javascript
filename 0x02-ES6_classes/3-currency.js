class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('');
    }
    if (typeof name !== 'string') {
      throw new TypeError('');
    }
    this._name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
