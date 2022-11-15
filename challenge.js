// mohamed 
let mohamed_weights = 75
let mohamed_height = 1.7
let bmi_mo = mohamed_weights / mohamed_height * mohamed_height
console.log("Mohamed's BMI is " + bmi_mo)
let moh_higher_bmi = true

//Ahmed
let ahmed_weights = 55
let ahmed_height = 1.7
let bmi_ah = ahmed_weights / ahmed_height * ahmed_height
console.log("Ahmed's BMI is " + bmi_ah)
let ah_higher_bmi = true


if(bmi_mo > bmi_ah){
    console.log(moh_higher_bmi + "Mohamed has a higher BMI than Ahmed")
}else if(bmi_ah > bmi_mo){
    console.log(ah_higher_bmi + "Ahmed has higher BMI than Mohamed")
}else{
    console.log("invaled")
}