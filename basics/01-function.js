function sayMyName(){
    console.log("b");
    console.log("h");
    console.log("a");
    console.log("rat");
}

sayMyName();

function addTwoNum(num1, num2){
    return num1 + num2;
}

const result = addTwoNum(5, 6);
console.log(result);

// function loginUser(username){
//     console.log(`${username} just has loggedin`);
//     return;
// }
//function loginUser("hitesh");

// function loginUser(username){
//     return `${username} just has loggedin2`
// }
// console.log(loginUser("ramesh"));

function loginUser(username){
    if(!username){
        console.log("please enter the Username")
        return;
    }
    console.log(loginUser());
}