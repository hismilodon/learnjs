class Button {
  constructor(value) {
    this.value = value;
  }
  click = (v1, v2) => {
    alert(`${this.value} ${v1} ${v2}`);
  }
  [Symbol.toPrimitive] = () => {
    return 'Very well';
  }
  [Symbol.toString] = () => {
    return 'Very well again';
  }  
}

let button = new Button("hello");
alert(button);
setTimeout(button.click, 1000, ...['Good', 'Time']); // hello

