import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { PointsPerTeamAnalysis } from "./analyzers/PointsPerTeamAnalysis";
import { GoalsPerTeamAnalysis } from "./analyzers/GoalsPerTeamAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { TotalTournamentAnalysis } from "./analyzers/TotalTournamentAnalysis";

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();
const report_wins_main_united = 'report_wins_main_united';

let summary = Summary.winsAnalysisWithHtmlReport('Man United', report_wins_main_united);
summary.buildAndPrintReport(matchReader.matches);

summary = new Summary(
  new PointsPerTeamAnalysis(),
  new ConsoleReport()
);
summary.buildAndPrintReport(matchReader.matches);


summary = new Summary(
  new GoalsPerTeamAnalysis(),
  new ConsoleReport()
);
summary.buildAndPrintReport(matchReader.matches);


summary = new Summary(
  new WinsAnalysis('Man United'),
  new HtmlReport(report_wins_main_united, 'Wins Report for Man United')
);
summary.buildAndPrintReport(matchReader.matches);

summary = new Summary(
  new TotalTournamentAnalysis(),
  new HtmlReport('total_report', 'Total Tournament Report')
);
summary.buildAndPrintReport(matchReader.matches);