(function() {
    let form = document.querySelector('#contact-form');
    let emailInput = document.querySelector('#contact-email');
    let messageInput = document.querySelector('#contact-message');

    function showErrorMessage(input, message) {
        // Input-wrapper
        let container = input.parentElement;

        // Check and remove existing errors
        let error = container.querySelector('.error-message');
        if (error) {
            container.removeChild(error);
        }

        // Add error message as long as it isn't empty (meaning there would be no need for error message)
        if (message) {
            let error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            container.appendChild(error);
        }
    }

    function validateEmail() {
        let value = emailInput.value;
        
        if (!value) {
            showErrorMessage(emailInput, 'E-mail is a required field.');
            return false;
        }

        if (value.indexOf('@') === -1) {
            showErrorMessage(emailInput, 'Please enter a valid e-mail adress.');
            return false;
        }


        if (value.indexOf('.') === -1) {
            showErrorMessage(emailInput, 'Please enter a valid e-mail adress.');
            return false;
        }

        showErrorMessage(emailInput, null);
        return true;
    }

    function validateMessage() {
        let value = messageInput.value;
        
        if (!value) {
            showErrorMessage(messageInput, 'Please enter a message before submitting.');
            return false;
        }

        showErrorMessage(messageInput, null);
        return true;
    }

      // Variables have to be generated for each validation so they don't depend on each other; both validation functions have to be called in either case. If only && is used, validateMessage() won't be called if validateEmail() returns false
    function validateForm() {
        let isValidEmail = validateEmail();
        let isValidMessage = validateMessage();
        return isValidEmail && isValidMessage;
    }

    form.addEventListener('submit', function(event) {
        // Don't submit to server yet.
        event.preventDefault();
        
        // Is this the proper spot to call this function???
        validateMessage();

        if (validateForm()) {
            alert('Delivering forms is not implemented yet. Please use provided e-mail address :)');
          }
    })

    emailInput.addEventListener('input', validateEmail);
    messageInput.addEventListener('input', validateMessage);
})();