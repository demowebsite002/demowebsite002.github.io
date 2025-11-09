document.addEventListener('DOMContentLoaded', function() {
    // 1. Dữ liệu các dịch vụ
    const services = [
        { name: "In Ấn & Thiết Kế", icon: "🖨️", description: "Dịch vụ in ấn tài liệu, banner, danh thiếp nhanh chóng." },
        { name: "Sửa Chữa Điện Lạnh", icon: "❄️", description: "Sửa chữa, bảo trì điều hòa, tủ lạnh, máy giặt tận nơi." },
        { name: "Làm Móng (Nails)", icon: "💅", description: "Làm móng, sơn gel, đắp bột tại nhà hoặc tại studio." },
        { name: "Trà Sữa & Đồ Uống", icon: "🥤", description: "Đặt mua trà sữa, cà phê và đồ uống yêu thích giao hàng tận nơi." },
        { name: "Taxi & Vận Chuyển", icon: "🚗", description: "Đặt xe taxi, xe công nghệ an toàn và tiện lợi." },
        { name: "Hàn Sắt & Cơ Khí", icon: "🛠️", description: "Nhận thi công, sửa chữa các công trình hàn sắt, cửa cổng." }
    ];

    const serviceListContainer = document.querySelector('.service-list');

    // 2. Hàm chèn dịch vụ vào HTML
    function renderServices() {
        services.forEach(service => {
            const card = document.createElement('div');
            card.className = 'service-card';
            card.innerHTML = `
                <span class="service-icon">${service.icon}</span>
                <h4>${service.name}</h4>
                <p>${service.description}</p>
                <p><a href="#">Đặt Dịch Vụ &rarr;</a></p>
            `;
            serviceListContainer.appendChild(card);
        });
    }

    // 3. Hiển thị thông tin liên hệ động
    const contactInfoElement = document.getElementById('contact-info');
    contactInfoElement.textContent = 'support@dichvu247.com | 090-XXXX-YYYY';


    // 4. Gọi hàm render
    renderServices();

    // 5. Thêm chức năng cuộn mượt (Scroll-smooth) cho thanh điều hướng
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});