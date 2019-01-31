function theBeatlesPlay (musicians, instruments) {

var MyArray = [];

for (let i = 0; i < musicians.length; i++) {
  MyArray.push(musicians[i] + "plays" + instruments[i])
}
return MyArray;
}// add solution here
