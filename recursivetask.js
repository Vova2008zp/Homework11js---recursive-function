"use strict";

//Создать рекурсивную функцию вычисления факториала числа.Факториал - произведение всех натуральных чисел от 1 до x.
// 5! = 1 * 2 * 3 * 4 * 5 = 120

function factorial(num) {
  if (typeof num !== "number" || isNaN(num)) {
    throw new TypeError("num must be  a positive integer");
  }

  if (!Number.isInteger(num) || num < 0) {
    throw new RangeError('num must be  a positive integer');
  }

  if (num > 0) {
    return num * factorial(num - 1);
  }

  return 1;
}
