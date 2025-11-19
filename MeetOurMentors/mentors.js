document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filterBtn");
    const mentors = document.querySelectorAll(".mentor");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");

            // Change active button style
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Filter mentors
            mentors.forEach(mentor => {
                const tag = mentor.querySelector(".mentorTag").textContent.trim();
                if (category === "all" || tag === category) {
                    mentor.style.display = "block";
                } else {
                    mentor.style.display = "none";
                }
            });
        });
    });
});

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

  fetch("../footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });