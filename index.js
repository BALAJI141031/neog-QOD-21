//flip and invert binary matrix 
// flipping means reversing the row
// invert the row means replace 0 with 1 or 1 with 0

let image=[[1,1,0],[1,0,1],[0,0,0]]

// flip
let resultedArray=[]
for(let i=0;i<image.length;i++){
  let flippedArray=[]
  let invertedArray=[]
  for(j=image[i].length-1;j>=0;j--){
    flippedArray.push(image[i][j])
  }
  for(k=0;k<flippedArray.length;k++){
    if(flippedArray[k]===0) invertedArray.push(1)
    if(flippedArray[k]===1)invertedArray.push(0)    
  } 
  resultedArray.push(invertedArray)
}
console.log(resultedArray)

// question 2
// let priceArray=[1,2,3,4,5]
let priceArray=[10,1,1,6]
let finalPriceArray=[]
for(let i=0;i<priceArray.length;i++){
  let discountArray=priceArray.slice(i+1)
  // console.log(discountArray)
  let flag=1
  for(let k=0;k<discountArray.length-1;k++){
    if(priceArray[i]>=discountArray[k]){
      finalPriceArray.push(priceArray[i]-discountArray[k])
      break
    }
    flag++
  }
  // console.log(flag)
  if(flag===discountArray.length || 0===discountArray.length) finalPriceArray.push(priceArray[i])
}
console.log(finalPriceArray)

// question 3 

let ops=["5","2","C","D","+"]
let finalScoresArr=[]
for(let i=0;i<ops.length;i++){
  if(ops[i]==="5") finalScoresArr.push(5)
   if(ops[i]==="2") finalScoresArr.push(2)
   if(ops[i]==="C") finalScoresArr.pop()
   if(ops[i]==="+") {
     let score=finalScoresArr[finalScoresArr.length-1]+finalScoresArr[finalScoresArr.length-2]
     finalScoresArr.push(score)
   }
  if(ops[i]==="D"){
    let score=finalScoresArr[finalScoresArr.length-1]*2
    finalScoresArr.push(score)
  }
  
}
console.log(finalScoresArr)
let result=(finalScoresArr.reduce((fv,sv)=>fv+sv,0))
console.log(result)
