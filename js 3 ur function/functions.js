function removeUser(){
}
  alert removeUser() //вызываю функцию
//удалить пользователя


function createPost(){
}
   alert createPost () //вызываю функцию  

//создать сообщение


function addItem(){
}
alert addItem ()  //вызываю функцию 

//Добавить элемент

function readFile(){
}
alert readFile() //вызываю функцию 

//прочитать файл

function getElements(){
}
alert getElements() //вызываю функцию 

//получить элементы


function createParentElement(){
}
alert createParentElement() //вызываю функцию 

//создать родительский элемент

function startGame(){ 

}
alert startGame() //вызываю функцию 
//начать игру

function sendMessage(){

}
alert sendMessage() //вызываю функцию 
//Отправить сообщение


//задача2 --------------------------------------------------------------------


function year(2021){
}

function month(June){
}

function number(26){

}

function season(summer){

}

function name(sali){

}

function size(small){

}

function city(nazran){

}

function republic(ingushetia){

}

function village(plievo){

}

function university(intocod){

}



//=======задача 3 ===============================================

//запускает игру
function startGame(game) {
    startGame(game);
    
}


//открывает окно
function open(window) {
    open(window);
    
}

//удаляет текст
function text(delete){
    text(delete);
}

//войти в вк
function phone (vk){
    phone(vk);
}


//меняет имя
function change(name){
    change(name);
}


//запускает ракету
function toRun(rocket){
    toRun(rocket);
}



//выделяет ошибки
function highlight(error){
    highlight(error);
}

//сохраняет автоматически
function toKeep(auto){
    toKeep(auto);
}



//скачивает файл
function download(file){
    download(file)
}


//переименовывает видео
function rename(video){
    rename(video);
}


// ====== задача 4 ====================================================


//номер урока
function lesson(number) {
    return number * 2;
}
console.log(lesson(2))


//количество авто
function quantity(avto){
    return avto *2;
}
console.log(quantity(9))


//удалить элемент
function delet(it) {
    return it * 2;
}
console.log(delet(6))


//архивировать файл
function archive(file2){
    return file2 * 2;
}
console.log(archive(5))


//объекты
function object(os){
    return os * 2;
}
console.log(object(3))


// ===============задача 5 ================================

// Создай функцию, которая принимает в качестве параметра массив и возвращает первый элемент этого массива. Вызови функцию в консоль.
function size(arr=[2,5,7,8,9]){
    return arr [0];
 }
 console.log(size())


 //=========задача 6======================================

 // Создай функцию, которая принимает в качестве параметра массив и возвращает 
 //первый элемент этого массива. Вызови функцию в консоль.
  
 function size(arr=[2,5,7,8,9]){
    return arr [arr.length-1];
 }
 console.log(size())


// ===============задача 7 ======================

//Задача 7. Добавь комментарии к каждой строке следующего кода:

function printMyFullName(firstname, secondname) 
    //создаем ф-ю со значением firstname  secondname
    const fullname = `${firstname} ${secondname}`;
    //создаем переменую для этих значений
    
    return fullname;
  } //возращаем  значения в фулнайм в изначальное значения ф-ии
  
  console.log(printMyFullName('into', 'code'));
//выводит в ф-ии значения into и code вместо firstname secondname
  
  
  function getSumOfFirstAndLastElement(arr) {
      //создаем ф-ю
    if(arr.length < 2) {
        //задаем условие если длина массива меньше 2 то..
      return 'леее, минимум два элемента нужно жи есть';
      // .. возвращает сообщение из ретурн.
    } else {
        // иначе
      const lastIndex = arr.length - 1;
// последний элемент массива = переменной lastIndex
      
      return arr[0] + arr[lastIndex];
      //возвращаем сумму первого элемента arr  и последнего элемента arr
    }
  }
  
  console.log(getSumOfFirstAndLastElement([]);
  //выводим в консоль ф-ю с пустым массивом
  
  console.log(getSumOfFirstAndLastElement([3, 7, 12, 8]);
  //выводим в консоль ф-ю с массивом [3,7,12,8]
 


///==================================
  //Задача 8. Напиши к следующему коду комментарий, объясняющий почему функция 
  //возвращает "html" вместо "css".

  let text = "css";

function testVariableScope() {
  let text = "html";
  
  return text;// возвращет html потому что ретерн находитс внутри функции. чтобы возвращать css он должен 
  //находится за пределами функции.

}

console.log(testVariableScope());


//-----Задача 9: Погугли и узнай почему следующий код выполняется несмотря на то, что функция объявлена после того,
// как используется (то есть вызывается).