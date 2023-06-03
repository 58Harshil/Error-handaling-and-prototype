let score = 4
function one(){
    let score = 0
    //console.log(score);
}
function two(){
    let score = 3
    //console.log(score);
}
function three(){
    //console.log(score);
}
one()
two()
three()
//console.log(score);

function outerFun(){
    let outerVAr = "I am at scope level 1"
    function innerFunc(){
        let innerVal = 'I am at scope level 2'
        //console.log(outerVAr);
    }
    //console.log(innerVal);
    innerFunc()
}
//outerFun()


const myGlobalValue = 0
function func (){
    const val1 = 1
    //console.log(myGlobalValue);

    function innerOffFunc(){
        const val2 = 2
        //console.log(val2,val1,myGlobalValue);

        function innerOfInnerFunc(){
            const val3 = 3
            //console.log(val3,val2,val1,myGlobalValue);
        }
        innerOfInnerFunc()
    }
    innerOffFunc()
}
//func()



function superFunc() {
    let outerValue = 'I am outer'
    function minorFunc(){
       // console.log(outerValue);
    }
    minorFunc()
}
//superFunc()



const errorMessage = 'File not found'
setTimeout(function callback(){
    //console.log(errorMessage);
},2000)



let pageCount = 0
const items = [2,3,4,5,6]
items.forEach(function iterator(num){
    pageCount++
    console.log(num);
})
console.log('Page Count', pageCount);
