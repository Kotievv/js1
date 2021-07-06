let arr = [-1, -4, -5, 5, 6, 7, 8, 9, 10,11]
let accumulator = 0;
for (let i = 0; i<arr.length; i++){
    if(arr[i] >=0) {
      accumulator+=arr[i];
    }     
   
 console.log(accumulator)
}

/*
В файле accumulator-2.js создай массив с десятью элементами числового типа. Три числа должны быть меньше нуля.

Создайпеременную accumulator и собери в ней сумму всех положительных элементов массива. */