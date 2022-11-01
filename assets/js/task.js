let arr1= [1,2,3,4,5];
let arr2= [1,2,3,4,5];
let arr3= [1,2,3,4,5];
let arr4= [1,2,3,4,5];

console.log('Task Sorting Array')
const sortArrays = (arr1,arr2, ...rest)=>{
    let flatedArr =rest.flat();
    let arrays = [...arr1,...arr2,...flatedArr];
    let sortedArray = arrays.sort((a,b)=>a-b)
    return sortedArray;
}

let result = sortArrays(arr1,arr2,arr3,arr4);

console.log(result)