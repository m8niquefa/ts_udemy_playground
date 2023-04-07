import fs from 'fs';
import { MatchData } from './inheritance/MatchReader';


export class CsvFileReader {
  data : MatchData[] = [];
  constructor(public filename: string) {}

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8'
    })
    .split('\n')
    .map((row: string): string[] => {
      return row.split(',');
    });
  }
}