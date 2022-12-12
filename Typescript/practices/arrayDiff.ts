function arrayDiff(a: number[], b: number[]): number[] {
  return a.filter((number: number) => !(b.includes(number)));
}

export default arrayDiff;
