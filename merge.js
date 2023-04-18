// Write a function that takes in the following array and consoles the target if it is found else
// null
// let num = [9,2,0,6,5,15,7]

function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }
    let middle=Math.floor(arr.length/2)
    let left=arr.slice(0,middle)
    let right=arr.slice(middle)
    return sorted(mergeSort(left),mergeSort(right))
}
 
function sorted(left,right){
    let empty=[];
    while(left.length && right.length){
        if(left[0]<right[0]){
            empty.push(left.shift())
        }else{
            empty.push(right.shift())
        }
        
    }
    return [...empty,...left,...right]
}
let arr = [9,2,0,6,5,15,7]
 console.log(mergeSort(arr));

 
// console.log(mergeSort(sorted(left,right)))


// Write a function that takes in the following array and consoles the target if it is found else
// null
// let number=[1, 4,2, 6, 9]

function mergeSort(arr1){
    if(arr1.length<=1){
        return arr1;
    }
    let middle=Math.floor(arr1.length/2)
    let left=arr1.slice(0,middle)
    let right=arr1.slice(middle)
    return sorted(mergeSort(left),mergeSort(right))
}
 
function sortArray(left,right){
    let empty=[];
    while(left.length && right.length){
        if(left[0]<right[0]){
            empty.push(left.shift())
        }else{
            empty.push(right.shift())
        }
        
    }
    return [...empty,...left,...right]
}
let arr1 = [1, 4,2, 6, 9]
 console.log(mergeSort(arr1));




// Write a function that takes in the following array and consoles the target if it is found else
// null
//let number=[3, 5, 8, 5, 99, 1]
function mergeSort(arr3){
    if(arr3.length<=1){
        return arr;
    }
    let middle=Math.floor(arr3.length/2)
    let left=arr3.slice(0,middle)
    let right=arr3.slice(middle)
    return sorted(mergeSort(left),mergeSort(right))
}
 
function sort(left,right){
    let empty=[];
    while(left.length && right.length){
        if(left[0]<right[0]){
            empty.push(left.shift())
        }else{
            empty.push(right.shift())
        }
        
    }
    return [...empty,...left,...right]
}
let arr3 = [3, 5, 8, 5, 99, 1]
 console.log(mergeSort(arr3));
