/*Div Show / Hide */
var currentVisibleDiv = null;

function toggleDiv(divId) {
  var div = document.getElementById(divId);

  if (currentVisibleDiv !== null && currentVisibleDiv !== div) {
    currentVisibleDiv.style.display = 'none'; // Hide the currently visible div
  }

  if (div.style.display === 'none' || div.style.display === '') {
    div.style.display = 'block'; // Show the div
    currentVisibleDiv = div; // Update the currently visible div
  } else {
    div.style.display = 'none'; // Hide the div
    currentVisibleDiv = null; // No div is currently visible
  }

  // Additional logic to hide the navigation
  var nav = document.querySelector('.nav');
  nav.style.display = 'none';
}

/*Panel Slide*/
const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const container = document.getElementById('container');

function showSignUpPanel() {
  container.classList.add('right-panel-active');
}

function showSignInPanel() {
  container.classList.remove('right-panel-active');
}

signUpButton.addEventListener('click', showSignUpPanel);
signInButton.addEventListener('click', showSignInPanel);



function redirectToIndex() {
    window.location.href = '../Farmer_Section/index.html';
  }