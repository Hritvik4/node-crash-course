// console.log(global);
// global.setTimeout(() => {
//     console.log("in the timeout");
// }, 3000);

setTimeout(() => {
  console.log("in the timeout");
  clearInterval(int);
}, 6001);

const int = setInterval(() => {
  console.log("in the interval");
}, 2000);
