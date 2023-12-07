
/*Div Show / Hide */
var currentVisibleDiv = null;

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
}


/*Panel Slide*/

const signUpButton = document.getElementById("signUpButton");
const signInButton = document.getElementById("signInButton");
const container = document.getElementById("container");

function showSignUpPanel() {
  container.classList.add("right-panel-active");
}

function showSignInPanel() {
  container.classList.remove("right-panel-active");
}

signUpButton.addEventListener("click", showSignUpPanel);
signInButton.addEventListener("click", showSignInPanel);



function downloadPDF() {
  // Replace "your_file.pdf" with the actual file path or URL of your PDF file
  var pdfFile = 'Soil_Test.pdf';
  
  // Create an anchor element
  var link = document.createElement('a');
  
  // Set the href attribute with the file path or URL
  link.href = pdfFile;
  
  // Set the download attribute with the desired file name
  link.download = 'Soil_Test.pdf';
  
  // Append the anchor element to the document
  document.body.appendChild(link);
  
  // Trigger a click event on the anchor element
  link.click();
  
  // Remove the anchor element from the document
  document.body.removeChild(link);
}