document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Interactive Form Submission Feedback
  const signupForm = document.getElementById('signup-form');
  const emailInput = document.getElementById('email-input');
  const formFeedback = document.getElementById('form-feedback');

  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();

      if (!email) return;

      const submitBtn = signupForm.querySelector('button');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Registering...';
      submitBtn.disabled = true;

      // Simulate instant edge API response
      setTimeout(() => {
        formFeedback.textContent = `✓ Access invite dispatched to ${email}`;
        emailInput.value = '';
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 600);
    });
  }
});
