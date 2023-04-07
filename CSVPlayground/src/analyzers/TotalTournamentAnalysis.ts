import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';
import { Analyzer } from '../Summary';

type TeamData = {
  team: string;
  points: number;
  wins: number;
  loses: number;
  draws: number;
  goalsInFavor: number;
  goalsAgainst: number;
  goalDiff: number;
};

const createEmptyTeamData = (team: string): TeamData => {
  return {
    team,
    points: 0,
    wins: 0,
    loses: 0,
    draws: 0,
    goalsInFavor: 0,
    goalsAgainst: 0,
    goalDiff: 0,
  };
}

export class TotalTournamentAnalysis implements Analyzer{

  run(matches: MatchData[]): string {

    const teams: Map<string,TeamData> = new Map();

    for (let match of matches) {
      const homeTeam = teams.get(match[1]) || createEmptyTeamData(match[1]);
      const awayTeam = teams.get(match[2]) || createEmptyTeamData(match[2]);

      if (match[5] === MatchResult.HomeWin) {
        homeTeam.wins++;
        awayTeam.loses++;
        homeTeam.points += 3;
      } else if (match[5] === MatchResult.AwayWin) {
        awayTeam.wins++;
        homeTeam.loses++;
        awayTeam.points += 3;
      } else {
        homeTeam.draws++;
        awayTeam.draws++;
        homeTeam.points++;
        awayTeam.points++;
      }

      homeTeam.goalsInFavor += match[3];
      homeTeam.goalsAgainst += match[4];
      homeTeam.goalDiff = homeTeam.goalsInFavor - homeTeam.goalsAgainst;

      awayTeam.goalsInFavor += match[4];
      awayTeam.goalsAgainst += match[3];
      awayTeam.goalDiff = awayTeam.goalsInFavor - awayTeam.goalsAgainst;

      teams.set(match[1], homeTeam);
      teams.set(match[2], awayTeam);
    }

    const sortedTeams = [...teams.values()];
    sortTeams(sortedTeams);

    return generateHTMLTable(sortedTeams);
  }
} 

function sortTeams(teams: TeamData[]): void {

  teams.sort((a, b) => {
      if (a.points !== b.points) {
          return b.points - a.points;
      }
      if (a.wins !== b.wins) {
          return b.wins - a.wins;
      }
      if (a.loses !== b.loses) {
          return a.loses - b.loses;
      }
      if (a.draws !== b.draws) {
          return a.draws - b.draws;
      }
      if (a.goalsInFavor !== b.goalsInFavor) {
          return b.goalsInFavor - a.goalsInFavor;
      }
      if (a.goalsAgainst !== b.goalsAgainst) {
          return a.goalsAgainst - b.goalsAgainst;
      }
      if (a.goalDiff !== b.goalDiff) {
        return a.goalDiff - b.goalDiff;
    }
      return a.team.localeCompare(b.team);
  });
}
function generateHTMLTable(teams: TeamData[]): string {
  let htmlTable = `<table>
      <thead>
          <tr>
              <th>Team</th>
              <th>Points</th>
              <th>Wins</th>
              <th>Loses</th>
              <th>Draws</th>
              <th>Goals in Favor</th>
              <th>Goals Against</th>
              <th>Goal Diff</th>
          </tr>
      </thead>
      <tbody>`;

  for (const teamData of teams) {
      htmlTable += `
          <tr>
              <td>${teamData.team}</td>
              <td>${teamData.points}</td>
              <td>${teamData.wins}</td>
              <td>${teamData.loses}</td>
              <td>${teamData.draws}</td>
              <td>${teamData.goalsInFavor}</td>
              <td>${teamData.goalsAgainst}</td>
              <td>${teamData.goalDiff}</td>
          </tr>`;
  }

  htmlTable += `
      </tbody>
  </table>`;

  return htmlTable;
}
