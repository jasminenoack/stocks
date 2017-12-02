import { AlphaVantage } from "./apiBase";

export enum TimeSets {
  one = "1min", five = "5min", fifteen = "15min", thirty = "30min", sixty = "60min",
}

export class IntradaySeries extends AlphaVantage {
  public apiFunction = "TIME_SERIES_INTRADAY";

  public additionalQuery(interval = TimeSets.one) {
    return `interval=${interval}`;
  }
}
