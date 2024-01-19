const form  = document.getElementById('form');
const username  = document.getElementById('username');
const password  = document.getElementById('password');
const cpassword  = document.getElementById('cpassword');

form.addEventListener('submit' , e =>{
    e.preventDefault();
    
    validateInputs();
});

const setError = (element , message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.getElementById('.error');

    error.Display.InnerText = message ;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}

const setSuccess = (element , message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.getElementById('.error');

    error.Display.InnerText = message ;
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

}

const validateInputs = () =>{
    const usernameValue = username.value.trim();
    const passwordValue = username.value.trim();
    const cpasswordValue = username.value.trim();

    if(usernameValue === ' '){
        setError(usernameValue , 'Username is requried ');
    }else{
        setSuccess(usernameValue);
    }

    if(passwordValue === ' '){
        setError(passwordValue , 'Password is requried');
    } else if (passwordValue.legnth < 8 ) {
        setError(passwordValue , "password must be greater than 8 characters");
    } else {
        setSuccess(passwordValue);
    }

    if(cpasswordValue === ' '){
        setError(cpasswordValue , 'Please confirm you password ');
    } else if (cpasswordValue  !== passwordValue) {
        setError(cpasswordValue , "password dosent match ");
    } else {
        setSuccess(cpasswordValue);
    }

}