/*
 * @Descripttion: 
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2021-06-09 23:24:49
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2021-06-09 23:31:54
 */

// 斐波那契数列f(n) = f(n-1) + f(n-2)
// f(0) = 0
// f(1) = 1
// 最小数列f(2) = f(1) + f(0)
// 进行转换f(n+1) = f(n) + f(n-1)
var fib = function (n) {
    let a = 0; // f(n -1)
    let b = 1; // f(n)
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum = (a + b) % 1000000007; // f(n+1)
        a = b; // a = f(n)
        b = sum; // b = f(n+1)
    }
    return a;
}