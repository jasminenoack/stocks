// Alpha Vantage
// Technical Indicators

// SMA High Usage
// This API returns the simple moving average (SMA) values. See also: Investopedia article and mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=SMA
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required:time_period
// Number of data points used to calculate each moving average value. Positive integers are accepted (e.g., time_period=60, time_period=200)
// ❚ Required: series_type
// The desired price type in the time series. Four types are supported: close, open, high, low
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Examples (click for JSON output)
// https://www.alphavantage.co/query?function=SMA&symbol=MSFT&interval=15min&time_period=10&series_type=close&apikey=demo
// https://www.alphavantage.co/query?function=SMA&symbol=MSFT&interval=weekly&time_period=10&series_type=open&apikey=demo

// EMA High Usage
// This API returns the exponential moving average (EMA) values. See also: mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=EMA
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required:time_period
// Number of data points used to calculate each moving average value. Positive integers are accepted (e.g., time_period=60, time_period=200)
// ❚ Required: series_type
// The desired price type in the time series. Four types are supported: close, open, high, low
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Examples (click for JSON output)
// https://www.alphavantage.co/query?function=EMA&symbol=MSFT&interval=15min&time_period=10&series_type=close&apikey=demo
// https://www.alphavantage.co/query?function=EMA&symbol=MSFT&interval=weekly&time_period=10&series_type=open&apikey=demo

// WMA
// This API returns the weighted moving average (WMA) values. See also: mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=WMA
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required:time_period
// Number of data points used to calculate each moving average value. Positive integers are accepted (e.g., time_period=60, time_period=200)
// ❚ Required: series_type
// The desired price type in the time series. Four types are supported: close, open, high, low
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Examples (click for JSON output)
// https://www.alphavantage.co/query?function=WMA&symbol=MSFT&interval=15min&time_period=10&series_type=close&apikey=demo
// https://www.alphavantage.co/query?function=WMA&symbol=MSFT&interval=weekly&time_period=10&series_type=open&apikey=demo

// DEMA
// This API returns the double exponential moving average (DEMA) values. See also: Investopedia article and mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=DEMA
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required:time_period
// Number of data points used to calculate each moving average value. Positive integers are accepted (e.g., time_period=60, time_period=200)
// ❚ Required: series_type
// The desired price type in the time series. Four types are supported: close, open, high, low
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Examples (click for JSON output)
// https://www.alphavantage.co/query?function=DEMA&symbol=MSFT&interval=15min&time_period=10&series_type=close&apikey=demo
// https://www.alphavantage.co/query?function=DEMA&symbol=MSFT&interval=weekly&time_period=10&series_type=open&apikey=demo

// TEMA
// This API returns the triple exponential moving average (TEMA) values. See also: mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=TEMA
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required:time_period
// Number of data points used to calculate each moving average value. Positive integers are accepted (e.g., time_period=60, time_period=200)
// ❚ Required: series_type
// The desired price type in the time series. Four types are supported: close, open, high, low
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Examples (click for JSON output)
// https://www.alphavantage.co/query?function=TEMA&symbol=MSFT&interval=15min&time_period=10&series_type=close&apikey=demo
// https://www.alphavantage.co/query?function=TEMA&symbol=MSFT&interval=weekly&time_period=10&series_type=open&apikey=demo

// TRIMA
// This API returns the triangular moving average (TRIMA) values. See also: mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=TRIMA
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required:time_period
// Number of data points used to calculate each moving average value. Positive integers are accepted (e.g., time_period=60, time_period=200)
// ❚ Required: series_type
// The desired price type in the time series. Four types are supported: close, open, high, low
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Examples (click for JSON output)
// https://www.alphavantage.co/query?function=TRIMA&symbol=MSFT&interval=15min&time_period=10&series_type=close&apikey=demo
// https://www.alphavantage.co/query?function=TRIMA&symbol=MSFT&interval=weekly&time_period=10&series_type=open&apikey=demo

// KAMA
// This API returns the Kaufman adaptive moving average (KAMA) values.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=KAMA
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required:time_period
// Number of data points used to calculate each moving average value. Positive integers are accepted (e.g., time_period=60, time_period=200)
// ❚ Required: series_type
// The desired price type in the time series. Four types are supported: close, open, high, low
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Examples (click for JSON output)
// https://www.alphavantage.co/query?function=KAMA&symbol=MSFT&interval=15min&time_period=10&series_type=close&apikey=demo
// https://www.alphavantage.co/query?function=KAMA&symbol=MSFT&interval=weekly&time_period=10&series_type=open&apikey=demo

