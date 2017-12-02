export abstract class AlphaVantage {
  public apiKey = "NRY8F1MF97WHB8ED";
  public apiBase = "https://www.alphavantage.co/query?";
  public apiFunction = "INVALID";

  public getUrl(symbol = "string", ...options) {
    const additional = this.additionalQuery(...options);
    return (
      `${this.apiBase}function=${this.apiFunction}&symbol=${symbol}&`
      + `${additional ? additional + "&" : ""}apikey=${this.apiKey}`
    );
  }

  public additionalQuery() {
    return "";
  }
}
