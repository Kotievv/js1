class createTamagochi {
    constructor(name, food, energy, mood){
          this.name = name;
          this.food = food;
          this.energy = energy;
          this.mood = mood;
          
    }




 getStatus() {
    if(this.food < 3) {
       this.food = `Я голоден ${this.food}`
     }
     else {
       this.food = `Я не голоден ${this.food}`
     }
 
     if (this.food < 3) {
 
     }
     
    console.log(`Имя: ${this.name}, Еда: ${this.food}, Энергия: ${this.energy}, Настроение: ${this.mood} `)
 }
 
 setName(name){
  this.name = name
 }
 
 goEat(food) {
    if (this.food < 5)
    this.food++
    this.mood--
 }
 
 sleep(energy) {
    if(this.energy < 5) {
       this.energy++
       this.food--
    }
 }
 
 play(mood) {
    if(this.mood < 5) {
       this.mood++
       this.energy--
    }
 }
   
 }
 
//  console.log(tamagochi.play())
//  console.log(tamagochi.sleep())
//  console.log(tamagochi.goEat())
//  console.log(tamagochi.setName('Maga'))
//  console.log(tamagochi.getStatus());
 const crt = new createTamagochi ( 'sali', 3, 2, 4)
 console.log(crt) 