interface Reportable {
  summary(): string;
}

interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name} ${this.year} ${this.broken}`;
  },
};

const printVehicle = (vehicle: {
  name: string;
  year: Date;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink of color  ${this.color} and ${
      this.carbonated ? "" : "not"
    } carbonated has ${this.sugar} grams of sugar`;
  },
};

printVehicle(oldCivic);

const printReport = (item: Reportable): void => {
  console.log(item.summary());
};

printReport(oldCivic);
printReport(drink);
