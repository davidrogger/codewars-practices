function walkSimulation(directions: string[]) {
  const currentPosition = {
    x: 0,
    y: 0,
  };

  directions.forEach((coordinate: string): void => {
    const axis = coordinate === 'n' || coordinate === 's' ? 'y' : 'x';
    const moviment = coordinate === 'n' || coordinate === 'e' ? 'positive' : 'negative';

    if (moviment === 'positive') {
      currentPosition[axis] += 1;
    } else {
      currentPosition[axis] -= 1;
    }
  });

  return currentPosition;
}

function isValidRangeWalk(directions: string[]) {
  const validRange = 10;
  return directions.length === validRange;
}

function isValidPosition(currentPosition: { x: number, y: number }): boolean {
  const validPosition = 0;
  return currentPosition.x === validPosition && currentPosition.y === validPosition;
}

function isValidWalk(directions: string[]): boolean {
  if (isValidRangeWalk(directions)) {
    const currentPosition = walkSimulation(directions);

    return isValidPosition(currentPosition);
  }

  return false;
}

export default isValidWalk;
