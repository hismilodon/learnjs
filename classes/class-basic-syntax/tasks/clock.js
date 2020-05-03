
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render = () => {
    let date = new Date();
    let hours = `${date.getHours()}`.padStart(2,'0');
    let mins = `${date.getMinutes()}`.padStart(2, '0');
    let secs = `${date.getSeconds()}`.padStart(2, '0');
    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);
    console.log(output);
  };

  stop = () => clearInterval(this.timer);

  start = () => {
    this.render();
    this.timer = setInterval(this.render, 2000);
  };

}

let clock = new Clock({ template: 'h:m:s' });
clock.start();
