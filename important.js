// mapper function() example

const arr=[1,2,3,4,5];

const newArr=arr.map((val)=>{
    return(val*5);
});
console.log(arr);
console.log(newArr);

// reducer function () example

const arrTwo=arr.reduce(function(acc,val){
    return(acc+val);
},0);

console.log(arrTwo);

// string interpolation 

const name = function(){
    return "AZIM"
}

sentence= `Hi my name is ${name()}`;

console.log(sentence);

// object and array destructing 

const wordArr=["hi","my","name","is","Azim"];
const person={
    name:"Azim",
    hobby:"playing scooer",
    job:"Intern",
    age:'22'
}

function someName([,,,,lastEL]=[],{job}={}){
    console.log(lastEL+"->"+job);
}

someName(wordArr,person);

// rest and spread operators
// rest
// for object ... rest operator
const {age,hobby,...newObj}=person;

console.log(age,hobby,newObj);

// for array ... rest operator
const[firstEL,...rest]=wordArr;
console.log(firstEL,rest);

// spread
// for object ... spread operator for merging

const extendedPerson={
    ...person,
    nickname:"someword",
    wow:"wow"

}
console.log(extendedPerson);

// for array ... spread operator for merging

const arr2=[16,14];
const arr3=[...wordArr,...arr2];
console.log(arr3);

// promises and async func()

const myPromiseFunc=(num)=>{
    return new Promise((resolve,reject)=>{
        if(num>5){
            resolve("number is > 5");
        }else{
            reject("number is < 5");
        }
    })
}

myPromiseFunc(3)
.then((val)=>{
    console.log(val);
})
.catch((err)=>{
    console.log("ERROR:"+err)
})

// pending,resolve,reject states

// Async await ()applied in fetch func for reciving api results  using async and await

async function executeMpromise(){
    
    try{
        const val=await myPromiseFunc(10);
        console.log(val);
    }
    catch(error){
        console.log("Error",err);
    }
}

// executeMpromise();
