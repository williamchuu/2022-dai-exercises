const args = require('minimist')(process.argv.slice(2))
console.log(args);

//receive a password from the user the terminal

//store this input to a variable
var password = args['pass']; //in the future this could be a <text input/> value

//create a function to check if the password is valid
function checkPasVal(){
    if(password === ''){
        console.log('Your password cannot be empty!');
    }
    //update UI
   else if(password.length < 5){
        console.log('Your password needs to be longer!');
    }
    //Update UI
    
    //if the password is longer that 15 characters it's too long
   else if(password.length > 15){
        console.log('Its long!');
    }
    
    //if the password includes '@' -> it's not for your email! 
   else if(password.includes('@')){
        console.log('Its not for your email!');
    }

    else {
        console.log('Password is Valid!');
        Validate();
    }

}

//create a function ti check if the password matches to a word of your choice
function Validate() {
     if(password === 'itsmemario'){
        console.log('Welcome!');
    }
    else {
        console.log('nope');
    }
}
//run the function 
checkPasVal();
