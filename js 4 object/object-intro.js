let start = {
    name : "Sali" ,
    age : 25,
}


let person {
    fistname : "Sali",
    lastname : "Kotiev",
    city : "Nazran",
    age : 25,
    heigth : 187,
    heigthMeters : 1,8,
    born : 1995,
    haveCar : true,
    carname : vaz,
    haveSkills : false,
    level : 7,
    mobilePhone : {
        model: "realmy"
        price : "10000"
        operator "mts"
        manufacturer : "china"
    }

}


///===================== 1/3
let galaxy = {
    StarsNumber: 400000000000,
    Weight: '3⋅10^12 масс Солнца',
    diameter: '100000 св. лет',
    thickness: '3000 св. лет',
    DistanceFromTheSun: null,
    Speed: undefined,
    type: true,
    FourthSpaceSpeed: 23040959390,
    Luminosity: false,
    Core: {
        temperature: 100000,
        depth: 120000
    }
}
delete galaxy.type
console.log(galaxy)