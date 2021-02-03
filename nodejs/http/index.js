/* 
    In a Node.js app, you can communicate with web APIs by making HTTP requests.
    Node.js comes bundled with an `http` and an `https` module.
    These modules have functions to create an HTTP server so that a Node.js program can respond to HTTP requests. 
    They can also make HTTP requests to other servers. 

    To interact with `api` generally we can use `GET` request.
    By using this request you can retrive data from server.
*/

/*

http module:
-------------
    The https module has two functions to make GET requests.
    1. get() 
        the get() function, which can only make GET requests.
    2. request() 
        the request() function, along with GET request, it makes other types of requests.

*/

/*
 1. create request by using get()
 ------------------------------------
               // method signature
               
               https.get(URL_String, Callback_Function) {
                        Action
                }
       The first argument is a string with the endpoint you’re making the request to. 
       The second argument is a callback function, which you use to handle the response.
   
*/


const http = require('http');
// url to fetch all villages
const url = "http://www.postalpincode.in/api/pincode/515741"
// As mentioned in the function signature, the get() function takes two parameters. 
// The first is the API URL you are making the request to in string format and the second is a callback to handle the HTTP response. 
// v1 
http.get(url, (res) => {
    if (res.statusCode !== 200) {
        console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
        res.resume();
        return;
    }
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('close', () => {
        console.log('Retrieved all data');
        // console.log(JSON.parse(data));
    });
});
// call back for handle resp after sending request by using get().
const responseHandler = async res => {
    if (res.statusCode !== 200) {
        console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
        res.resume();
        return;
    }
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('close', () => {
        console.log('Retrieved all data');
        console.log(JSON.parse(data));
    });
}

http.get(url, responseHandler);



