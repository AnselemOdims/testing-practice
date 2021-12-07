export default class Calculator {
  constructor(first, second){
    this.first = first;
    this.second = second;
  }

  add() {
    return this.first + this.second
  }

  subtract(){
    return this.second - this.first
  }
}