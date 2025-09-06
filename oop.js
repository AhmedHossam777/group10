class Parent {
  constructor() {}

  logName() {
    console.log(`my name is ahmed`);
  }
}

class Child extends Parent {
  play() {
    console.log("play d,.sa,dsa.");
  }
}

const ahmed = new Parent();

const hossam = new Child();

ahmed.logName();

hossam.logName();
hossam.play();