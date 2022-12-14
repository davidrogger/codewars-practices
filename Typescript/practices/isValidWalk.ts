function isValidWalk(directions: string[]): boolean {
  const positions = {
    x: 0,
    y: 0,
  };

  directions.forEach((coordinate: string): void => {
    const axis = coordinate === 'n' || coordinate === 's' ? 'y' : 'x';
    const moviment = coordinate === 'n' || coordinate === 'e' ? 'positive' : 'negative';
    if (moviment === 'positive') {
      positions[axis] += 1;
    } else {
      positions[axis] -= 1;
    }
  });

  return (positions.x + positions.y) === 0;
}

export default isValidWalk;
