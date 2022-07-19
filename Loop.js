// 1.) For the given JSON iterate over all for loops (for, for in, for of, forEach)


// For Loop

let req = new XMLHttpRequest();
req.open("GET", "https://62ab7590a62365888bdcdbee.mockapi.io/facebook");

req.onload = function () {
    let data = JSON.parse(this.response);
    for (i = 0; i < data.length; i++) {
        console.log(data[i].id);
    }
}
req.send();


//For-of Loop

let req1 = new XMLHttpRequest();
req1.open("GET", "https://62ab7590a62365888bdcdbee.mockapi.io/facebook")

req1.onload = function () {
    let data = JSON.parse(this.response);
    for (let api of data) {
        console.log(api.name)
    }
}
req1.send();

//for-In Loop


req2 = new XMLHttpRequest();
req2.open("GET", "https://62ab7590a62365888bdcdbee.mockapi.io/facebook")

req2.onload = function () {
    let data = JSON.parse(this.response);
    for (let api in data) {
        console.log(data[api].avatar);
    }
}
req2.send();



// ForEach Loop

let request = new XMLHttpRequest();
request.open("GET", "https://62ab7590a62365888bdcdbee.mockapi.io/facebook");

request.onload = function () {
    var data = JSON.parse(this.response);
    data.forEach((element) => {
        console.log(element.createdAt);
    })
}
request.send();




