class user{
    constructor(name,surname){
        this.name=name
        this.surname=surname
    }
}
let a=new user('john','smith')
a.name='pete'
console.log(a)
// cau 2
class caculator{
    constructor(so1,so2){
        this.so1=so1
        this.so2=so2
    }
    tong(){
        return this.so1+this.so2
    }
    trungbinh(){
        return (this.so1+this.so2)/2
    }
}
let b=new caculator(3,5)
console.log(b.tong())
console.log(b.trungbinh())
