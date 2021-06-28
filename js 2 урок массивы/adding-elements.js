let arr = [];
/*Создай переменную с пустым массивом. После этого с помощью 
метода .push() добавь в него любой элемент*/
arr.push('sali');
console.log(arr);


let off = []
/*Создай новую переменную с пустым массивом. Добавь в него 
три новых текстовых элемента с помощью метода .push() */
off.push("sali", "intocod" , "proger");
console.log(off)

let pro = [true , false]
/*Создай новую переменную с массивом из двух значений: true и false. 
Добавь в начало этого массива новый элемент со значением null */
pro.unshift(null);
console.log(pro)

let massiv = [ [] , [] ]
/*Создай массив из двух вложенных пустых массивов. Во второй вложенный массив 
с помощью .push() добавь три значения true. 
В итоге массив должен стать таким: [[], [true, true, true]] */
massiv[1].push( true,true,true);
console.log(massiv);

let ht = ['html', 'css']
/*Создай переменную со следующим массивом: ["html", "css"]. В начало этого массива 
добавь значение "git", а в конец "javascript". Выведи результат в консоль. */
ht.unshift('git');
ht.push('javascript');
console.log(ht);


let ht = ['html', 'css']
/*В конец предыдущего массива добавь строку "figma" 
не используя метод .push() (вспоминай про способ с []).   */
ht.unshift('git');
ht.push('javascript');
ht[ht.length] = 'figma';
console.log(ht);

//ЗАДАЧА 2.2
let stack = ["html", "css", "bem", "js"];

// A) добавь в конец массива значение "react" (используй .push())
stack.push(react);

// B) выведи весь массив в консоль
console.log(stack);

// C) добавь в конец массива значение "redux" (используй способ с [])
stack[stack.length] = 'redux'

// D) выведи весь массив в консоль
console.log(stack);

// E) добавь в начало массива значение "git"
stack.unshift('git')

// F) выведи весь массив в консоль
console.log(stack);

/* 
 *  G) выведи в консоль строку "сначала мы изучим git, а в конце изучим redux". 
 *  Слова "git" и "redux" должны браться из массива, а не печататься от руки.
 * (вспоминай про кавычки ``)
 */
console.log(`сначала мы изучим ${stack[0]},а в конце изучим ${stack[stack.length-1]}` )


// H) добавь в конец массива сразу два элемента: "mysql" и "mongodb".

// I) выведи в консоль длину массива

