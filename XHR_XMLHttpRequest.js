console.log("test");

// 1. Create a new "XMLHttpRequest" object
// This line creates a new instance of the "XMLHttpRequest" object wich will be used to send the API request and handle the response
var xhr = new XMLHttpRequest();

// 2. Define the request method and URL
// The URL corresponds to the endpoint of the JSONPlaceholder API to retreive data from

var method = "GET";
var url = "https://jsonplaceholder.typicode.com/posts";

// 3. Configure the request
// The "open()" method is calle on the "XMLHttpRequest" object to configure the request. It takes
// three arguments: the HTTP method, the URL, and a boolean value indicating wheter the request
// should be asyncronous("true" in this case)
xhr.open(method, url, true);

// 4. Set the request headers (if needed)
// This line sets the request header to specify the content type of the request.
// In this example, is set to "application/json".
// Depending on the API, may be needed to set additional headers or customize this part accordingly
xhr.setRequestHeader("Content-Type", "application/json");

// 5. Define a callback function to handle the response:
/*
    The "onload" property is set to a function that will be called when the API request is completed.
    inside this function, the "status" property of the "XMLHttpRequest" is checked to determine
    if the request was successful (status code 200). If it was, the respose is parse using "JSON.parse()"
    to convert it into a JavaScript object. In this example, the response is logged to the console.
    If the request fails, an error is logged along with the corresponding status code
*/
xhr.onload = function () {
  if (xhr.status === 200) {
    var response = JSON.parse(xhr.responseText);
    console.log(response);
  } else {
    console.error("Request failed. Status code: " + xhr.status);
  }
};

// 6. Handle network errors
/*
    The "onerror" property is set to a function that will be called if a network error occurs during the API
    request. In this case, an error is logged to the console
*/
xhr.onerror = function () {
  console.log("Network error occurred");
};

// 7. Send the request
/*
    The "send()" method is called on the "XMLHttpRequest" object to send the API request.
    This initiates the request and the response will be handled by the "onload" callback function.
    
*/
xhr.send();
