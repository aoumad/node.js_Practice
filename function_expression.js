// normal function statement
function sayHi()
{
    console.log("Hi");
}
sayHi();

function callFunction(fun)
{
    fun();
}

// function expression
var sayBye = function()
{
    console.log("Bye");
};
// sayBye();
callFunction(sayBye);