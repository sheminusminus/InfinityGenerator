function* getInfinityGenerator() {
  let index = -1;

  while (true) {
    yield index += 1;
  }
}

const infinityGen = getInfinityGenerator();

console.log(infinityGen.next()); // { value: 0, done: false }
console.log(infinityGen.next()); // { value: 1, done: false }
// ... ∞
