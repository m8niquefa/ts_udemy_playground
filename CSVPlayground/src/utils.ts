export const dateStringToDate = (dateString: string): Date => {
  // Example: 28/10/2018
  const dateParts = dateString
    .split('/')
    .map((value: string): number => {
      return parseInt(value);
    });
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}

export const getSortedByValueFromMap = (map: Map<string, number>): [string, number][] => {
  return Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
}