//3.1  

function getName(age) {
    return age.name
}
console.log(getName = {
  name:'sali',
  age:24
});




//3/2

function getName(object){
    return [object.firstname, object.lastmane]
    }
    console.log(object={
        firstname:'Kotiev',
        lastname:'Kot',
        age:24
    });


//3/3

    function concatNames(person, lastname){
        return ${person.firstname}  ${lastname}
        }
      
        const person = {
          firstname: 'Alvi',
          age: 26
        };
        console.log(concatNames(person, 'TSUGAEV'))

//4/4
function correctName(object){
    if(object.fathername === undefined){
    return object.firstname
    }
    else{
        return ${object.firstname} ${object.lastname} ${object.fathername}
    }
    }
     let object = {
        firstname: 'Alvi',
        lastname: 'Tsugaev',
        fathername: undefined
    }
      
      console.log(correctName(object))

    