// MAMA
// This API returns the MESA adaptive moving average (MAMA) values.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=MAMA
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required: series_type
// The desired price type in the time series. Four types are supported: close, open, high, low
// ❚ Optional: fastlimit
// Positive floats are accepted. By default, fastlimit=0.01.
// ❚ Optional: slowlimit
// Positive floats are accepted. By default, slowlimit=0.01.
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=MAMA&symbol=MSFT&interval=15min&series_type=close&fastlimit=0.02&apikey=demo

// T3
// This API returns the triple exponential moving average (T3) values. See also: mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=T3
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required:time_period
// Number of data points used to calculate each moving average value. Positive integers are accepted (e.g., time_period=60, time_period=200)
// ❚ Required: series_type
// The desired price type in the time series. Four types are supported: close, open, high, low
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Examples (click for JSON output)
// https://www.alphavantage.co/query?function=T3&symbol=MSFT&interval=15min&time_period=10&series_type=close&apikey=demo
// https://www.alphavantage.co/query?function=T3&symbol=MSFT&interval=weekly&time_period=10&series_type=open&apikey=demo

// MACD High Usage
// This API returns the moving average convergence / divergence (MACD) values. See also: Investopedia article and mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=MACD
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required: series_type
// The desired price type in the time series. Four types are supported: close, open, high, low
// ❚ Optional: fastperiod
// Positive integers are accepted. By default, fastperiod=12.
// ❚ Optional: slowperiod
// Positive integers are accepted. By default, slowperiod=26.
// ❚ Optional: signalperiod
// Positive integers are accepted. By default, signalperiod=9.
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Examples (click for JSON output)
// https://www.alphavantage.co/query?function=MACD&symbol=MSFT&interval=15min&series_type=close&fastperiod=10&apikey=demo
// https://www.alphavantage.co/query?function=MACD&symbol=MSFT&interval=daily&series_type=open&apikey=demo

// MACDEXT
// This API returns the moving average convergence / divergence values with controllable moving average type. See also: Investopedia article and mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=MACDEXT
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required: series_type
// The desired price type in the time series. Four types are supported: close, open, high, low
// ❚ Optional: fastperiod
// Positive integers are accepted. By default, fastperiod=12.
// ❚ Optional: slowperiod
// Positive integers are accepted. By default, slowperiod=26.
// ❚ Optional: signalperiod
// Positive integers are accepted. By default, signalperiod=9.
// ❚ Optional: fastmatype
// Moving average type for the faster moving average. By default, fastmatype=0. Integers 0 - 8 are accepted with the following mappings. 0 = Simple Moving Average (SMA), 1 = Exponential Moving Average (EMA), 2 = Weighted Moving Average (WMA), 3 = Double Exponential Moving Average (DEMA), 4 = Triple Exponential Moving Average (TEMA), 5 = Triangular Moving Average (TRIMA), 6 = T3 Moving Average, 7 = Kaufman Adaptive Moving Average (KAMA), 8 = MESA Adaptive Moving Average (MAMA).
// ❚ Optional: slowmatype
// Moving average type for the slower moving average. By default, slowmatype=0. Integers 0 - 8 are accepted with the following mappings. 0 = Simple Moving Average (SMA), 1 = Exponential Moving Average (EMA), 2 = Weighted Moving Average (WMA), 3 = Double Exponential Moving Average (DEMA), 4 = Triple Exponential Moving Average (TEMA), 5 = Triangular Moving Average (TRIMA), 6 = T3 Moving Average, 7 = Kaufman Adaptive Moving Average (KAMA), 8 = MESA Adaptive Moving Average (MAMA).
// ❚ Optional: signalmatype
// Moving average type for the signal moving average. By default, signalmatype=0. Integers 0 - 8 are accepted with the following mappings. 0 = Simple Moving Average (SMA), 1 = Exponential Moving Average (EMA), 2 = Weighted Moving Average (WMA), 3 = Double Exponential Moving Average (DEMA), 4 = Triple Exponential Moving Average (TEMA), 5 = Triangular Moving Average (TRIMA), 6 = T3 Moving Average, 7 = Kaufman Adaptive Moving Average (KAMA), 8 = MESA Adaptive Moving Average (MAMA).
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Examples (click for JSON output)
// https://www.alphavantage.co/query?function=MACDEXT&symbol=MSFT&interval=15min&series_type=close&fastmatype=1&apikey=demo
// https://www.alphavantage.co/query?function=MACDEXT&symbol=MSFT&interval=daily&series_type=open&apikey=demo

