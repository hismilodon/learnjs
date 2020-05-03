class Animal {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }

  stop = ()=> {
    this.speed = 0;
    alert(`${this.name} stoped`);
  }

  run(speed) {
    this.speed = speed;
    alert(`${this.name} runs with speed ${this.speed}`);
  }
}

class Rabbit extends Animal{
  constructor(name, speed) {
    super(name);
    super.run(speed);
    alert(`${this.name} was created!`);
  }

  stop() {
    setTimeout(super.stop, 1000);
  }
}

let rabbit = new Rabbit('Bunny', 10);
rabbit.stop();
