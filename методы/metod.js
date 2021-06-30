let phone = {
    brand: "realme",
    model: "c3",
    memory: "64gb",
    colar: "black", 
    power: false,
call:function (){
    return `Я звоню ${this.brand}`
},
};
console.log(phone.call());

//2Добавить в объект метод call() который будет возвращать одну строку “Я звоню…”


//---------------------------------------

/*3Изменить метод call() таким образом, чтобы он принимал один параметр - имя того, 
кому звоним и возвращал строку: “Я звоню [name]". */


let phone = {
    brand: "realme",
    model: "c3",
    memory: "64gb",
    colar: "black", 
    power: false,
call:function (name){
    return `Я звоню ${name}`
},
};
console.log(phone.call("sali"));

//-------------------------------------------------------



let phone = {
    brand: "realme",
    model: "c3",
    memory: "64gb",
    colar: "black", 
    power: false,
    batteryPower: 50,
call:function (name){
    return `Я звоню ${name}`
},
};
console.log(phone.call("sali"));
//444Добавить в объект свойство batteryPower которое хранит значение кол-во зараяда.

//------------------------------------------------------
let phone = {
    brand: "realme",
    model: "c3",
    memory: "64gb",
    colar: "black", 
    power: false,
    batteryPower: '50%',
getBatteryPower:function (){
    return `Ваша заряка ${this.batteryPower}`
},
};
console.log(phone.getBatteryPower());

//5555Добавить в объект метод getBatteryPower() который возвращает строку: “Ваша зарядка [значение заряда] %”

//---------------------------------------------------------------------------------

let phone = {
    brand: "realme",
    model: "c3",
    memory: "64gb",
    colar: "black", 
    power: false,
    batteryPower: '50%',
isOn:function (){
    if(this.power == true){
        return `Телефон включен`
    }
    if(this.power == false){
        return `Телефон выключен`
    }  
},
};
console.log(phone.isOn());

/*  66 Добавить метод isOn который будет возвращать строку “телефон включен”, если
 значение свойства power равно true и “телефон выключен” если  false. */

 //----------------------------------------------------------------


 let phone = {
    brand: "realme",
    model: "c3",
    memory: "64gb",
    colar: "black", 
    power: true,
    batteryPower: '50%',
isOn:function (){
    if(this.power == true){
        return `Телефон включен`
    }
    if(this.power == false){
        return `Телефон выключен`
    }  
},
switch: function(){ 
         if(this.power == false){ 
           return this.power = true 
         } if(this.power == true){ 
           return this.power = false 
         } 
}
}
console.log(phone.isOn());
console.log(phone.switch());


 /* 777 Добавить метод switch() который будет включать и выключать телефон. Т.е. будет менять значение 
 свойства power  (Если изначально значение свойства было false метод 
    должен поменять его на true и наоборот) */
//-------------------------------------------------------------
let phone = {
    brand: "realme",
    model: "c3",
    memory: "64gb",
    colar: "black", 
    power: true,
    batteryPower: '50%',
    sent: [
        {to: "+7919 555 23 11", time: "03:12", message: "Сплю!"},
        {to: "+7377 656 21 21", time: "23:25", message: "Д1авала?"},
    ],
    
    inbox: [
         {from: "+7999 213 12 12", time: "20:12", message: "Спишь?"},
         {from: "+2124 312 48 24", time: "11:25", message: "Все еще спишь?"},
    ], 
      
isOn:function (){
    if(this.power == true){
        return `Телефон включен`
    }
    if(this.power == false){
        return `Телефон выключен`
    }  
},
switch: function(){ 
         if(this.power == false){ 
           return this.power = true 
         } if(this.power == true){ 
           return this.power = false 
         } 
}
}
console.log(phone.isOn());
console.log(phone.switch());


/* 888Добавить свойства: исходящие сообщения и входящие сообщения, которые будут содержать в себе 
массив из объектов. В массиве с исходящими сообщениями объект должен содержать 
свойства: to , time, message.  А с входящими вместо свойства to, должно быть from.
 В итоге должно получиться примерно следующее: */


 //--------------------------------------------------------------


 let phone = {
    brand: "realme",
    model: "c3",
    memory: "64gb",
    colar: "black", 
    power: true,
    batteryPower: '50%',
    sent: [
        {to: "+7919 555 23 11", time: "03:12", message: "Сплю!"},
        {to: "+7377 656 21 21", time: "23:25", message: "Д1авала?"},
    ],
    
    inbox: [
         {from: "+7999 213 12 12", time: "20:12", message: "Спишь?"},
         {from: "+2124 312 48 24", time: "11:25", message: "Все еще спишь?"},
    ], 
      
isOn:function (){
    if(this.power == true){
        return `Телефон включен`
    }
    if(this.power == false){
        return `Телефон выключен`
    }  
},
switch: function(){ 
         if(this.power == false){ 
           return this.power = true 
         } if(this.power == true){ 
           return this.power = false 
         } 
}
},

    sentMessage: function(to,time,message){ 
        return this.sent.push({to,time,message}) 
      }, 
},

console.log(phone.isOn());
console.log(phone.switch());
console.log(phone.sentMessage('8888888888', '16:00', 'время')),
 

 /* 9999Создать метод sentMessage(), который будет добавлять новый объект в массив с отправленными сообщениями. 
 Подумайте сколько параметров должен будет принимать этот метод. */

 //---------------------------------------------------

  clearInbox : function(){ 
    for (let i = 0 ; i < inbox.length ; i++){ 
      delete this.inbox[i] 
  }, 
}, 

clearSent: function(){ 
    for (let i = 0 ; i < sent.length ; i++){ 
      delete this.inbox[i] 
   } 
} 
}, 

 /*   10   Создать два метода clearInbox() и clearSent() которые будут удалять все входящие и все 
 сходящие сообщения соответственно. */