// STOCH High Usage
// This API returns the stochastic oscillator (STOCH) values. See also: Investopedia article and mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=STOCH
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Optional: fastkperiod
// The time period of the fastk moving average. Positive integers are accepted. By default, fastkperiod=5.
// ❚ Optional: slowkperiod
// The time period of the slowk moving average. Positive integers are accepted. By default, slowkperiod=3.
// ❚ Optional: slowdperiod
// The time period of the slowd moving average. Positive integers are accepted. By default, slowdperiod=3.
// ❚ Optional: slowkmatype
// Moving average type for the slowk moving average. By default, slowkmatype=0. Integers 0 - 8 are accepted with the following mappings. 0 = Simple Moving Average (SMA), 1 = Exponential Moving Average (EMA), 2 = Weighted Moving Average (WMA), 3 = Double Exponential Moving Average (DEMA), 4 = Triple Exponential Moving Average (TEMA), 5 = Triangular Moving Average (TRIMA), 6 = T3 Moving Average, 7 = Kaufman Adaptive Moving Average (KAMA), 8 = MESA Adaptive Moving Average (MAMA).
// ❚ Optional: slowdmatype
// Moving average type for the slowd moving average. By default, slowdmatype=0. Integers 0 - 8 are accepted with the following mappings. 0 = Simple Moving Average (SMA), 1 = Exponential Moving Average (EMA), 2 = Weighted Moving Average (WMA), 3 = Double Exponential Moving Average (DEMA), 4 = Triple Exponential Moving Average (TEMA), 5 = Triangular Moving Average (TRIMA), 6 = T3 Moving Average, 7 = Kaufman Adaptive Moving Average (KAMA), 8 = MESA Adaptive Moving Average (MAMA).
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Examples (click for JSON output)
// https://www.alphavantage.co/query?function=STOCH&symbol=MSFT&interval=15min&slowkmatype=1&slowdmatype=1&apikey=demo
// https://www.alphavantage.co/query?function=STOCH&symbol=MSFT&interval=daily&apikey=demo

// STOCHF
// This API returns the stochastic fast (STOCHF) values. See also: Investopedia article and mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=STOCHF
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Optional: fastkperiod
// The time period of the fastk moving average. Positive integers are accepted. By default, fastkperiod=5.
// ❚ Optional: fastdperiod
// The time period of the fastd moving average. Positive integers are accepted. By default, fastdperiod=3.
// ❚ Optional: fastdmatype
// Moving average type for the fastd moving average. By default, fastdmatype=0. Integers 0 - 8 are accepted with the following mappings. 0 = Simple Moving Average (SMA), 1 = Exponential Moving Average (EMA), 2 = Weighted Moving Average (WMA), 3 = Double Exponential Moving Average (DEMA), 4 = Triple Exponential Moving Average (TEMA), 5 = Triangular Moving Average (TRIMA), 6 = T3 Moving Average, 7 = Kaufman Adaptive Moving Average (KAMA), 8 = MESA Adaptive Moving Average (MAMA).
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Examples (click for JSON output)
// https://www.alphavantage.co/query?function=STOCHF&symbol=MSFT&interval=15min&fastkperiod=6&fastdmatype=1&apikey=demo
// https://www.alphavantage.co/query?function=STOCHF&symbol=MSFT&interval=daily&apikey=demo

// RSI High Usage
// This API returns the relative strength index (RSI) values. See also: Investopedia article and mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=RSI
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required:time_period
// Number of data points used to calculate each RSI value. Positive integers are accepted (e.g., time_period=60, time_period=200)
// ❚ Required: series_type
// The desired price type in the time series. Four types are supported: close, open, high, low
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Examples (click for JSON output)
// https://www.alphavantage.co/query?function=RSI&symbol=MSFT&interval=15min&time_period=10&series_type=close&apikey=demo
// https://www.alphavantage.co/query?function=RSI&symbol=MSFT&interval=weekly&time_period=10&series_type=open&apikey=demo

