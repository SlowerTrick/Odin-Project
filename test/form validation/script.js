function check_validation(input)
{
    let type = input.classList[0];
    console.log("Checking:", type);
    switch (type)
    {
        case 'email':
        {
            if(!check_email(input.value))
            {
                input.setCustomValidity('Invalid email address!');
                define_validation_status(input.validationMessage);
            }
            else
            {
                input.setCustomValidity('');
                clear_validation_status();
            }
            break;
        }
        case 'country':
        {
            input.setCustomValidity('');
            clear_validation_status();
            break;
        }
        case 'postal_code':
        {
            input.setCustomValidity('');
            clear_validation_status();
            break;
        }
        case 'password':
        {
            if(!check_password(password.value, confirm_password.value))
            {
                password.setCustomValidity('The passwords needs to be the same!');
                confirm_password.setCustomValidity('The passwords needs to be the same!');
                define_validation_status(input.validationMessage);
            }
            else
            {
                password.setCustomValidity('');
                confirm_password.setCustomValidity('');
                clear_validation_status();
            }
            break;
        }
        case 'password_confirmation':
        {
            if(!check_password(password.value, confirm_password.value))
            {
                password.setCustomValidity('The passwords needs to be the same!');
                confirm_password.setCustomValidity('The passwords needs to be the same!');
                define_validation_status(input.validationMessage);
            }
            else
            {
                password.setCustomValidity('');
                confirm_password.setCustomValidity('');
                clear_validation_status();
            }
            break;
        }
    }
}

function define_validation_status(msg)
{
    validation_status.innerText = msg;
}

function clear_validation_status()
{
    validation_status.innerText = "";
}

function check_email(email)
{
    if(email.includes('@'))
    {
        if(email[0] === '@' || email[email.length - 1] === '@')
            return false
        return true;
    }
    return false;
}

function check_password(password1, password2)
{
    if(password1 != password2 || password1 === "" || password2 === "")
        return false
    return true;
}

const validation_status = document.querySelector('.validation_status');
const form = document.querySelector('.form_container');
const password = form.querySelector('.password');
const confirm_password = form.querySelector('.password_confirmation');

[...form.children].forEach((e) => {
    if(e.classList.contains("input_field"))
    {
        const input = e.querySelector("input"); 
        input.setCustomValidity("Field is required!");
        input.addEventListener("input", () => {check_validation(input)});
    }
});