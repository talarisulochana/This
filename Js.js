let Obj={
    name:"Heam",
    data:function(){
console.log(`Here Student name is ${this.name}`)
    }
}
Obj.data();

let object={
    id:1,
name:"Chinni",
details:function(){
    console.log(`Here person details, Student id is ${this.id},Student name is ${this.name}`)
}
}
object.details();

let A={
    id:2,
    name:"Sulochana",
    edu : "MCA",
    passoutyear : 2024,
    state:"AP",
    
}

details= function (l){
    console.log(`Here person details,Student Id is ${this.id},my name is ${this.name},Education details ${this.edu},passout year is ${this.passoutyear},State is ${this.state} ${l}`)
}

details.call(A,"i came to hyd for taking coaching")


let obj={
    id:3,
    name:"Kavya",
    edu:"Intermediate",
    place:"ATP",
    year: "2nd year"
}
details=function(k){
    return `Here person details,Student Id is ${this.id},my name is ${this.name},Education details ${this.edu},where she studied place ${this.place},which year she studied ${this.year}, ${k}`
}
let a=details.bind(obj,"she prepare for mset exam")
console.log(a())

let B={
    id: 4,
    name:"Heam",
    edu:"BTech",
place:"PVD",
year:"3rd year"
}
details=function(o){
console.log( `Here person details,Student Id is ${this.id},my name is ${this.name},Education details ${this.edu},where she studied place ${this.place},which year she studied ${this.year} ,${o}`);

}
details.apply(B,["she doing project after completed 3rd year exams."])


let C={
    id:5,
    name:"Bhargav",
    edu:"BTech",
place:"VJD",
year:"3rd year",
details:function(){
    console.log(`Here person details, Student id is ${this.id},Student name is ${this.name},Student Education is ${this.edu},Student Study place is ${this.place},Student present study Year is ${this.year}`)
}
}
C.details();
