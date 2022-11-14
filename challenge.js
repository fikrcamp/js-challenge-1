// mohamed data

let mMass = 70;
let mHeight = 1.6;

let BMI = mMass / mHeight ** 2;
//  ali data

let aMass = 87;
let aHeight = 1.5;;

let aBMI = aMass / aHeight ** 2;


if(BMI > aBMI){
  console.log(`mohamed weight is ${mMass} kg and ${mHeight} m tall, higher than ali ${aMass} kg and ${aHeight} m`);
}else
console.log(`Ali weight is ${aMass} kg and ${aHeight} m tall, higher than mohamed ${mMass} kg and ${mHeight} m`)

