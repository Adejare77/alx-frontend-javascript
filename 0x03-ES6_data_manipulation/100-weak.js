export const weakMap = new WeakMap();

export function queryAPI(endPoint) {
  const value = weakMap.get(endPoint);
  if (value >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endPoint, value ? value + 1 : 1);
}
