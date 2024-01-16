// select all buttons
const buttons= document.querySelectorAll('.button')
// console.log(buttons);

// select body
const body = document.querySelector("body")

buttons.forEach(function (button){
    // console.log(button);
    // add event listner on each button
    button.addEventListener('click',function(e){
        // console.log(e);
        // console.log(e.target); // this tell ki event aa kaha se raha h
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id // grey color ho jayegi body
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id // grey color ho jayegi body
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id // grey color ho jayegi body
        } 
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id // grey color ho jayegi body
        }
    })
})