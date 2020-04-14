let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

let json = JSON.stringify(meetup, (key, value) => {
  console.log('key:',key);
  console.log('value:',value);
  return (key == 'occupiedBy') ? undefined : value;
}, 4);

console.log(json);
