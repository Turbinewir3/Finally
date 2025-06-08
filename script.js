document.getElementById("identityForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("section1").style.display = "none";
  document.getElementById("section2").style.display = "block";
});

document.getElementById("virtueDespiteDisagreement").addEventListener("change", function () {
  const retractionOptions = document.getElementById("retractionOptions");
  retractionOptions.style.display = this.value === "no" ? "block" : "none";
});

document.getElementById("moralityCheckForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const answer = document.getElementById("virtueDespiteDisagreement").value;
  if (answer === "no") {
    const selected = Array.from(document.getElementById("traitRetractions").selectedOptions).map(opt => opt.text);
    alert("⚠️ Hypocrisy detected! You’re withholding virtue based on: " + selected.join(", "));
  } else {
    alert("✅ Consistency maintained. You’re ready for the next section!");
  }
});
