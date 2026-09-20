/**
 * NexuHR Landing Page Interactivity
 */

// Tab Switching for Modules
function switchTab(tabId) {
  // Update Buttons
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => {
    if (btn.getAttribute('data-tab') === tabId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update Content Panels
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => {
    if (content.id === `tab-${tabId}`) {
      content.classList.remove('hidden');
    } else {
      content.classList.add('hidden');
    }
  });

  // Refresh Lucide Icons in dynamically displayed content
  if (window.lucide) {
    lucide.createIcons();
  }
}

// ROI Calculator logic
const slider = document.getElementById('employeeSlider');
const sliderValue = document.getElementById('sliderValue');
const hoursSavedEl = document.getElementById('hoursSaved');
const moneySavedEl = document.getElementById('moneySaved');

if (slider) {
  slider.addEventListener('input', function(e) {
    const count = parseInt(e.target.value, 10);
    sliderValue.textContent = count;

    // Calculations based on HR metrics
    // ~0.8 hours saved per employee per month in DP/HR routines
    const hours = Math.round(count * 0.8);
    // Average HR hourly cost: ~R$ 60 / hour
    const annualMoney = Math.round(hours * 60 * 12);

    hoursSavedEl.textContent = `${hours}h`;
    moneySavedEl.textContent = `R$ ${annualMoney.toLocaleString('pt-BR')}`;
  });
}

// FAQ Accordion
function toggleFaq(button) {
  const item = button.closest('.faq-item');
  const answer = item.querySelector('.faq-answer');
  const icon = button.querySelector('i');

  const isHidden = answer.classList.contains('hidden');

  // Close all other FAQs
  document.querySelectorAll('.faq-answer').forEach(ans => ans.classList.add('hidden'));
  document.querySelectorAll('.faq-item button i').forEach(ic => {
    if (ic) ic.style.transform = 'rotate(0deg)';
  });

  if (isHidden) {
    answer.classList.remove('hidden');
    if (icon) icon.style.transform = 'rotate(180deg)';
  }
}

// Billing Toggle (Monthly vs Annual)
let currentBilling = 'monthly';

function setBilling(type) {
  currentBilling = type;
  const monthlyBtn = document.getElementById('monthlyBtn');
  const annualBtn = document.getElementById('annualBtn');
  const priceElements = document.querySelectorAll('.price-val');

  if (type === 'annual') {
    annualBtn.classList.add('bg-white', 'text-nexu-dark', 'shadow-sm');
    annualBtn.classList.remove('text-nexu-muted');

    monthlyBtn.classList.remove('bg-white', 'text-nexu-dark', 'shadow-sm');
    monthlyBtn.classList.add('text-nexu-muted');

    priceElements.forEach(el => {
      el.textContent = el.getAttribute('data-annual');
    });
  } else {
    monthlyBtn.classList.add('bg-white', 'text-nexu-dark', 'shadow-sm');
    monthlyBtn.classList.remove('text-nexu-muted');

    annualBtn.classList.remove('bg-white', 'text-nexu-dark', 'shadow-sm');
    annualBtn.classList.add('text-nexu-muted');

    priceElements.forEach(el => {
      el.textContent = el.getAttribute('data-monthly');
    });
  }
}

// Modal Handling
const demoModal = document.getElementById('demoModal');
const modalEmailInput = document.getElementById('modalEmail');

function openModal(planName = '') {
  if (demoModal) {
    demoModal.classList.remove('hidden');
    if (planName) {
      const modalTitle = demoModal.querySelector('h3');
      if (modalTitle) modalTitle.textContent = `Teste Grátis: Plano ${planName}`;
    }
  }
}

function closeModal() {
  if (demoModal) {
    demoModal.classList.add('hidden');
  }
}

// Close modal when clicking outside
window.addEventListener('click', function(e) {
  if (e.target === demoModal) {
    closeModal();
  }
});

// Hero Email Submission
function handleHeroSubmit() {
  const heroEmail = document.getElementById('heroEmail');
  if (heroEmail && heroEmail.value) {
    if (modalEmailInput) modalEmailInput.value = heroEmail.value;
    openModal();
  } else {
    openModal();
  }
}

// Modal Form Submission
function handleModalSubmit(event) {
  event.preventDefault();
  closeModal();
  showToast('🎉 Conta criada com sucesso! Redirecionando para a aplicação demo...');
  
  setTimeout(() => {
    window.location.href = '../app/index.html';
  }, 1600);
}

// Toast System
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (toast && toastMsg) {
    toastMsg.textContent = message;
    toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
      toast.classList.remove('translate-y-0', 'opacity-100');
    }, 4000);
  }
}
