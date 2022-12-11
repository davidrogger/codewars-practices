class Multiplies {
  static isNegative(number: number): boolean {
    return number < 0;
  }

  static sumMultiple(number: number): number {
    let total = 0;
    let numbers = number - 1;

    while (numbers > 0) {
      if (numbers % 5 === 0 || numbers % 3 === 0) {
        total += numbers;
      }

      numbers -= 1;
    }

    return total;
  }

  static solution(number: number) {
    if (Multiplies.isNegative(number)) {
      return 0;
    }

    return Multiplies.sumMultiple(number);
  }
}

export default Multiplies;
