function a() {
  console.log("2 - inside a");
}

function someFunction(n) {
  console.log(`waited ${n} sec`);
}

function waitNsec(n) {
  return setTimeout(() => someFunction(n), n * 1000);
}

const promiseComplexWithTimeout = new Promise((resolve, reject) => {
  promiseResultWaitTime = Math.random() * 4000;
  if (promiseResultWaitTime > 500) {
    setTimeout(
      () => resolve(`success after ${promiseResultWaitTime} sec`),
      promiseResultWaitTime
    );
  } else {
    setTimeout(
      () => reject(`failure after ${promiseResultWaitTime} sec`),
      promiseResultWaitTime
    );
  }
});

const promiseSimpleResolved = new Promise(resolve => {
  resolve("3 - simply resolved");
});

function Basri1() {
  console.log(`Basri1 function`);
}

// setTimeout(() => Basri1(), 2000);

// waitNsec(2);
setTimeout(() => console.log("4 - direct setTimeout for 0sec"), 0);
// setTimeout(()=>console.log('direct setTimeout for 0sec - 2'),0)
// promiseSimpleResolved.then(res=>console.log(res))
// setTimeout(()=>console.log('direct setTimeout for 0sec - 3'),1)
Promise.resolve(console.log("1 - how nice!"));
a();
// Promise.resolve(console.log('how nice2!'))
// a();
Promise.all([promiseSimpleResolved,promiseComplexWithTimeout]).then(res=>console.log(res)).catch(err=>console.log(err))
// promise1
//   .then(res => console.log(`Good: ${res}`))
//   .catch(err => console.log(`Bad: ${err}`));
//JOB QUEUE (THE NEW ONE FOR THE Promise)
//CALLBNACK QUEUE (THE USUAL ONE±!)

// JS Engine: Call Stack + Memory Heap
// JS Runtime: JS Engine + WebAPI(setTimeout, DOM, AJAX/fetch) + Event Loop + JobQueue(Promise) + Callback Queue
