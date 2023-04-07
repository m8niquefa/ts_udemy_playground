import { MatchData } from '../MatchData';
import { Analyzer } from '../Summary';
import { getSortedByValueFromMap } from '../utils';

export class PointsPerTeamAnalysis implements Analyzer{

  run(matches: MatchData[]): string {

    const points = new Map<string, number>();

    for (let match of matches) {
      if( match[3] === match[4]) {
        points.set(match[1], (points.get(match[1]) || 0) + 1);
        points.set(match[2], (points.get(match[2]) || 0) + 1);
      } else if ( match[3] > match[4]) {
        points.set(match[1], (points.get(match[1]) || 0) + 3);
      } else {
        points.set(match[2], (points.get(match[2]) || 0) + 3);
      }
    }
    const mapAsArray = getSortedByValueFromMap(points);
    let result: string = "Points per team analysis text report:\n";
    for (let pair of mapAsArray) {
      result += `${pair[0]} Has ${pair[1]} points.\n`;
    }

    return result;
  }
} 