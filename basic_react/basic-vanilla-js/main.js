// basic javascript functionality
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  alert("Button clicked!");
});

// tab functionality
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-tab");
    tabContents.forEach((tc) => {
      tc.style.display = tc.id === target ? "block" : "none";
    });
  });
});
