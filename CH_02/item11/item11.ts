interface Room {
  numDoors: number;
  ceilineHeightFt: number;
}

const r: Room = {
  numDoors: 1,
  ceilineHeightFt: 10,
  elephant: "present",
  // 'Room' 형식에 'elephant'가 없다.
};

const obj = {
  numDoors: 1,
  ceilineHeightFt: 10,
  elephant: "good",
};

const r: Room = obj; // true
