// ------- CONFIG -------
const PASSWORD = "bananas"; 
// ----------------------

function protectPage() {
  // If already authenticated in this tab, allow access.
  if (sessionStorage.getItem("portfolio_authed") === "true") {
    return; 
  }

  // Ask for password once.
  const userInput = prompt("Enter password to view my portfolio:");

  if (userInput === PASSWORD) {
    sessionStorage.setItem("portfolio_authed", "true");
  } else {
    // Wrong password - block the page from loading
    document.addEventListener('DOMContentLoaded', function() {
      document.body.innerHTML = `
        <div style="padding:40px; font-family: sans-serif;">
          <h2>Access denied</h2>
          <p>Incorrect password.</p>
        </div>
      `;
    });
    // Also stop scripts from running
    throw new Error("Authentication failed");
  }
}

// Run it immediately
protectPage();
