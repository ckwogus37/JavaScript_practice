function Person(name, age,sex,tall){
    this.name= name;
    this.age = age;
    this.sex = sex;
    this.tall = tall;
}

class PPerson{
    constructor(nname, aage){
        this.nname = nname;
        this.aage = aage;
    }
}

const person1 = new Person(`jaehyeon`, 25,`male`, 174);
const person2 = new PPerson('youngdon', 35);
