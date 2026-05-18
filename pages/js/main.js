
// Hàm lưu dữ liệu vào bộ nhớ tạm (localStorage)
function saveStepData(data) {
    const existingData = JSON.parse(localStorage.getItem('loan_application') || '{}');
    const newData = { ...existingData, ...data };
    localStorage.setItem('loan_application', JSON.stringify(newData));
}

// Hàm lấy dữ liệu đã lưu để hiển thị lại khi cần
function getSavedData() {
    return JSON.parse(localStorage.getItem('loan_application') || '{}');
}

// Kiểm tra xem khách hàng đã nhập thông tin bước 1 chưa trước khi vào các bước sau
function checkProgress(currentStep) {
    const data = getSavedData();
    if (currentStep > 1 && !data.fullName) {
        // Nếu chưa có tên mà đã vào bước sau, bắt quay lại bước 1
        window.location.href = '/step1.html';
    }
}
