document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Auto-fill order form when a service or product button is clicked
  const serviceButtons = document.querySelectorAll('.select-service');
  const selectedItemInput = document.getElementById('selected-item');

  serviceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const itemName = btn.getAttribute('data-service');
      if (selectedItemInput && itemName) {
        selectedItemInput.value = itemName;
      }
    });
  });

  // Handle Order Form Submission (Opens WhatsApp directly)
  const orderForm = document.getElementById('order-form');
  const clientEmail = document.getElementById('client-email');
  const formFeedback = document.getElementById('form-feedback');

  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const item = selectedItemInput.value.trim();
      const contact = clientEmail.value.trim();

      if (!item || !contact) return;

      formFeedback.textContent = `✓ Request received for "${item}"! Opening WhatsApp...`;

      // ⚠️ Replace 256732166463 with your actual WhatsApp phone number
      const phone = "256732166463"; 
      const message = encodeURIComponent(`Hello Dibra! I would like to order: ${item}. My contact: ${contact}`);
      
      setTimeout(() => {
        window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
        orderForm.reset();
      }, 800);
    });
  }
});
