class Polygon {
  // constructor
  // class variables
  // class methods

  constructor(ht, wd) {
    this.ht = ht;
    this.wd = wd;
  }

  test() {
    console.log(`height is: ${this.ht}`);
    console.log(`width is: ${this.wd}`);
  }
}

var polygon = new Polygon(100, 20);
polygon.test();
