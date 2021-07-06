function creatObjectCart ()) {
   const cart = {
    cartItems: [],

addToCart: function (name){

    if(typeof name !=="string"){
        console.log('Ошибка.Невозможно добавить товар')
        return
    }

    this.cartItems.push({
        productName: name,
        price: 100 + Math.floor (x: Math.random()* 900)
    })

     console.log(`Товар "${name}" успешно добавлен в корзину`)

},
viewCart: function () {
    if(this.cartItems.length === 0){
        console.log('Корзина пуста')
    } else {
        console.log
    }
}
 


//Math.floor(Math.random( ) * (max - min + 1)) + min, где min - минимальное значение,
// а max - максимальное значение диапазона.