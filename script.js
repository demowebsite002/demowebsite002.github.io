// script.js

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
    // const message = document.getElementById('message').value; // Message is not used in the success text

    // In a real environment, data would be sent to the server here.
    // (e.g., using Fetch API or Axios to submit the form data)

    // Simulate successful submission and display notification
    const serviceText = service === 'repair' ? 'Sửa chữa điện thoại' : 
                        service === 'buy' ? 'Tư vấn mua điện thoại' : 'Yêu cầu khác';

    const successMessage = `Cảm ơn ${name}! Yêu cầu của bạn về dịch vụ "${serviceText}" đã được ghi nhận. Chúng tôi sẽ liên hệ lại qua số ${phone} sớm nhất.`;
    
    showAlert(successMessage);

    // Clear the form after successful submission
    event.target.reset();
}