// STOCHRSI
// This API returns the stochastic relative strength index (STOCHRSI) values. See also: mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=STOCHRSI
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required:time_period
// Number of data points used to calculate each STOCHRSI value. Positive integers are accepted (e.g., time_period=60, time_period=200)
// ❚ Required: series_type
// The desired price type in the time series. Four types are supported: close, open, high, low
// ❚ Optional: fastkperiod
// The time period of the fastk moving average. Positive integers are accepted. By default, fastkperiod=5.
// ❚ Optional: fastdperiod
// The time period of the fastd moving average. Positive integers are accepted. By default, fastdperiod=3.
// ❚ Optional: fastdmatype
// Moving average type for the fastd moving average. By default, fastdmatype=0. Integers 0 - 8 are accepted with the following mappings. 0 = Simple Moving Average (SMA), 1 = Exponential Moving Average (EMA), 2 = Weighted Moving Average (WMA), 3 = Double Exponential Moving Average (DEMA), 4 = Triple Exponential Moving Average (TEMA), 5 = Triangular Moving Average (TRIMA), 6 = T3 Moving Average, 7 = Kaufman Adaptive Moving Average (KAMA), 8 = MESA Adaptive Moving Average (MAMA).
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=STOCHRSI&symbol=MSFT&interval=15min&time_period=10&series_type=close&fastkperiod=6&fastdmatype=1&apikey=demo

// WILLR
// This API returns the Williams' %R (WILLR) values. See also: mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=WILLR
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required:time_period
// Number of data points used to calculate each WILLR value. Positive integers are accepted (e.g., time_period=60, time_period=200)
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=WILLR&symbol=MSFT&interval=15min&time_period=10&apikey=demo

// ADX High Usage
// This API returns the average directional movement index (ADX) values. See also: Investopedia article and mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=ADX
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required:time_period
// Number of data points used to calculate each ADX value. Positive integers are accepted (e.g., time_period=60, time_period=200)
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=ADX&symbol=MSFT&interval=15min&time_period=10&apikey=demo

// ADXR
// This API returns the average directional movement index rating (ADXR) values. See also: mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=ADXR
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required:time_period
// Number of data points used to calculate each ADXR value. Positive integers are accepted (e.g., time_period=60, time_period=200)
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=ADXR&symbol=MSFT&interval=15min&time_period=10&apikey=demo

// APO
// This API returns the absolute price oscillator (APO) values. See also: mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=APO
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required: series_type
// The desired price type in the time series. Four types are supported: close, open, high, low
// ❚ Optional: fastperiod
// Positive integers are accepted. By default, fastperiod=12.
// ❚ Optional: slowperiod
// Positive integers are accepted. By default, slowperiod=26.
// ❚ Optional: matype
// Moving average type. By default, matype=0. Integers 0 - 8 are accepted with the following mappings. 0 = Simple Moving Average (SMA), 1 = Exponential Moving Average (EMA), 2 = Weighted Moving Average (WMA), 3 = Double Exponential Moving Average (DEMA), 4 = Triple Exponential Moving Average (TEMA), 5 = Triangular Moving Average (TRIMA), 6 = T3 Moving Average, 7 = Kaufman Adaptive Moving Average (KAMA), 8 = MESA Adaptive Moving Average (MAMA).
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=APO&symbol=MSFT&interval=15min&series_type=close&fastperiod=10&matype=1&apikey=demo

// PPO
// This API returns the percentage price oscillator (PPO) values. See also: Investopedia article and mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=PPO
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required: series_type
// The desired price type in the time series. Four types are supported: close, open, high, low
// ❚ Optional: fastperiod
// Positive integers are accepted. By default, fastperiod=12.
// ❚ Optional: slowperiod
// Positive integers are accepted. By default, slowperiod=26.
// ❚ Optional: matype
// Moving average type. By default, matype=0. Integers 0 - 8 are accepted with the following mappings. 0 = Simple Moving Average (SMA), 1 = Exponential Moving Average (EMA), 2 = Weighted Moving Average (WMA), 3 = Double Exponential Moving Average (DEMA), 4 = Triple Exponential Moving Average (TEMA), 5 = Triangular Moving Average (TRIMA), 6 = T3 Moving Average, 7 = Kaufman Adaptive Moving Average (KAMA), 8 = MESA Adaptive Moving Average (MAMA).
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=PPO&symbol=MSFT&interval=15min&series_type=close&fastperiod=10&matype=1&apikey=demo

