const add = (a: number, b: number): number => {
  return a + b;
}

const subtract = (a: number, b: number): number => {
  return a - b;
}

const multiply = (a: number, b: number): number => {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);
}
//When we don't return anything never, we use "never"
const throwError = (message: string): never => {
  throw new Error(message);
}

const todaysWeather = {
  date: new Date(),
  weather: "sunny"
}

const logWeather = (forecast: { date: Date, weather: string } ): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
}

logWeather(todaysWeather);

const logWeatherDestructured = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
}

logWeatherDestructured(todaysWeather);

