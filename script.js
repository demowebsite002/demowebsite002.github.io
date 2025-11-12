// script.js

// Phone number updated based on user's image (Zalo: 07.07.30.60.79)
const PHONG_MOBILE_HOTLINE = '0707 306 079';

// DOMContentLoaded ensures JS runs after the HTML is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Handle mobile menu toggle
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

// Function to display the notification modal (replaces alert() for better UX)
function showAlert(message) {
    const modal = document.getElementById('alert-modal');
    const msgElement = document.getElementById('alert-message');

    if (msgElement) {
        msgElement.textContent = message;
    }
    if (modal) {
        // Show modal by removing 'hidden' and adding 'flex'
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}

// Function to hide the notification modal
function hideAlert() {
    const modal = document.getElementById('alert-modal');
    if (modal) {
        // Hide modal by adding 'hidden' and removing 'flex'
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

// Handle contact form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form submission (page reload)

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service_type').value;

    // Simulate successful submission and display notification
    let serviceText = '';
    switch(service) {
        case 'repair':
            serviceText = 'Sửa chữa Mainboard';
            break;
        case 'screen':
            serviceText = 'Ép Kính/Thay Màn Hình';
            break;
        case 'buy':
            serviceText = 'Tư vấn mua/bán/thâu xác điện thoại';
            break;
        case 'other':
            serviceText = 'Yêu cầu khác';
            break;
        default:
            serviceText = 'Dịch vụ chung';
    }

    const successMessage = `Cảm ơn ${name}! Yêu cầu của bạn về dịch vụ "${serviceText}" đã được ghi nhận. Chúng tôi sẽ liên hệ lại qua số ${phone} sớm nhất.`;
    
    showAlert(successMessage);

    // Clear the form after successful submission
    event.target.reset();
}
