class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;

  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      }, 1000);
    if(printTimeCallback){
      setInterval(() => {
        printTimeCallback()
      }, 1000)
  }
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    let newNumString = value.toString().slice(0,2);  
    if (newNumString.length < 2){
       return `0${newNumString}`;
    } else {
       return newNumString.toString()
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();
    return `${this.computeTwoDigitNumber(minutes)}:${this.computeTwoDigitNumber(seconds)}`
  }
  
}
