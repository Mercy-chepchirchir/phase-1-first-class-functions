
function receivesAFunction(mercy){
    mercy();
}

const returnsANamedFunction =()=>receivesAFunction
    
  
function returnsAnAnonymousFunction(){
    return function(){
    }
    
}