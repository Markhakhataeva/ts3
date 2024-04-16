    // enum DaysOfWeek{
    //     monday,
    //     tuesday,
    //     wednesday,
    //     thursday,
    //     friday,
    //     saturday,
    //     sunduy
    
    // }
    
    
    // console.log(DaysOfWeek[0])
    // console.log(DaysOfWeek[1])
    // console.log(DaysOfWeek[2])
    // console.log(DaysOfWeek[3])
    // console.log(DaysOfWeek[4])
    // console.log(DaysOfWeek[5])
    // console.log(DaysOfWeek[6])
    // console.log(DaysOfWeek[7])


////////////


// enum Months{
//     december,
//     january,
//     february,
//     march,
//     april,
//     may,
//     june,
//     july,
//     august,
//     september,
//     october,
//     november
// }

// function man(n){
//     if(0<n ||n<12){
//         console.log("введите от 1 до 12")
//     }else{
//         console.log(Months[n])
//     }
// }
// console.log(Months[11])



////////



// enum Colors{
//     blue,
//     red,
//     purple,
//     yellow,
//     orange
// }


// function shade(n){
//    if(0<n||n<5){
//     console.log(Colors[n])
//    }
// }
// console.log(Colors[2])


//////////////



// enum Planets{
//     mercury=1,
//     venus=2,
//     earth=3,
//     mars=4,
//     jupiter=5,
//     saturn=6,
//     uranus=7,
//     neptune=8
// }

// function planet(name){
//     if(name){console.log(Planets)}
// }
// console.log(Planets.earth)


//////////


enum Fruits{
    apple,
    orange,
    banana,
    avocado,
    lime
}

function fruit(element){
    if(Fruits[element]){
        console.log("cool")
    }else{console.log("i dont know this fruit")

    }
}

console.log(Fruits[2])