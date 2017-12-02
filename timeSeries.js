// Alpha Vantage
// intraday
// daily
// daily adjusted
// weekly
// weekly adjusted
// monthly
// monthly adjusted

// TIME_SERIES_INTRADAY
// API Parameters
// ❚ Required: function
// The time series of your choice.In this case, function=TIME_SERIES_INTRADAY
// ❚ Required: symbol
// The name of the equity of your choice.For example: symbol = MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series.The following values are supported: 1min, 5min, 15min, 30min, 60min
// ❚ Optional: outputsize
// By default, outputsize = compact.Strings compact and full are accepted with the following specifications: compact returns only the latest 100 data points in the intraday time series; full returns the full- length intraday time series.The "compact" option is recommended if you would like to reduce the data size of each API call.
// ❚ Optional: datatype
// By default, datatype = json.Strings json and csv are accepted with the following specifications: json returns the intraday time series in JSON format; csv returns the time series as a CSV (comma separated value) file.
// ❚ Required: apikey
// Your API key.Claim your free API key here.
// https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=demo
// https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=15min&outputsize=full&apikey=demo

// TIME_SERIES_DAILY High Usage
// This API returns daily time series (date, daily open, daily high, daily low, daily close, daily volume) of the equity specified, covering up to 20 years of historical data.
// The most recent data point is the cumulative prices and volume information of the current trading day, updated realtime.
// API Parameters
// ❚ Required: function
// The time series of your choice.In this case, function=TIME_SERIES_DAILY
// ❚ Required: symbol
// The name of the equity of your choice.For example: symbol = MSFT
// ❚ Optional: outputsize
// By default, outputsize = compact.Strings compact and full are accepted with the following specifications: compact returns only the latest 100 data points; full returns the full- length time series of up to 20 years of historical data.The "compact" option is recommended if you would like to reduce the data size of each API call.
// ❚ Optional: datatype
// By default, datatype = json.Strings json and csv are accepted with the following specifications: json returns the daily time series in JSON format; csv returns the time series as a CSV (comma separated value) file.
// ❚ Required: apikey
// Your API key.Claim your free API key here.
//   Examples(click for JSON output)
//   https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo
//   https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=full&apikey=demo

// TIME_SERIES_DAILY_ADJUSTED High Usage
// This API returns daily time series (date, daily open, daily high, daily low, daily close, daily volume, daily adjusted close, and split/ dividend events) of the equity specified, covering up to 20 years of historical data.
// The most recent data point is the cumulative prices and volume information of the current trading day, updated realtime.
// API Parameters
// ❚ Required: function
// The time series of your choice.In this case, function=TIME_SERIES_DAILY_ADJUSTED
// ❚ Required: symbol
// The name of the equity of your choice.For example: symbol = MSFT
// ❚ Optional: outputsize
// By default, outputsize = compact.Strings compact and full are accepted with the following specifications: compact returns only the latest 100 data points; full returns the full- length time series of up to 20 years of historical data.The "compact" option is recommended if you would like to reduce the data size of each API call.
// ❚ Optional: datatype
// By default, datatype = json.Strings json and csv are accepted with the following specifications: json returns the daily time series in JSON format; csv returns the time series as a CSV (comma separated value) file.
// ❚ Required: apikey
// Your API key.Claim your free API key here.
//   Examples(click for JSON output)
//   https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&apikey=demo
//   https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&outputsize=full&apikey=demo

// TIME_SERIES_WEEKLY
// This API returns weekly time series (last trading day of each week, weekly open, weekly high, weekly low, weekly close, weekly volume) of the equity specified, covering up to 20 years of historical data.
// The latest data point is the cumulative prices and volume information for the week (or partial week) that contains the current trading day, updated realtime.
// API Parameters
// ❚ Required: function
// The time series of your choice.In this case, function=TIME_SERIES_WEEKLY
// ❚ Required: symbol
// The name of the equity of your choice.For example: symbol = MSFT
// ❚ Optional: datatype
// By default, datatype = json.Strings json and csv are accepted with the following specifications: json returns the weekly time series in JSON format; csv returns the time series as a CSV (comma separated value) file.
// ❚ Required: apikey
// Your API key.Claim your free API key here.
//   Example(click for JSON output)
//   https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=MSFT&apikey=demo
//   Downloadable CSV file:
// https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=MSFT&apikey=demo&datatype=csv

// TIME_SERIES_WEEKLY_ADJUSTED
// This API returns weekly adjusted time series (last trading day of each week, weekly open, weekly high, weekly low, weekly close, weekly adjusted close, weekly volume, weekly dividend) of the equity specified, covering up to 20 years of historical data.
// The latest data point is the cumulative prices and volume information for the week (or partial week) that contains the current trading day, updated realtime.
// API Parameters
// ❚ Required: function
// The time series of your choice.In this case, function=TIME_SERIES_WEEKLY_ADJUSTED
// ❚ Required: symbol
// The name of the equity of your choice.For example: symbol = MSFT
// ❚ Optional: datatype
// By default, datatype = json.Strings json and csv are accepted with the following specifications: json returns the weekly time series in JSON format; csv returns the time series as a CSV (comma separated value) file.
// ❚ Required: apikey
// Your API key.Claim your free API key here.
//   Example(click for JSON output)
//   https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=MSFT&apikey=demo

// TIME_SERIES_MONTHLY
// This API returns monthly time series (last trading day of each month, monthly open, monthly high, monthly low, monthly close, monthly volume) of the equity specified, covering up to 20 years of historical data.
// The latest data point is the cumulative prices and volume information for the month (or partial month) that contains the current trading day, updated realtime.
// API Parameters
// ❚ Required: function
// The time series of your choice.In this case, function=TIME_SERIES_MONTHLY
// ❚ Required: symbol
// The name of the equity of your choice.For example: symbol = MSFT
// ❚ Optional: datatype
// By default, datatype = json.Strings json and csv are accepted with the following specifications: json returns the monthly time series in JSON format; csv returns the time series as a CSV (comma separated value) file.
// ❚ Required: apikey
// Your API key.Claim your free API key here.
//   Example(click for JSON output)
//   https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=MSFT&apikey=demo

// TIME_SERIES_MONTHLY_ADJUSTED
// This API returns monthly adjusted time series (last trading day of each month, monthly open, monthly high, monthly low, monthly close, monthly adjusted close, monthly volume, monthly dividend) of the equity specified, covering up to 20 years of historical data.
// The latest data point is the cumulative prices and volume information for the month (or partial month) that contains the current trading day, updated realtime.
// API Parameters
// ❚ Required: function
// The time series of your choice.In this case, function=TIME_SERIES_MONTHLY_ADJUSTED
// ❚ Required: symbol
// The name of the equity of your choice.For example: symbol = MSFT
// ❚ Optional: datatype
// By default, datatype = json.Strings json and csv are accepted with the following specifications: json returns the monthly time series in JSON format; csv returns the time series as a CSV (comma separated value) file.
// ❚ Required: apikey
// Your API key.Claim your free API key here.
//   Example(click for JSON output)
//   https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=MSFT&apikey=demo
