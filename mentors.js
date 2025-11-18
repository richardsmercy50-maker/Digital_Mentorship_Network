const modal = document.getElementById("formModal");
    const openBtn = document.getElementById("openFormBtn");
    const closeBtn = document.querySelector(".close");

    // Open modal on button click
    openBtn.addEventListener("click", () => {
      modal.style.display = "block";
    });

    // Close modal when "x" is clicked
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Close modal when clicking outside the content
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });

    document.getElementById("mentorForm").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Form submitted successfully! (Saved to local storage)");

    localStorage.setItem("mentorFormData", "submitted");

    this.reset();
});