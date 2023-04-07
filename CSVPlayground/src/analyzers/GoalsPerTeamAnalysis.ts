import { MatchData } from '../MatchData';
import { Analyzer } from '../Summary';
import { getSortedByValueFromMap } from '../utils';

export class GoalsPerTeamAnalysis implements Analyzer{

  run(matches: MatchData[]): string {

    const goalsInFavor = new Map<string, number>();
    const goalsAgainst = new Map<string, number>();


    for (let match of matches) {
      goalsInFavor.set(match[1], (goalsInFavor.get(match[1]) || 0) + match[3]);
      goalsAgainst.set(match[1], (goalsAgainst.get(match[1]) || 0) + match[4]);
    }
    const goalsInFavorAsArray = getSortedByValueFromMap(goalsInFavor);
    let result: string = "Goals per team analysis text report:\n";
    for (let teamGoalsInFavorPair of goalsInFavorAsArray) {
      result += `${teamGoalsInFavorPair[0]} scored ${teamGoalsInFavorPair[1]} goals and conceded ${goalsAgainst.get(teamGoalsInFavorPair[0])} goals\n`;
    }

    return result;
  }
} 