// MOM
// This API returns the momentum (MOM) values. See also: Investopedia article and mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=MOM
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required:time_period
// Number of data points used to calculate each MOM value. Positive integers are accepted (e.g., time_period=60, time_period=200)
// ❚ Required: series_type
// The desired price type in the time series. Four types are supported: close, open, high, low
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=MOM&symbol=MSFT&interval=15min&time_period=10&series_type=close&apikey=demo

// BOP
// This API returns the balance of power (BOP) values.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=BOP
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=BOP&symbol=MSFT&interval=15min&apikey=demo

// CCI High Usage
// This API returns the commodity channel index (CCI) values. See also: Investopedia article and mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=CCI
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required:time_period
// Number of data points used to calculate each CCI value. Positive integers are accepted (e.g., time_period=60, time_period=200)
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=CCI&symbol=MSFT&interval=daily&time_period=10&apikey=demo

// CMO
// This API returns the Chande momentum oscillator (CMO) values. See also: mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=CMO
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required:time_period
// Number of data points used to calculate each CMO value. Positive integers are accepted (e.g., time_period=60, time_period=200)
// ❚ Required: series_type
// The desired price type in the time series. Four types are supported: close, open, high, low
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=CMO&symbol=MSFT&interval=weekly&time_period=10&series_type=close&apikey=demo

// ROC
// This API returns the rate of change (ROC) values. See also: Investopedia article.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=ROC
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required:time_period
// Number of data points used to calculate each ROC value. Positive integers are accepted (e.g., time_period=60, time_period=200)
// ❚ Required: series_type
// The desired price type in the time series. Four types are supported: close, open, high, low
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=ROC&symbol=MSFT&interval=weekly&time_period=10&series_type=close&apikey=demo

// ROCR
// This API returns the rate of change ratio (ROCR) values. See also: Investopedia article.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=ROCR
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required:time_period
// Number of data points used to calculate each ROCR value. Positive integers are accepted (e.g., time_period=60, time_period=200)
// ❚ Required: series_type
// The desired price type in the time series. Four types are supported: close, open, high, low
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=ROCR&symbol=MSFT&interval=daily&time_period=10&series_type=close&apikey=demo

// AROON High Usage
// This API returns the Aroon (AROON) values. See also: Investopedia article and mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=AROON
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required:time_period
// Number of data points used to calculate each AROON value. Positive integers are accepted (e.g., time_period=60, time_period=200)
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=AROON&symbol=MSFT&interval=daily&time_period=14&apikey=demo

// AROONOSC
// This API returns the Aroon oscillator (AROONOSC) values. See also: mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=AROONOSC
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required:time_period
// Number of data points used to calculate each AROONOSC value. Positive integers are accepted (e.g., time_period=60, time_period=200)
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=AROONOSC&symbol=MSFT&interval=30min&time_period=10&apikey=demo

// MFI
// This API returns the money flow index (MFI) values. See also: Investopedia article and mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=MFI
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required:time_period
// Number of data points used to calculate each MFI value. Positive integers are accepted (e.g., time_period=60, time_period=200)
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=MFI&symbol=MSFT&interval=weekly&time_period=10&apikey=demo

// TRIX
// This API returns the 1-day rate of change of a triple smooth exponential moving average (TRIX) values. See also: Investopedia article and mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=TRIX
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required:time_period
// Number of data points used to calculate each TRIX value. Positive integers are accepted (e.g., time_period=60, time_period=200)
// ❚ Required: series_type
// The desired price type in the time series. Four types are supported: close, open, high, low
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=TRIX&symbol=MSFT&interval=daily&time_period=10&series_type=close&apikey=demo

// ULTOSC
// This API returns the ultimate oscillator (ULTOSC) values. See also: mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=ULTOSC
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Optional: timeperiod1
// The first time period for the indicator. Positive integers are accepted. By default, timeperiod1=7.
// ❚ Optional: timeperiod2
// The second time period for the indicator. Positive integers are accepted. By default, timeperiod2=14.
// ❚ Optional: timeperiod3
// The third time period for the indicator. Positive integers are accepted. By default, timeperiod3=28.
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Examples (click for JSON output)
// https://www.alphavantage.co/query?function=ULTOSC&symbol=MSFT&interval=30min&timeperiod1=8&apikey=demo
// https://www.alphavantage.co/query?function=ULTOSC&symbol=MSFT&interval=daily&apikey=demo

