function waitingForContext(status) {
  console.log(status);
  console.log(this.status);
}
waitingForContext("i am waiting for context. Please use apply Method.");
const obj = {
  status: "I am context passing using by apply",
};
waitingForContext.apply(obj, [
  "I am passing thorugh the apply method as a array element",
]);

/*
 * Adds up all of the arguments and returns the sum.
 */
function sum() {
  const sumReduce = Array.prototype.reduce.apply(arguments, [
    function (x, y) {
      return x + y;
    },
    10,
  ]);
  console.log("sumReduce", Array.prototype.reduce);
  return sumReduce;
}


console.log(sum(1,2,3,4));