let arr = ["javascript", "html", "css", "python", "go", "c+", "java", "kotlin", 
"php", "pascal"]
let accumulator = [];
for(let i = 0; i<arr.length; i++){
if(arr[i].length>3){
    accumulator.push(arr[i])
}
}
console.log(accumulator)


/* Создай переменную accumulator и собери в ней только те названия, которые длиннее трёх символов.
 (accumulator будет массивом, вспомни про .push()) */