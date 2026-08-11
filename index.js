

1  // concate the array ----> 

// num = [1,2,1];
// var getConcatenation = function(nums) {
//    let n = num.length;
//    let ans = new Array(n*2);
//    for(let i=0;i<ans.length;i++){
//      ans[i] = num[i%n];
//    }
//    return ans;

// };


// resverse an arrayy --------------------------------------------------- using temp extra variable
// const A = [1,2,3,4,5,6]
// function reverse() {
//   const len = A.length;
//   let i =0 
//   let j = len-1;
//   while(i < j) {
//    A[i] = A[i] + A[j]
//    A[j] = A[i]  - A[j]
//    A[i] = A[i] - A[i]
//    i++, j--;
//   }
//   return A;
// }



// console.log( reverse());


// ---------------------------------------------- reverse without using extra variable --------------------------------------

// const A = [1,2,3,4,5,6]
// function reverse() {
//   const len = A.length;
//   let i =0 
//   let j = len-1;
//   while(i < j) {
//    A[i] = A[i] + A[j]
//    A[j] = A[i]  - A[j]
//    A[i] = A[i] - A[j]
//    i++, j--;
//   }
//   return A;
// }
// console.log( reverse());

// ------------------------------------------finding the second largeset without sort--------------------------------------------------

// class Solution {
//     getSecondLargest(arr) {                                             // tried at gfg , only when we have +ve range
//         let l = -1;
//         let sl = -1;
//        const len =  arr.length;
//        for(let i =0;i<len;i++){
//            if(arr[i] > l) {
//              sl = l                                        ---> if I have updated the largest first than 2nd largeset than 2nd largeste is upadated with largeste 
//             l = arr[i]
//          }
//          if(arr[i] < l && arr[i] > sl) sl = arr[i]
//        }
//        return sl
//     }
// }

// -----------------------------------------remove the dupliate from the array inplace return the unique element count----------------------------------

// approach just follow your mind it will tell the path wht to follow.

// approach take the elem. and store them in the variable compare it with other if changes than increase the count .


// ------------------------------------- flatten the array with method and without method ---------------------------------------------

// const nestedArray = [
//   1,
//   [2, 3],
//   [4, [5, 6, [7, 8]]],
//   [9, [10, [11, [12, 13]]]],
//   14
// ]; 

// function flattenArray(nestedArray){
//     let len = nestedArray.length;
//     const flatArray = [];
//     for(let i =0;i<len;i++){
//         if(Array.isArray(nestedArray[i])) {             // Array is the class here isArray is the method that is provided we can check that 
//           const flat =  flattenArray(nestedArray[i]);
//           flatArray.push(...flat) ;                        // we are using the spread here so that we can make it seperate and store with rest of the element .
//         }
//         else flatArray.push(nestedArray[i]);

//     }
//     return flatArray;
// }

// console.log( flattenArray(nestedArray));


    // const nestedArray = [
    // 1,
    // [2, 3],
    // [4, [5, 6, [7, 8]]],
    // [9, [10, [11, [12, 13]]]],
    // 14
    // ]; 

    // console.log(nestedArray.flat(1));                       -----------> without using any method
  

