// //step 1 => Create a XMLrequest
// var request = new XMLHttpRequest();
// //step 2 => Opening a connection to the server
// request.open("GET","https://restcountries.com/v3.1/all",true)
// //step 3 => Initiating a bridge to the server /sending a request / sending a connection
// request.send();
// //step 4 => server response
// request.onload = function(){
//     var data = request.response;
//     // console.log(data);
//     var result = JSON.parse(data);
//     console.log(result);
//     console.log(result[1].area)
//     //for accessing multiple values are looping
//     for(var i=0;i<result.length;i++){
//         console.log(result[i].name.common,result[i].area);
//     }
//     }


    // //function example
    // var a=10;
    // var b = 20;
    // var c =30;
    // var d = 10;
    //  function add(a,b){
    //     console.log(a+b)
    //  }
    //  add(5,4);
    //  function mul(num1,num2) {
    //     console.log(num1*num2);
    //  }
    //  function sub(c,b){
    //     console.log(c-b);
    //  }
    //  mul(15,5);
    //  sub(c,b);
    //  add(10,10);



    // //using return:-
    // function multiple(a,b,c){
    //     return a*b*c;
    // }
    // console.log(1,2,3);

    
    //print add numbers in an array [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

    // var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    // var result = [];
    // function odd(arr){
    //     for(var i=0;i<arr.length;i=i+1){
    //         if(arr[i]%2!==0){
    //             result.push(arr[i]);
    //         }
    //     }
    //     return result;
    // }
    // console.log(odd(arr));
    

// IIFE function how to apply
    
    // var result = [];
    // (function(arr){
    //     for(var i=0; i<arr.length; i=i+1){
    //         if(arr[i]%2!==0){
    //             result.push(arr[i]);
    //         }
    //     }
    //     console.log(result);
    // })([1,2,3,4,5,6,7,8,9,10,11])


//Arrow function (ES6)

var result = [];
var odd =(arr)=>{
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]%2!==0){
            result.push(arr[i]);
        }
    }
    return result;
}
odd([15,18,23,14,16,24]);

// //single line la code podurathu
// var a = (b,c)=>{return b+c}
// console.log(a(2,3));
    

