document.getElementById('login-btn').addEventListener('click', function(){

    const emailInput = document.getElementById('email-input');
    const emailValue = emailInput.value;

    const passwordInput = document.getElementById('password-input');
    const passwordValue = passwordInput.value;


    if (emailValue === 'abir@gmail.com' && passwordValue === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Please Type Valid Email & Password !!!');
    }
})