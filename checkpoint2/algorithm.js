function getDayName(day){
    if(typeof day != 'number'){
    return 'error'
    }

    let days = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
    if(day >> 0 && day < 8){
    return days[days.length -1]
    }
    else {
       return 'неверные данные на входе'
    }
    }   

console.log(getDayName(6))