// Random info generator (no repeats)
const generateRandomInfo = (currentInfoText) => {
  const randomInfoList = [
    'I have lived on three different continents.',
    'I manage our fridge and plan meals to avoid food waste.',
    'I am the oldest of four siblings.',
    'I love living room dance parties with my kids.',
    'I speak three languages: German, English, and Spanish.',
    'One of my biggest weaknesses is coffee.',
    'I am an early bird.',
    'My next project is a decision-maker helper.',
    'My favourite season is fall.',
  ];
  let randomInfoText = currentInfoText;

  while (randomInfoText === currentInfoText) {
    const randomInfoIndex = Math.floor(Math.random() * randomInfoList.length);
    randomInfoText = randomInfoList[randomInfoIndex];
  }

  return randomInfoText;
};

const updateRandomInfo = () => {
  const currentInfoText = document.getElementById('randomInfo').innerText;
  const newInfoText = generateRandomInfo(currentInfoText);

  document.getElementById('randomInfo').innerText = newInfoText;
};

// // Contact form validation
// (function () {
//   let form = document.querySelector('#contact-form');
//   let emailInput = document.querySelector('#contact-email');
//   let messageInput = document.querySelector('#contact-message');
//   let emailError = document.querySelector('.email-error');
//   let messageError = document.querySelector('.message-error');

//   function showErrorMessage(error, message) {
//     // Check and remove existing errors
//     if (error) {
//       error.innerText = '';
//     }

//     // Add error message as long as it isn't empty (meaning there would be no need for error message)
//     if (message) {
//       error.innerText = message;
//     }
//   }

//   function validateEmail() {
//     let value = emailInput.value;

//     if (!value) {
//       showErrorMessage(emailError, 'E-mail is a required field.');
//       return false;
//     }

//     if (value.indexOf('@') === -1) {
//       showErrorMessage(emailError, 'Please enter a valid e-mail adress.');
//       return false;
//     }

//     if (value.indexOf('.') === -1) {
//       showErrorMessage(emailError, 'Please enter a valid e-mail adress.');
//       return false;
//     }

//     showErrorMessage(emailError, null);
//     return true;
//   }

//   function validateMessage() {
//     let value = messageInput.value;

//     if (!value) {
//       showErrorMessage(
//         messageError,
//         'Please enter a message before submitting.'
//       );
//       return false;
//     }

//     showErrorMessage(messageError, null);
//     return true;
//   }

//   // Variables have to be generated for each validation so they don't depend on each other; both validation functions have to be called in either case. If only && is used, validateMessage() won't be called if validateEmail() returns false
//   function validateForm() {
//     let isValidEmail = validateEmail();
//     let isValidMessage = validateMessage();
//     return isValidEmail && isValidMessage;
//   }

//   form.addEventListener('submit', function (event) {
//     // Don't submit to server yet.
//     event.preventDefault();

//     // Is this the proper spot to call this function???
//     validateMessage();

//     if (validateForm()) {
//       alert(
//         'Delivering forms is not implemented yet. Please use provided e-mail address :)'
//       );
//     }
//   });

//   emailInput.addEventListener('input', validateEmail);
//   messageInput.addEventListener('input', validateMessage);
// })();
