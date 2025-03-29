const ratingButtons = document.querySelectorAll(".rating-button");
const submitButton = document.getElementById("submit");
const ratingCard = document.getElementById("rating-card");
const successCard = document.getElementById("success-card");
const ratingNumber = document.getElementById("rating-number");

let selectedRating = null;

// Handle rating button clicks
ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    ratingButtons.forEach((btn) => btn.classList.remove("active"));

    // Add active class to the clicked button
    button.classList.add("active");

    // Store the selected rating
    selectedRating = button.id;
  });
});

// Handle submit button click
submitButton.addEventListener("click", () => {
  if (selectedRating) {
    // Update the rating number in the success card
    ratingNumber.textContent = selectedRating;

    // Hide the rating card and show the success card
    ratingCard.classList.add("hidden");
    successCard.classList.remove("hidden");
  } else {
    alert("Please select a rating before submitting!");
  }
});
