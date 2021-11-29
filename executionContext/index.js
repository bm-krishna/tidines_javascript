//Execution context is explaing how the javascript engin will execute the program.

// it covered scopes(context) such as like global, local, lexical scope.

/**
 * @var country is a globel variable.
 * js engin creates country variable with `undefined`. after it assing `India` to country.
 */
let country = "India"; // globel scope

/**
 *
 * @function setMyState is a variable and type is `function` type. Js will create variable `setState` and will assign function defination to it.
 * when the function call is done then js will create new execution context on the top of `globel execution`.
 * in new local execution context first will create @param me variable and its value "Ap" is assigend to it.
 * @var iAmLocal decalared and values are assined to it. 
 * but here the string concatination is happeing.
 * the values of @var me and @var country will look into this local context. if it won't find it will search for its calling context( in this case gobel scope. if you call this function in another function then that local scope will chek.)
 * @var me is found in this scope it take that value. 
 * @var country is not belongs to this scope so it will look into its calling context.
 * after concatination is done it will assign that value to @var iAmLocal.
 * execution context will go to next statement. checking for @var iAmLocal int lcoal context found and return that value.
 * @returns iAmLocal
 * once return done the Local execution context is destroyed and it removes all local varaibles. 
 * its coming to calling context(in this case globel scope). it will goto cosnole statment.
 */
function setMyState(me) {
  console.log('myDetails', myDetails);
  let iAmLocal =
    "i am local guy belongs. my state is " + me + "and my country is" + country;
  return iAmLocal;
}
/**
 * check for setMyState in this context if it found it check for type of its value.
 */
console.log(typeof setMyState);
/**
 * @var myDetails is a globel variable and it storing return value of setMyState function'.
 * when the function calling is heppens the new execution contect is created also known as a local execution context.
 */

let myDetails = setMyState("AP");

console.log(myDetails);


const getMe = data => {
  return data;
}
const chekMe = getMe();
console.log("checkMe")