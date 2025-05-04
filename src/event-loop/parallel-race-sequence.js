const promisify = (item, delay) =>
  new Promise((resolve) =>
    setTimeout(() =>
      resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `prallel is done: ${output1} ${output2} ${output3}`
}

async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`;
}

async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequence is done ${output1} ${output2} ${output3}`
}

/**
 * And remember, because these are all asynchronous.
 * Sequences taking a long time and then finally, sequence is done.
 * Was that what you expected?
 * Race is, well, whatever is the fastest, just return parallel is I want you all to do all the promises, 
 * at the same time and sequences has to wait for each one and do it sequentially.
 * 
 */
sequence().then(console.log)
parallel().then(console.log)
race().then(console.log)