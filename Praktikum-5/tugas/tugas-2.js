function fn_O1(n) {
  return n + 1;
}
function fn_On(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}
function fn_OnLogn(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < Math.log2(n); j++) {
      sum++;
    }
  }
  return sum;
}
function fn_On2(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      sum++;
    }
  }
  return sum;
}
function benchmarkSemua(ukuranData) {
  ukuranData.forEach(size => {
    const data = Array.from({length: size}, (_, i) => i);
    console.log(`Ukuran data: ${size}`);
    console.log(`fn_O1: ${measureExecutionTime(() => fn_O1(size))} ms`);
    console.log(`fn_On: ${measureExecutionTime(() => fn_On(size))} ms`);
    console.log(`fn_OnLogn: ${measureExecutionTime(() => fn_OnLogn(size))} ms`);
    console.log(`fn_On2: ${measureExecutionTime(() => fn_On2(size))} ms`);
    console.log('-----------------------');
  });
}
function measureExecutionTime(func) {
  const startTime = performance.now();
  func();
  const endTime = performance.now();
  return endTime - startTime;
}

benchmarkSemua([100, 500, 1000, 5000, 10000]);