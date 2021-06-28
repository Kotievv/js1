/*JavaScript
Язык программирования
Мультипарадигменный язык программирования. Поддерживает объектно-ориентированный,
императивный и функциональный стили. Является реализацией спецификации ECMAScript.
*/

// string , number, boolean.

let emptyList = ();
//Создай переменную с именем emptyList, в которой будет пустой массив.


let dataTypes = [string, Number, boolean];
//Создай переменную с именем dataTypes, в которой будет массив с названиями типов данных.



let dataTypesExample = [33, true, "sali"]
//Создай переменную с именем dataTypesExample, в которой будет массив со значениями из разных типов данных.


let booleanDataType = [ true , false];
//Создай переменную с именем booleanDataType, в которой будет массив с двумя значениями логического типа.



let collection = (,{} {}, {});
//Создай переменную с именем collection, в которой будет три пустых объекта.



const application = { 
     name: "WhatsApp", 
    location: USA, 
     developer: ["кевин", "майк"],  
    realisedYear: 2009,  
    functions: "stores, "posts"
    }
//Создай переменную с именем application и опиши в нём приложение, в котором проводишь больше всего времени.
// Постарайся использовать как можно больше типов данных, вложенный объект и массив (ниже есть пример).





//Приведи пример использования условных выражений (if-else).
if(dataTypes[0].length < dataTypesExample[0].length){
    return "слишком длинный текст"
}else {
    return application.name
}





function startGame(playersCount){
    return `игра началась. Кол-во игрков:${playersCount.}`
}
/// Создай функцию с именем startGame, которая принимает параметр с именем playersCount и
// возвращает текст "Игра началась. Количество игроков: playersCount".