// DX
// This API returns the directional movement index (DX) values. See also: Investopedia article and mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=DX
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required:time_period
// Number of data points used to calculate each DX value. Positive integers are accepted (e.g., time_period=60, time_period=200)
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=DX&symbol=MSFT&interval=30min&time_period=10&apikey=demo

// MINUS_DI
// This API returns the minus directional indicator (MINUS_DI) values. See also: Investopedia article and mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=MINUS_DI
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required:time_period
// Number of data points used to calculate each MINUS_DI value. Positive integers are accepted (e.g., time_period=60, time_period=200)
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=MINUS_DI&symbol=MSFT&interval=weekly&time_period=10&apikey=demo

// PLUS_DI
// This API returns the plus directional indicator (PLUS_DI) values. See also: Investopedia article and mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=PLUS_DI
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required:time_period
// Number of data points used to calculate each PLUS_DI value. Positive integers are accepted (e.g., time_period=60, time_period=200)
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=PLUS_DI&symbol=MSFT&interval=30min&time_period=10&apikey=demo

// MINUS_DM
// This API returns the minus directional movement (MINUS_DM) values. See also: Investopedia article
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=MINUS_DM
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required:time_period
// Number of data points used to calculate each MINUS_DM value. Positive integers are accepted (e.g., time_period=60, time_period=200)
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=MINUS_DM&symbol=MSFT&interval=daily&time_period=10&apikey=demo

// PLUS_DM
// This API returns the plus directional movement (PLUS_DM) values. See also: Investopedia article
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=PLUS_DM
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required:time_period
// Number of data points used to calculate each PLUS_DM value. Positive integers are accepted (e.g., time_period=60, time_period=200)
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=PLUS_DM&symbol=MSFT&interval=daily&time_period=10&apikey=demo

// BBANDS High Usage
// This API returns the Bollinger bands (BBANDS) values. See also: Investopedia article and mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=BBANDS
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required:time_period
// Number of data points used to calculate each BBANDS value. Positive integers are accepted (e.g., time_period=60, time_period=200)
// ❚ Required: series_type
// The desired price type in the time series. Four types are supported: close, open, high, low
// ❚ Optional: nbdevup
// The standard deviation multiplier of the upper band. Positive integers are accepted. By default, nbdevup=2.
// ❚ Optional: nbdevdn
// The standard deviation multiplier of the lower band. Positive integers are accepted. By default, nbdevdn=2.
// ❚ Optional: matype
// Moving average type of the time series. By default, matype=0. Integers 0 - 8 are accepted with the following mappings. 0 = Simple Moving Average (SMA), 1 = Exponential Moving Average (EMA), 2 = Weighted Moving Average (WMA), 3 = Double Exponential Moving Average (DEMA), 4 = Triple Exponential Moving Average (TEMA), 5 = Triangular Moving Average (TRIMA), 6 = T3 Moving Average, 7 = Kaufman Adaptive Moving Average (KAMA), 8 = MESA Adaptive Moving Average (MAMA).
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=BBANDS&symbol=MSFT&interval=weekly&time_period=5&series_type=close&nbdevup=3&nbdevdn=3&apikey=demo

// MIDPOINT
// This API returns the midpoint (MIDPOINT) values. MIDPOINT = (highest value + lowest value)/2.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=MIDPOINT
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required:time_period
// Number of data points used to calculate each MIDPOINT value. Positive integers are accepted (e.g., time_period=60, time_period=200)
// ❚ Required: series_type
// The desired price type in the time series. Four types are supported: close, open, high, low
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=MIDPOINT&symbol=MSFT&interval=daily&time_period=10&series_type=close&apikey=demo

// MIDPRICE
// This API returns the midpoint price (MIDPRICE) values. MIDPRICE = (highest high + lowest low)/2.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=MIDPRICE
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required:time_period
// Number of data points used to calculate each MIDPRICE value. Positive integers are accepted (e.g., time_period=60, time_period=200)
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=MIDPRICE&symbol=MSFT&interval=30min&time_period=10&apikey=demo

