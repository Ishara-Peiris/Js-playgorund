// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Modal functionality
  document.addEventListener("DOMContentLoaded", () => {
    const learnBtn = document.getElementById("learnBtn");
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("closeModal");
  
    learnBtn.addEventListener("click", () => {
      modal.style.display = "block";
    });
  
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (e) => {
      if (e.target == modal) {
        modal.style.display = "none";
      }
    });
  
    // Dark/Light Mode toggle
    const toggleBtn = document.getElementById("modeToggle");
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      toggleBtn.textContent = document.body.classList.contains("dark-mode")
        ? "Light Mode"
        : "Dark Mode";
    });
  
    // Typing effect
    const typedText = document.getElementById("typed");
    const words = ["Innovators.", "Creators.", "Thinkers.", "Doers."];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
  
    function type() {
      const current = words[wordIndex];
      typedText.textContent = current.substring(0, charIndex);
  
      if (!isDeleting && charIndex < current.length) {
        charIndex++;
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
      }
  
      setTimeout(type, isDeleting ? 100 : 200);
    }
  
    type(); // start typing
  });
  