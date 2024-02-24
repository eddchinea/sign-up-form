//Match passwords

const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const message = document.querySelector('.message');
confirmPassword.addEventListener('input', function() {
        
    if (password.value !== confirmPassword.value) {
            message.textContent = 'Passwords do not match';
            confirmPassword.setCustomValidity('Passwords do not match');
        } else {
            message.textContent = '';
            confirmPassword.setCustomValidity('');
        }
    })
