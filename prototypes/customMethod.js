Array.prototype.asyncForEach = async function (callback) {
  for (let index = 0; index < this.length; index++) {
    try {
      await callback(this[index], index);
    } catch (error) {
      console.log(error, "error");
      done();
    }
    result.push(resp);
  }
};
Array.prototype.check = function (callback) {
  console.log("i am check", this);
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    callback(element, index);
  }
};

const iamAsyncCallBack = async (item, index) => {
  const rsp = await fetch(item)
    .then((response) => response.json())
    .then((json) => console.log(json));
  console.log("rsp", rsp);
};
[
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
].asyncForEach(iamAsyncCallBack);
