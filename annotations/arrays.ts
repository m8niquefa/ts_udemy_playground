const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];
const carsByMake: string[][] = [["f150"], ["corolla"], ["camaro"]];

// Help with inference when extracting values

const car = carMakers[0];
const myCar = carMakers.pop(); //Return instance of string

// Prevent incompatible values
//carMakers.push(100); //Error

const carsInUpperCase: string[] = carMakers.map((car: string): string => {
  return car.toUpperCase();
});

console.log(carsInUpperCase);

const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
importantDates.push("2030-10-10");
importantDates.push(new Date());

console.log(importantDates);