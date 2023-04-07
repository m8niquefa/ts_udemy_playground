import fs from 'fs';
import { OutputTarget } from "../Summary";

export class HtmlReport implements OutputTarget {

  constructor(public reportFileName: string, public reportName: string ){}

  print(report: string): void {
    const html = `
    <div>
      <h1>${this.reportName}</h1>
      <div>${report}</div>
    </div>
    `;
    console.log(html);
    fs.writeFileSync(`${this.reportFileName}.html`, html);
  }
}