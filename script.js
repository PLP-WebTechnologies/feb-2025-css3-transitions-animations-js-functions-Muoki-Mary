// Function to save user preference to localStorage
function savePreference() {
  let isAnimationEnabled = document.getElementById("toggleAnimation").checked;
  localStorage.setItem("animationEnabled", isAnimationEnabled);
  alert("Preference saved!");
}

// Function to load the user preference from localStorage
function loadPreference() {
  let isAnimationEnabled = localStorage.getItem("animationEnabled");
  if (isAnimationEnabled === "true") {
    document.getElementById("toggleAnimation").checked = true;
    document.body.classList.add("animations-enabled");
  } else {
    document.getElementById("toggleAnimation").checked = false;
    document.body.classList.remove("animations-enabled");
  }
}

// Function to toggle the animation state
function toggleAnimation() {
  if (document.body.classList.contains("animations-enabled")) {
    document.body.classList.remove("animations-enabled");
  } else {
    document.body.classList.add("animations-enabled");
  }
}

// Event listener to trigger saving of preference
document.getElementById("saveBtn").addEventListener("click", savePreference);

// Load preference when the page is loaded
window.onload = loadPreference;
