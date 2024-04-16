class Person{
    constructor(name,age){
        this.name = name ,
        this.age = age 
        //create an empty obj , after the key value passed from super it just filled the key value then it sends the obj in child class to fill the extra properties 
    }
    speak(){
        console.log(`Hi I am ${this.name}`)
    }
}

class Doctor extends Person{
    constructor(name,age,subject){
        super(name,age)
        this.subject = subject ;
    }
    surgery(){
        console.log(`Dr ${this.name} can surgey`)
    }
}

const drOne = new Doctor('Bose',23,'MBBS')
//new keyword making an instance of the class'

const drTwo = new Doctor('Roy',23,'MBBS') 


console.log(drOne.speak()===drTwo.speak())

//they do not create seperate function  , they just use same function in defined in prototye