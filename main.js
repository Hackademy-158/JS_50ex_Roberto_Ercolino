//1
//calcolare l'area di un cerchio di raggio R = 10;
//A = piGreco * R**2;

function CalculateCircleArea(rayLength)
{
    return A = Math.PI * (rayLength**2);
}

let CircleArea = CalculateCircleArea(20);
console.log(CircleArea);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//2
//calcolare l'ipotenusa di un triangolo rettangolo con cateti 3 e 4

function CalculateIpotenusa(c1 , c2)
{
    return i = Math.sqrt(c1**2 + c2**2);
}

let Ipotenusa = CalculateIpotenusa(3, 4);
console.log(Ipotenusa);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3
function GetRandomNumber(num1, num2)
{
    return randNumber = Math.floor(Math.random()* (num1 - num2) + 1);
}

let randomNumber = GetRandomNumber(10, 0);
console.log(randomNumber);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//4
function ReturnInitial(name)
{
    let [firstname, surname] = name.split(" ");

    let firstnameArr = firstname.split("");
    let secondArr = surname.split("");

    let firstChar = firstnameArr[0];
    let secondChar = secondArr[0];

    return {firstChar, secondChar}
}

let initial = ReturnInitial("Mario Draghi");
console.log(initial);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// lato 1 = a + b > c
// lato 2 = a + c > b
// lato 3 = b + c > a
//funzione con 3 numeri che ritorna true se sono lati di un triangolo altrimenti false
//5

function ReturnTriangleBool(a, b, c)
{
    if(a + b > c && a + c > b && b + c > a)
        {
            return true;
        }
        else
        {
            return false;
        }
}

let bool = ReturnTriangleBool(3 ,4, 5);
console.log(bool);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//6
// se numero e pari dividerlo per 2
// se il numero e dispari moltiplicarlo per 3 e aggiungere 1
// l'algoritmo deve terminare sempre a 1

function CollatzAlg(arrLen)
{
    let initialVal = arrLen;
    let arr = [];
    arr.push(initialVal);

    for (let index = 0; index < arrLen; index++) 
    {
        if(arr[index] != 1)
            {
                if(arr[index] % 2 == 0)
                    {
                        arr.push(arr[index] / 2);
                    }
                else
                {
                    arr.push((arr[index] * 3) + 1);
                }
            }
            else
            {
                return arr;
            }
    }

    return arr;
}

let newRandNumber = GetRandomNumber(100, 1);
console.log(newRandNumber);
let newArr = CollatzAlg(newRandNumber);
// console.log(newArr);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//7
// F(n)=F(n−1)+F(n−2)

function Fibonacci(n)
{
    if(n <= 1) return n;
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}

let fiboArr = [];

for (let index = 0; index < 20; index++) 
{
    fiboArr.push(Fibonacci(1 + index));
}

console.log(fiboArr);








