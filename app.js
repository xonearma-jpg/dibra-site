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

  // Auto-select dropdown option when any service or product button is clicked
  const serviceButtons = document.querySelectorAll('.select-service');
  const selectedItemDropdown = document.getElementById('selected-item');

  serviceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const itemName = btn.getAttribute('data-service');
      if (selectedItemDropdown && itemName) {
        selectedItemDropdown.value = itemName;
      }
    });
  });

  // Handle Order Form Submission (Opens WhatsApp directly)
  const orderForm = document.getElementById('order-form');
  const clientContact = document.getElementById('client-contact');
  const formFeedback = document.getElementById('form-feedback');

  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const item = selectedItemDropdown.value;
      const contact = clientContact.value.trim();

      if (!item || !contact) return;

      formFeedback.textContent = `✓ Opening WhatsApp for "${item}"...`;

      const phone = "256732166463"; 
      const message = encodeURIComponent(`Hello Dibra! I would like to order/inquire about: ${item}. My contact: ${contact}`);
      
      setTimeout(() => {
        window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
        orderForm.reset();
      }, 800);
    });
  }
});
