// Good Luck! You got this 💪🏾
// Write your code here.
let Ali ={
    weight:92,
    height:1.95,
    aliBMI:function(){
       return this.weight/this.height**2;
       
    }
}
 

let Mohamed ={
    weight:78,
    height:1.69,
    MoBMI:function(){
       return this.weight/this.height**2;
       
    }
}
let MohamedHigherBMI = (Mohamed.MoBMI() > Ali.aliBMI());
console.log(MohamedHigherBMI);