import { IntradaySeries, TimeSets } from "./../../src/alphaVantage/intraday";
import { stocks } from "./../../src/stocks";

describe("time series intraday", () => {
  let timeSeries;

  beforeEach(() => {
    timeSeries = new IntradaySeries();
  });

  it("it should build the url", () => {
    expect(
      timeSeries.getUrl(stocks.aok.symbol),
    ).toEqual(
      "https://www.alphavantage.co/query?function=" +
      "TIME_SERIES_INTRADAY&symbol=AOK&interval=1min&apikey=NRY8F1MF97WHB8ED",
    );
    expect(
      timeSeries.getUrl(stocks.vox.symbol),
    ).toEqual(
      "https://www.alphavantage.co/query?function=" +
      "TIME_SERIES_INTRADAY&symbol=VOX&interval=1min&apikey=NRY8F1MF97WHB8ED",
    );
    expect(
      timeSeries.getUrl(stocks.vox.symbol, TimeSets.five),
    ).toEqual(
      "https://www.alphavantage.co/query?function=" +
      "TIME_SERIES_INTRADAY&symbol=VOX&interval=5min&apikey=NRY8F1MF97WHB8ED",
    );
  });
});
