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