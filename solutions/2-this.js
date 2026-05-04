// BEGIN
const make = (num = 0, den = 1) => ({
  num,
  den,
  
  setNumer(value) {
    this.num = value;
  },
  
  setDenom(value) {
    this.den = value;
  },
  
  getNumer() {
    return this.num;
  },
  
  getDenom() {
    return this.den;
  },
  
  toString() {
    return `${this.num}/${this.den}`;
  },
  
  add(other) {
    const a = this.num;
    const b = this.den;
    const c = other.getNumer();
    const d = other.getDenom();
    
    const newNum = a * d + b * c;
    const newDen = b * d;
    
    return make(newNum, newDen);
  }
});

export default make;
// END