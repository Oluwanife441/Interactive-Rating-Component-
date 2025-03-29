const ratingButtons = document.querySelectorAll(".rating-button");

const cardSuccessElement = document.querySelector(".card-success");

const cardContainerElement = document.querySelector("#card-container");

const ratingNumber = document.getElementById("rating-number");

const submitButton = document.getElementById("submit");

cardSuccessElement.style.display = "none";
window.addEventListener("DOMContentLoaded", () => {
  ratingButtons.forEach((button) => button.classList.remove("active"));
});

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("active")) {
      button.classList.remove("active");
    } else {
      ratingButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    }

    ratingNumber.textContent = button.id;
  });
});
submitButton.addEventListener("click", () => {
  cardContainerElement.remove();
  cardSuccessElement.style.display = "block";
});
