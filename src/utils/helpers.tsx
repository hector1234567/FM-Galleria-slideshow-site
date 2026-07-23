export function minIndex(arr: number[]): number {
  let idx = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[idx]) idx = i;
  }
  return idx;
}
