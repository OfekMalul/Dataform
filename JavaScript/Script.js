const form = document.getElementById('form');
const username = document.getElementById('username');
const city = document.getElementById('city');
const street = document.getElementById('street');
const phoneNumber = document.getElementById('phoneNumber');
const email = document.getElementById('email');

//submit is the name of the event.
//e is event holder
// is a shortcut for a function, it could be written:
// ('submit',function(e){})
form.addEventListener('submit',(e)=>{
  //preventDefault = dismiss the default action of the event holder(e).
  e.preventDefault();

  checkInputs();
});

function checkInputs(){
//trim () = takes out all the spaces.
    const usernameValue = username.value.trim();
    const cityValue = city.value.trim();
    const streetValue = street.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();
    const emailValue = email.value.trim();
    

    if (usernameValue ==='' || usernameValue === null){
      setErrorFor(username, 'Name cannot be blank');
    }
    else if (isLetters(usernameValue) == false){
      setErrorFor(username,'Must contain only letters');
    }
    else{
      setSuccessFor(username);
    }
  

    if (cityValue === '' || cityValue === null){
      setErrorFor(city, 'City cannot be blank');
    }
    else if (isLetters(cityValue) == false){
      setErrorFor(city,'Must contain only letters');
    }
    else{
      setSuccessFor(city);
    }


    if(streetValue==='' || streetValue === null){
      setErrorFor(street,'street cannot be blank');
    }
    else{
      setSuccessFor(street);
    }


    
    if(phoneNumberValue ==='' || phoneNumberValue === null){
      setErrorFor(phoneNumber, 'Phone number cannot be blank');
    }
    else if(phoneNumberValue.toString().length != 10){
      setErrorFor(phoneNumber, 'Phone number must be 10 digits');
    }
    else{
      setSuccessFor(phoneNumber);
    }

  
    if(emailValue ==='' || emailValue === null){
      setErrorFor(email, 'Email cannot be empty');
    }
    else if (!isEmail(emailValue)){
      setErrorFor(email,'Email is not valid');
    }
    else{
      setSuccessFor(email);
    }
  }

  
//if it the input does not pass all the tests than the bar will be heighlight red with a green mark.
  function setErrorFor(input, message){
/*input.parentElement = assigns formControl with the parentelement of the input. for example, if the 
 input is username then the parent element is the form-control in the html document.*/
      const formControl = input.parentElement;
      const small =formControl.querySelector('small');
//innerText = change the accordingly the message.
      small.innerText = message;
// .className = execute the style form-control.error
      formControl.className = 'form-control error';
  }
//if it the input pass all the tests than the bar will be heighlight green with a green mark.
  function setSuccessFor(input){

    const formControl = input.parentElement;

    formControl.className = 'form-control success';
  }
//check that the input is only letters.
  function isLetters(input){
    for(let i = 0; i < input.length; i++){
      if(input.charAt(i) < 10){
        return false;
        break;
      }
    }
  }
// check that the email is vilad.
  function isEmail(email){ 
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    }
  
  