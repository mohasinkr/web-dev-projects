const sampleObj = {Name:"MKR", email:"xxxx@gmail.com",sex:'MALE'};

//creating a copy of the sampleObj using 'for in'...

const objCpy = {};

for(let properties in sampleObj){
    objCpy[properties] = sampleObj[properties];
}

console.log(sampleObj);
console.log(objCpy);