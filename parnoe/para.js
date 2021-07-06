
function createCounter() {
    const counterObject = {
      value: 0,
  
      increment: function () {
        this.value++;
      },
      reset: function() {
          this.value = 0
      },
  
      incrementBy: function (amount) {
        this.value += amount;
      },
  
      decrement: function () {
        this.value--;
      },
  
      print: function () {
        console.log(this.value);
      }
    }
  
    return counterObject;
  }
  
  const counter = createCounter();  */


  /*Выпусти новый релиз приложения, в котором есть возможность сбрасывать счетчик на ноль.

Данная возможность должна быть предоставлена методом reset().

Найди подходящее место, где нужно разместить этот метод.

Задача релиза
Метод reset должен изменять значение свойства value на 0.