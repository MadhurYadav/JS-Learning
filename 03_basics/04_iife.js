// Immediately Invoked Function Expressions (IIFE)

function chai(){
    // console.log('DB CONNECTED');
}

chai();

// we want that in this function any global varible should not interfere

// iife
// global scope ke variable se pollution hoti h unse bachne ke liye
// (yaha function aayega)(yaha parameter aayega);


(function coffee(){
    // named IIFE
    console.log('DB CONNECTED');
})();

// single IIFE
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('james')

