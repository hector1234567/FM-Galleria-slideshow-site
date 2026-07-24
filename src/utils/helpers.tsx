export function minIndex(arr: number[]): number {
  let idx = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[idx]) idx = i;
  }
  return idx;
}

export function shuffle(array: unknown[]) {
  const arr = [...array]; // copia, para no mutar el original
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function getImageHeight(src: string) {
  return new Promise<number>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img.height);
    img.onerror = () => reject(new Error("No se pudo decodificar la imagen"));
    img.src = src;
  });
}
