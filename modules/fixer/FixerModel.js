export class FixerModel {
  constructor(success, timestamp, base, date, rates) {
    this.success = success;
    this.timestamp = timestamp;
    this.base = base;
    this.date = date;
    this.rates = rates;
  }
}