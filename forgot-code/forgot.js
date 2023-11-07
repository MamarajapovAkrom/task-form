const emailInput = document.querySelector('.form-control');
const resetPassword = document.querySelector('.bt-lg');

resetPassword.addEventListener('click', () => {
    if(emailInput.value === signInEmail){
        fetch('http://localhost:5000/api/auth/forgot/emailCodeCheck', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: signInEmail.value
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        // alert('true')
    }
    // else{
    //     alert('false')
    // }

})