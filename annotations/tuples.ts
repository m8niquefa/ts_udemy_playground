const drink = { color: "brown", carbonated: true, sugar: 40 };

class Drink {
  color: string;
  carbonated: boolean;
  sugar: number;
  constructor(c: string, ca: boolean, s: number) {
    this.color = c;
    this.carbonated = ca;
    this.sugar = s;
  }

  public toString(): string {
    return `My drink of color  ${this.color} and ${this.carbonated ? "" : "not"} carbonated has ${this.sugar} grams of sugar`;
  }
}

const pepsi: [string, boolean, number] = ["brown", true, 40];
const sprite: [string, boolean, number] = ["clear", true, 40];
const tea: [string, boolean, number] = ["brown", false, 0];

type Drink2 = [string, boolean, number];

const pepsi2: Drink2 = ["brown", true, 40];
const sprite2: Drink2 = ["clear", true, 40];
const tea2: Drink2 = ["brown", false, 0];

console.log(`Pepsi: ${pepsi} and ${pepsi2}`);
console.log(`sprite: ${sprite} and ${sprite2}`);
console.log(`tea: ${tea} and ${tea2}`);

carSpecs = [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354,
}

