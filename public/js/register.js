async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-register').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-register').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/home', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('success');


            document.location.replace('/consoule');

        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#register-form').addEventListener('submit', signupFormHandler);