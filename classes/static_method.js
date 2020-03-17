class StaticMethod {
  static first_method() {
    return 'First Static method has been called';
  }
  static second_method() {
    return this.first_method() + ' from second method';
  }
}
console.log(StaticMethod.first_method()); 

console.log(StaticMethod.second_method());