// SAR
// This API returns the parabolic SAR (SAR) values. See also: Investopedia article and mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=SAR
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Optional: acceleration
// The acceleration factor. Positive floats are accepted. By default, acceleration=0.01.
// ❚ Optional: maximum
// The acceleration factor maximum value. Positive floats are accepted. By default, acceleration=0.20.
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=SAR&symbol=MSFT&interval=weekly&acceleration=0.05&maximum=0.25&apikey=demo

// TRANGE
// This API returns the true range (TRANGE) values. See also: mathematical reference
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=TRANGE
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=TRANGE&symbol=MSFT&interval=daily&apikey=demo

// ATR
// This API returns the average true range (ATR) values. See also: Investopedia article and mathematical reference
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=ATR
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required:time_period
// Number of data points used to calculate each ATR value. Positive integers are accepted (e.g., time_period=60, time_period=200)
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=ATR&symbol=MSFT&interval=30min&time_period=14&apikey=demo

// NATR
// This API returns the normalized average true range (NATR) values.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=NATR
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required:time_period
// Number of data points used to calculate each NATR value. Positive integers are accepted (e.g., time_period=60, time_period=200)
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=NATR&symbol=MSFT&interval=weekly&time_period=14&apikey=demo

// AD High Usage
// This API returns the Chaikin A/D line (AD) values. See also: Investopedia article and mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=AD
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=AD&symbol=MSFT&interval=daily&apikey=demo

// ADOSC
// This API returns the Chaikin A/D oscillator (ADOSC) values. See also: Investopedia article and mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=ADOSC
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Optional: fastperiod
// The time period of the fast EMA. Positive integers are accepted. By default, fastperiod=3.
// ❚ Optional: slowperiod
// the time period of the slow EMA. Positive integers are accepted. By default, slowperiod=10.
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example(click for JSON output)
// https://www.alphavantage.co/query?function=ADOSC&symbol=MSFT&interval=30min&fastperiod=5&apikey=demo

// OBV High Usage
// This API returns the on balance volume (OBV) values. See also: Investopedia article and mathematical reference.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=OBV
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=OBV&symbol=MSFT&interval=weekly&apikey=demo

// HT_TRENDLINE
// This API returns the Hilbert transform, instantaneous trendline (HT_TRENDLINE) values.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=HT_TRENDLINE
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required: series_type
// The desired price type in the time series. Four types are supported: close, open, high, low
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=HT_TRENDLINE&symbol=MSFT&interval=daily&series_type=close&apikey=demo

// HT_SINE
// This API returns the Hilbert transform, sine wave (HT_SINE) values.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=HT_SINE
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required: series_type
// The desired price type in the time series. Four types are supported: close, open, high, low
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=HT_SINE&symbol=MSFT&interval=30min&series_type=close&apikey=demo

// HT_TRENDMODE
// This API returns the Hilbert transform, trend vs cycle mode (HT_TRENDMODE) values.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=HT_TRENDMODE
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required: series_type
// The desired price type in the time series. Four types are supported: close, open, high, low
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=HT_TRENDMODE&symbol=MSFT&interval=weekly&series_type=close&apikey=demo

// HT_DCPERIOD
// This API returns the Hilbert transform, dominant cycle period (HT_DCPERIOD) values.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=HT_DCPERIOD
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required: series_type
// The desired price type in the time series. Four types are supported: close, open, high, low
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=HT_DCPERIOD&symbol=MSFT&interval=daily&series_type=close&apikey=demo

// HT_DCPHASE
// This API returns the Hilbert transform, dominant cycle phase (HT_DCPHASE) values.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=HT_DCPHASE
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required: series_type
// The desired price type in the time series. Four types are supported: close, open, high, low
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=HT_DCPHASE&symbol=MSFT&interval=30min&series_type=close&apikey=demo

// HT_PHASOR
// This API returns the Hilbert transform, phasor components (HT_PHASOR) values.
// API Parameters
// ❚ Required: function
// The technical indicator of your choice. In this case, function=HT_PHASOR
// ❚ Required: symbol
// The name of the equity of your choice. For example: symbol=MSFT
// ❚ Required: interval
// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
// ❚ Required: series_type
// The desired price type in the time series. Four types are supported: close, open, high, low
// ❚ Required: apikey
// Your API key. Claim your free API key here.
// Example (click for JSON output)
// https://www.alphavantage.co/query?function=HT_PHASOR&symbol=MSFT&interval=weekly&series_type=close&apikey=demo
