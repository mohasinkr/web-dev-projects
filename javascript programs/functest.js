const test = function(){
    console.log("hello this is fun");
    return ()=>{
        console.log('test');
    };
};

var returnvalue = test();
console.log(returnvalue());



