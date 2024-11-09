class HolbertonCourse {
  constructor(name, length, students) {
    // if (typeof name !== 'string') {
    //   throw new TypeError('Name must be a string')
    // }
    // if (typeof length !== 'number') {
    //   throw new TypeError('Length must be a number')
    // }
    // if (!Array.isArray(students)) {
    //   throw new TypeError('Students must be an Array')
    // }
    HolbertonCourse.stringType(name);
    HolbertonCourse.lengthType(length);
    HolbertonCourse.arrayType(students);
    this._name = name;
    this._length = length;
    this._students = students;
  }

  static stringType(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  static lengthType(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
  }

  static arrayType(students) {
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an Array');
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    HolbertonCourse.stringType(value);
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    HolbertonCourse.lengthType(value);
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    HolbertonCourse.arrayType(value);
    this._students = value;
  }
}

export default HolbertonCourse;
