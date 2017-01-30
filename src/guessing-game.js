class GuessingGame {
    constructor(min, max, guessNumber) {
      this.min = min;
      this.max = max;
      this.guessNumber = guessNumber;
    }

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }

    guess() {
      this.guessNumber = Math.ceil((this.min + this.max) / 2);
      return this.guessNumber;
    }

    lower() {
      this.max = this.guessNumber;
    }

    greater() {
      this.min = this.guessNumber;
    }
}

module.exports = GuessingGame;
