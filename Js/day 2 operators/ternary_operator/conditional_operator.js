// let a=+prompt("enter the 1st number")
// let b=+prompt("enter the 2nd number")
// let c=+prompt("enter the 3rd number")
// const result=(a>b && a>c)?"the biggest no. is a":(b>c && b>a)?" the biggest no. is b": "the biggest no. is c";
// console.log(result)

//  let n=+prompt("enter the no. ")
// const result=(n%8==0)?(n%10==8)?"it is divisible and end by 8":"it is not end by 8":"n is not divisible by 8";
// console.log(result);

let a=+prompt("enter the age` ")
const result=(a>=18 && a<=59)?"eligible to vote":(a>=60)?"senior citizen":(a>=6 && a<=17)?"children or school student":"kid";
console.log(result);