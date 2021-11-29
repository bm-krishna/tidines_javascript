// function waitingForContext(status) {
//   console.log(status)
//   console.log(this.status);
//   console.log(this)
// }
// waitingForContext("i am waiting for context. Please use call Method.")
// const obj = {
//   status: "I am context passing using by Call"
// };
// waitingForContext.call(obj, "I am passing thorugh the call method")

/*
 * Adds up all of the arguments and returns the sum.
 */
function sum() {
  const sumReduce = Array.prototype.reduce.call(arguments, function (x, y) {
    return x + y;
  }, 10);
  console.log("sumReduce", Array.prototype.reduce);
  return sumReduce;
}

console.log(sum(1, 2, 3));

const normal = [1, 2, 3].reduce(function (x, y) {
  return x + y;
});

console.log('normal', normal)