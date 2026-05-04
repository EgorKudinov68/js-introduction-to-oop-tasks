export default class Time {
  // BEGIN
  static fromString(timeString) {
    const [hours, minutes] = timeString.split(':');
    return new Time(parseInt(hours, 10), parseInt(minutes, 10));
  }
  // END

  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}
