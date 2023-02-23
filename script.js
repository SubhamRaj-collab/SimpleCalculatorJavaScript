
let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let ans = document.getElementById("sum-el")

function doSum()
{
    console.log("Sum Clicked")
    // console.log(num2)
    let numSum = num1+num2
    ans.textContent = "Sum: "+numSum
}

function doSubtract()
{
    var numSubtract = num1-num2
    ans.innerText = "Sum: "+numSubtract
}

function doMultiply()
{
    var numMult = num1*num2
    ans.innerText = "Sum: "+numMult
}

function doDivide()
{
    if(num2 == 0)
    {
        ans.textContent = "No possible Solution"
    }
    var numDiv = num1/num2
    ans.textContent = "Sum: "+numDiv
}