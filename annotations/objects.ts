const profile = {
  name: "Alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile; // Destructuring

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile; // Destructuring

console.log(`The age is ${age} and the coordinates are ${lat} and ${lng}`);

