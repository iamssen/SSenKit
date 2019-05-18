export function getText(...values: (string | {default: unknown} | undefined)[]): string | undefined {
  for (const value of values) {
    if (typeof value === 'string') {
      return value;
    } else if (typeof value === 'object' && value.default && typeof value.default === 'string') {
      return value.default;
    }
  }
  
  return undefined;
}